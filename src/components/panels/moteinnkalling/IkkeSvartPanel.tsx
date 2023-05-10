import { MoteinnkallingBasePanel } from "./MoteinnkallingBasePanel";
import { LeftColumn } from "../../columns/LeftColumn";
import { Column } from "../../columns/Column";
import { IkkeSvartBoks } from "../../deltakelseBoks/IkkeSvartBoks";
import { TidBoks } from "../../tidBoks/TidBoks";
import { BrevTypeDTO } from "../../../schema/brevSchema";

const innkallingText = "Innkalling til dialogmøte";
const motetErFlyttetText = "Møtet med NAV er flyttet";

interface Props {
  date: string;
  brevType: BrevTypeDTO;
}

export const IkkeSvartPanel = ({ date, brevType }: Props) => {
  const infoText = brevType === "INNKALT" ? innkallingText : motetErFlyttetText;

  return (
    <MoteinnkallingBasePanel svar={"IKKE_SVART"} brevType={brevType}>
      <LeftColumn text={infoText} />

      <Column gap={"0.5rem"}>
        <IkkeSvartBoks />
        <TidBoks tid={date} />
      </Column>
    </MoteinnkallingBasePanel>
  );
};
