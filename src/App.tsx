import useSWRImmutable from "swr/immutable";
import { get } from "./api/api";
import { apiUrl } from "./api/urls";
import "@navikt/ds-css";
import { Fetcher } from "swr";
import { Brev } from "./types/shared/brev";
import { DialogmoteInnkalt } from "./components/DialogmoteInnkalt";
import { DialogmoteNyttTidSted } from "./components/DialogmoteNyttTidSted";

function App() {
  const fetchBrev: Fetcher<Brev[], string> = (path) => get(path);
  const { data } = useSWRImmutable(apiUrl, fetchBrev);

  if (data) {
    const brevArraySorted = data.sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf());
    const latestBrev = brevArraySorted[0];

    switch (latestBrev.brevType) {
      case "INNKALT":
        return <DialogmoteInnkalt brev={latestBrev} />;
      case "NYTT_TID_STED":
        return <DialogmoteNyttTidSted />;
      default:
        return null;
    }
  }

  return null;
}

export default App;
