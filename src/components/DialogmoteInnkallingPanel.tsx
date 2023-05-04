import { SvarTypeDTO } from "../schema/brevSchema";
import React from "react";
import { JegKommerPanel } from "./panels/JegKommerPanel";
import { OnskerAvlysePanel } from "./panels/OnskerAvlysePanel";
import { OnskerEndreTidStedPanel } from "./panels/OnskerEndreTidStedPanel";
import { IkkeSvartPanel } from "./panels/IkkeSvartPanel";
import { BrevType } from "../types/client/brev";

const innkallingText = "Du har mottatt en innkalling til Dialogmøte";
const motetErFlyttetText = "Møtet med NAV er flyttet";

interface Props {
  date: string;
  place: string;
  attending: SvarTypeDTO | null;
  brevType: BrevType;
}

export const DialogmoteInnkallingPanel = ({ date, place, attending, brevType }: Props) => {
  const infoText = brevType === "INNKALT" ? innkallingText : motetErFlyttetText;

  switch (attending) {
    case "KOMMER":
      return <JegKommerPanel infoText={infoText} date={date} place={place} brevType={brevType} />;
    case "KOMMER_IKKE":
      return <OnskerAvlysePanel date={date} place={place} brevType={brevType} />;
    case "NYTT_TID_STED":
      return <OnskerEndreTidStedPanel date={date} place={place} brevType={brevType} />;
    default:
      return <IkkeSvartPanel infoText={infoText} date={date} place={place} brevType={brevType} />;
  }
};
