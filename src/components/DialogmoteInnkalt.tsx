import { Brev } from "../types/shared/brev";
import Komponent from "./Komponent";
import { getLongDateFormat } from "../utils/dateUtils";

interface Props {
  brev: Brev;
}

export const DialogmoteInnkalt = ({ brev }: Props) => {
  return <Komponent tekst={`Du har blitt innkalt til dialogmøte ${getLongDateFormat(brev.tid)}`} />;
};
