import { MoteinnkallingBasePanel } from "./MoteinnkallingBasePanel";
import { LeftColumn } from "../../columns/LeftColumn";
import { Column } from "../../columns/Column";
import { ForesporselSendtBoks } from "../../deltakelseBoks/ForesporselSendtBoks";
import { TidBoks } from "../../tidBoks/TidBoks";
import { BrevTypeDTO } from "../../../schema/brevSchema";

interface Props {
  date: string;
  brevType: BrevTypeDTO;
}

export const OnskerEndreTidStedPanel = ({ date, brevType }: Props) => {
  return (
    <MoteinnkallingBasePanel svar={"ONSKER_ENDRING"} brevType={brevType}>
      <LeftColumn text="Du ønsker å endre tid eller sted" />

      <Column gap={"0.5rem"}>
        <ForesporselSendtBoks />
        <TidBoks tid={date} />
      </Column>
    </MoteinnkallingBasePanel>
  );
};
