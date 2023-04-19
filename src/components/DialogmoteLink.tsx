import { LinkPanel } from "@navikt/ds-react";
import { dialogmoteUrl } from "../api/urls";

interface Props {
  linkText: string;
  brevUuid: string;
}
export const DialogmoteLink = ({ linkText, brevUuid }: Props) => {
  return (
    <LinkPanel href={`${dialogmoteUrl}/${brevUuid}`} border>
      <LinkPanel.Title>{linkText}</LinkPanel.Title>
    </LinkPanel>
  );
};
