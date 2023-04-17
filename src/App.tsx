import useSWRImmutable from "swr/immutable";
import { get } from "./api/api";
import { apiUrl } from "./api/urls";
import Komponent from "./components/Komponent";
import "@navikt/ds-css";
import { Fetcher } from "swr";
import { Brev } from "./types/shared/brev";

function App() {
  const fetchBrev: Fetcher<Brev[], string> = (path) => get(path);
  const { data } = useSWRImmutable(apiUrl, fetchBrev);

  if (data) {
    return (
      <section>
        <Komponent tekst={`Siste brevtype: ${data[0].brevType}`} />
      </section>
    );
  }

  return null;
}

export default App;
