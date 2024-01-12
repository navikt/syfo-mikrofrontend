import { BrevTypeDTO, SvarTypeDTO } from "../../../schema/brevSchema";
import { getLongDateFormat } from "../../../utils/dateUtils";
import { BasePanel, TagMeta } from "../BasePanel";
import { dialogmoteUrl } from "../../../api/urls";
import { logEvent } from "../../../amplitude/amplitude";

type SvarTypeAnalytics = "KOMMER" | "ONSKER_AVLYSE" | "ONSKER_ENDRING" | "IKKE_SVART";

interface Props {
  date: string;
  attending: SvarTypeDTO | null;
  brevType: BrevTypeDTO;
}

const attendingToSvartypeAnalytics = (attending: SvarTypeDTO | null): SvarTypeAnalytics => {
  switch (attending) {
    case "KOMMER":
      return "KOMMER";
    case "KOMMER_IKKE":
      return "ONSKER_AVLYSE";
    case "NYTT_TID_STED":
      return "ONSKER_ENDRING";
    default:
      return "IKKE_SVART";
  }
};

export const DialogmotePanel = ({ date, attending, brevType }: Props) => {
  const mainText = brevType === "NYTT_TID_STED" ? "Møtet med NAV er flyttet" : getLongDateFormat(date);
  const mainTextFormat = brevType === "NYTT_TID_STED" ? "text" : "date";

  const tag = (): TagMeta => {
    switch (attending) {
      case "KOMMER":
        return {
          text: "Du har takket ja",
          variant: "success-moderate",
        };
      case "KOMMER_IKKE":
        return {
          text: "Du ønsker å avlyse",
          variant: "neutral-moderate",
        };
      case "NYTT_TID_STED":
        return {
          text: "Du ønsker å endre tid eller sted",
          variant: "neutral-moderate",
        };
      default:
        return {
          text: brevType === "NYTT_TID_STED" ? "Se endringene og svar" : "Du har ikke svart",
          variant: "warning-moderate",
        };
    }
  };

  return (
    <BasePanel
      href={`${dialogmoteUrl}/moteinnkalling`}
      onClick={() =>
        logEvent("Navigerer til møteinnkalling", { svar: attendingToSvartypeAnalytics(attending), brevType: brevType })
      }
      heading={{ text: "Dialogmøte med NAV", icon: "warning" }}
      mainContent={{
        text: mainText,
        textFormat: mainTextFormat,
        tag: tag(),
      }}
    />
  );
};
