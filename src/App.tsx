import useSWRImmutable from "swr/immutable";
import { get } from "./api/api";
import { apiUrl } from "./api/urls";
import "@navikt/ds-css";
import { Fetcher } from "swr";
import { Brev } from "./types/shared/brev";
import { DialogmoteInnkallingPanel } from "./components/DialogmoteInnkallingPanel";
import React from "react";

function App() {
  const fetchBrev: Fetcher<Brev[], string> = (path) => get(path);
  const { data } = useSWRImmutable(apiUrl, fetchBrev);

  if (data) {
    const brevArraySorted = data.sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf());
    const latestBrev = brevArraySorted[0];

    if (latestBrev.brevType === "INNKALT" || latestBrev.brevType === "NYTT_TID_STED") {
      return (
        <DialogmoteInnkallingPanel
          attending={latestBrev.svar?.svarType || null}
          place={latestBrev.sted}
          date={latestBrev.tid}
          brevType={latestBrev.brevType}
        />
      );
    }
  }

  return null;
}

export default App;
