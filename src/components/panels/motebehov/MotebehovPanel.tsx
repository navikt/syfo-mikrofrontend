import { dialogmoteUrl } from "../../../api/urls";
import React from "react";
import { BasePanel } from "../BasePanel";
import { logEvent } from "../../../amplitude/amplitude";

export const MotebehovPanel = () => {
  return (
    <BasePanel
      href={`${dialogmoteUrl}/motebehov/svar`}
      onClick={() => logEvent("Navigerer til svar møtebehov")}
      heading={{ text: "Dialogmøte med NAV", icon: "warning" }}
      mainContent={{
        text: "Trenger du et dialogmøte?",
        textFormat: "text",
        tag: {
          text: "Du har ikke svart",
          variant: "warning-moderate",
        },
      }}
    />
  );
};
