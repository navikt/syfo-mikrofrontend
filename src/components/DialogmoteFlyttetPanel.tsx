import { SvarTypeDTO } from "../schema/brevSchema";
import React from "react";
import { JegKommerPanel } from "./panels/JegKommerPanel";
import { OnskerAvlysePanel } from "./panels/OnskerAvlysePanel";
import { OnskerEndreTidStedPanel } from "./panels/OnskerEndreTidStedPanel";
import { IkkeSvartPanel } from "./panels/IkkeSvartPanel";

interface Props {
  date: string;
  place: string;
  attending: SvarTypeDTO | null;
}

export const DialogmoteFlyttetPanel = ({ date, place, attending }: Props) => {
  switch (attending) {
    case "KOMMER":
      return <JegKommerPanel date={date} place={place} />;
    case "KOMMER_IKKE":
      return <OnskerAvlysePanel place={place} />;
    case "NYTT_TID_STED":
      return <OnskerEndreTidStedPanel />;
    default:
      return <IkkeSvartPanel date={date} place={place} />;
  }
};
