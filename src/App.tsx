import useSWRImmutable from "swr/immutable";
import { get } from "./api/api";
import { isdialogmoteApiUrl, syfomotebehovApiUrl } from "./api/urls";
import { Fetcher } from "swr";
import { DialogmotePanel } from "./components/DialogmotePanel";
import React from "react";
import { MotebehovPanel } from "./components/panels/motebehov/MotebehovPanel";
import { MotebehovDTO } from "./schema/motebehovSchema";
import { BrevDTO } from "./schema/brevSchema";

function App() {
  const fetchBrev: Fetcher<BrevDTO[], string> = (path) => get(path);
  const fetchMotebehov: Fetcher<MotebehovDTO, string> = (path) => get(path);
  const dialogmoteResponse = useSWRImmutable(isdialogmoteApiUrl, fetchBrev);
  const motebehovResponse = useSWRImmutable(syfomotebehovApiUrl, fetchMotebehov);

  if (dialogmoteResponse.data && dialogmoteResponse.data.length > 0) {
    const brevArraySorted = dialogmoteResponse.data.sort(
      (a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
    );
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
