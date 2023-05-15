import { ReactNode } from "react";
import { BaseLinkPanel } from "../BaseLinkPanel";
import { dialogmoteUrl } from "../../../api/urls";
import { logEvent } from "../../../amplitude/amplitude";
import { BrevTypeDTO } from "../../../schema/brevSchema";

type Svar = "KOMMER" | "ONSKER_AVLYSE" | "ONSKER_ENDRING" | "IKKE_SVART";

interface Props {
  svar: Svar;
  brevType: BrevTypeDTO;
  children: ReactNode;
}
export const MoteinnkallingBasePanel = ({ svar, brevType, children }: Props) => {
  return (
    <BaseLinkPanel
      href={`${dialogmoteUrl}/moteinnkalling`}
      onClick={() => logEvent("Navigerer til møteinnkalling", { svar: svar, brevType: brevType })}
    >
      {children}
    </BaseLinkPanel>
  );
};
