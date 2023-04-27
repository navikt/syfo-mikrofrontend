import { SvarTypeDTO } from "../schema/brevSchema";
import React from "react";
import { JegKommerPanel } from "./panels/JegKommerPanel";
import { OnskerAvlysePanel } from "./panels/OnskerAvlysePanel";
import { OnskerEndreTidStedPanel } from "./panels/OnskerEndreTidStedPanel";
import { IkkeSvartPanel } from "./panels/IkkeSvartPanel";

const innkallingText = "Du har mottatt en innkalling til Dialogmøte.";

interface Props {
  date: string;
  place: string;
  attending: SvarTypeDTO | null;
}

export const DialogmoteInnkallingPanel = ({ date, place, attending }: Props) => {
  switch (attending) {
    case "KOMMER":
      return <JegKommerPanel infoText={innkallingText} date={date} place={place} />;
    case "KOMMER_IKKE":
      return <OnskerAvlysePanel date={date} place={place} />;
    case "NYTT_TID_STED":
      return <OnskerEndreTidStedPanel date={date} place={place} />;
    default:
      return <IkkeSvartPanel infoText={innkallingText} date={date} place={place} />;
  }
};
