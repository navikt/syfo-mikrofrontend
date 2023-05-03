import useSWRImmutable from "swr/immutable";
import { get } from "./api/api";
import { apiUrl } from "./api/urls";
import "@navikt/ds-css";
import { Fetcher } from "swr";
import { Brev } from "./types/shared/brev";
import { DialogmoteInnkallingPanel } from "./components/DialogmoteInnkallingPanel";
import React from "react";
import { DialogmoteFlyttetPanel } from "./components/DialogmoteFlyttetPanel";

function App() {
  const fetchBrev: Fetcher<Brev[], string> = (path) => get(path);
  const { data } = useSWRImmutable(apiUrl, fetchBrev);

  if (data) {
    const brevArraySorted = data.sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf());
    const latestBrev = brevArraySorted[0];

    switch (latestBrev.brevType) {
      case "INNKALT":
        return <DialogmoteInnkallingPanel attending={latestBrev.svar?.svarType || null} date={latestBrev.tid} />;
      case "NYTT_TID_STED":
        return <DialogmoteFlyttetPanel attending={latestBrev.svar?.svarType || null} date={latestBrev.tid} />;
      default:
        return null;
    }
  }

  return null;
}

export default App;
