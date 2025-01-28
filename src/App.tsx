import useSWRImmutable from "swr/immutable";
import { get } from "./api/api";
import { isdialogmoteApiUrl, syfomotebehovApiUrl } from "./api/urls";
import { Fetcher } from "swr";
import React from "react";
import { MotebehovPanel } from "./components/panels/motebehov/MotebehovPanel";
import { MotebehovDTO } from "./schema/motebehovSchema";
import { BrevDTO } from "./schema/brevSchema";
import { DialogmotePanel } from "./components/panels/moteinnkalling/DialogmotePanel";

function App() {
  const fetchBrev: Fetcher<BrevDTO[], string> = (path) => get(path);
  const fetchMotebehov: Fetcher<MotebehovDTO, string> = (path) => get(path);
  const dialogmoteResponse = useSWRImmutable(isdialogmoteApiUrl, fetchBrev);
  const motebehovResponse = useSWRImmutable(syfomotebehovApiUrl, fetchMotebehov);

  if (dialogmoteResponse.error) throw dialogmoteResponse.error;
  if (motebehovResponse.error) throw motebehovResponse.error;

  if (dialogmoteResponse.data && dialogmoteResponse.data.length > 0) {
    const brevArraySorted = dialogmoteResponse.data
      .filter((brev) => brev.brevType !== "REFERAT_ENDRET")
      .sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf());
    const latestBrev = brevArraySorted[0];

    if (latestBrev.brevType === "INNKALT" || latestBrev.brevType === "NYTT_TID_STED") {
      return (
        <DialogmotePanel
          attending={latestBrev.svar?.svarType || null}
          date={latestBrev.tid}
          brevType={latestBrev.brevType}
        />
      );
    }
  }

  if (
    motebehovResponse.data &&
    motebehovResponse.data.visMotebehov === true &&
    motebehovResponse.data.skjemaType === "SVAR_BEHOV" &&
    motebehovResponse.data.motebehov === null
  ) {
    return <MotebehovPanel />;
  }

  return null;
}

export default App;
