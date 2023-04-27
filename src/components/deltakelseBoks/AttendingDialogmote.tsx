import { SvarTypeDTO } from "../../schema/brevSchema";
import { ReactElement } from "react";
import { JegDeltarBoks } from "./JegDeltarBoks";
import { ForesporselSendtBoks } from "./ForesporselSendtBoks";
import { NyttTidStedBoks } from "./NyttTidStedBoks";
import { IkkeSvartBoks } from "./IkkeSvartBoks";

interface AttendingDialogmoteProps {
  attending: SvarTypeDTO | null;
}

export const AttendingDialogmote = ({ attending }: AttendingDialogmoteProps): ReactElement => {
  switch (attending) {
    case "KOMMER":
      return <JegDeltarBoks />;
    case "KOMMER_IKKE":
      return <ForesporselSendtBoks />;
    case "NYTT_TID_STED":
      return <NyttTidStedBoks />;
    default:
      return <IkkeSvartBoks />;
  }
};
