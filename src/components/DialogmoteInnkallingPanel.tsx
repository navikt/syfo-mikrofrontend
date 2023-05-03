import { SvarTypeDTO } from "../schema/brevSchema";
import React from "react";
import { JegKommerPanel } from "./panels/JegKommerPanel";
import { OnskerAvlysePanel } from "./panels/OnskerAvlysePanel";
import { OnskerEndreTidStedPanel } from "./panels/OnskerEndreTidStedPanel";
import { IkkeSvartPanel } from "./panels/IkkeSvartPanel";

const innkallingText = "Innkalling til dialogmøte";

interface Props {
  date: string;
  attending: SvarTypeDTO | null;
}

export const DialogmoteInnkallingPanel = ({ date, attending }: Props) => {
  switch (attending) {
    case "KOMMER":
      return <JegKommerPanel date={date} />;
    case "KOMMER_IKKE":
      return <OnskerAvlysePanel date={date} />;
    case "NYTT_TID_STED":
      return <OnskerEndreTidStedPanel date={date} />;
    default:
      return <IkkeSvartPanel infoText={innkallingText} date={date} />;
  }
};
