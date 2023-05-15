import { BrevTypeDTO, SvarTypeDTO } from "../schema/brevSchema";
import React from "react";

import { JegKommerPanel } from "./panels/moteinnkalling/JegKommerPanel";
import { OnskerAvlysePanel } from "./panels/moteinnkalling/OnskerAvlysePanel";
import { OnskerEndreTidStedPanel } from "./panels/moteinnkalling/OnskerEndreTidStedPanel";
import { IkkeSvartPanel } from "./panels/moteinnkalling/IkkeSvartPanel";

interface Props {
  date: string;
  attending: SvarTypeDTO | null;
  brevType: BrevTypeDTO;
}

export const DialogmotePanel = ({ date, attending, brevType }: Props) => {
  switch (attending) {
    case "KOMMER":
      return <JegKommerPanel date={date} brevType={brevType} />;
    case "KOMMER_IKKE":
      return <OnskerAvlysePanel date={date} brevType={brevType} />;
    case "NYTT_TID_STED":
      return <OnskerEndreTidStedPanel date={date} brevType={brevType} />;
    default:
      return <IkkeSvartPanel date={date} brevType={brevType} />;
  }
};
