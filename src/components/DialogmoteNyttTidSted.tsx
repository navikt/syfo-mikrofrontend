import { Brev } from "../types/shared/brev";
import Komponent from "./Komponent";
import { getLongDateFormat } from "../utils/dateUtils";

interface Props {
  brev: Brev;
}

export const DialogmoteNyttTidSted = ({ brev }: Props) => {
  const tidspunkt = getLongDateFormat(brev.tid);
  const sted = brev.sted;
  return <Komponent tekst={`Veileder har forandret møtetidspunkt til: ${tidspunkt}, ${sted}.`} />;
};
