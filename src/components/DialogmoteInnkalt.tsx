import { Brev } from "../types/shared/brev";
import React from "react";
import { getFormattedMonth, getFormattedTime } from "../utils/dateUtils";
import { DialogmotePanel } from "./DialogmotePanel";

interface Props {
  brev: Brev;
}

export const DialogmoteInnkalt = ({ brev }: Props) => {
  return (
    <DialogmotePanel
      header={"Dialogmøte"}
      attending={brev.svar?.svarType || null}
      place={brev.sted}
      date={getFormattedMonth(brev.tid)}
      time={getFormattedTime(brev.tid)}
    />
  );
};
