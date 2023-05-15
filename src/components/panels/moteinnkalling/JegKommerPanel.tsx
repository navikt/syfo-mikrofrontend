import { MoteinnkallingBasePanel } from "./MoteinnkallingBasePanel";
import { LeftColumn } from "../../columns/LeftColumn";
import { Column } from "../../columns/Column";
import { JegDeltarBoks } from "../../deltakelseBoks/JegDeltarBoks";
import { TidBoks } from "../../tidBoks/TidBoks";
import { BrevTypeDTO } from "../../../schema/brevSchema";

interface Props {
  date: string;
  brevType: BrevTypeDTO;
}

export const JegKommerPanel = ({ date, brevType }: Props) => {
  return (
    <MoteinnkallingBasePanel svar={"KOMMER"} brevType={brevType}>
      <LeftColumn text={"Innkalling til dialogmøte"} />

      <Column gap={"0.5rem"}>
        <JegDeltarBoks />
        <TidBoks tid={date} />
      </Column>
    </MoteinnkallingBasePanel>
  );
};
