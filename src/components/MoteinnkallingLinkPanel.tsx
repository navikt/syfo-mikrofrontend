import { LinkPanel } from "@navikt/ds-react";
import { dialogmoteUrl } from "../api/urls";
import { ReactNode } from "react";

interface Props {
  header: string;
  children: ReactNode;
}
export const MoteinnkallingLinkPanel = ({ header, children }: Props) => {
  return (
    <LinkPanel className="bg-[#f7f7f7]" href={`${dialogmoteUrl}/moteinnkalling`} border>
      <div className="flex flex-col space-y-4">
        <LinkPanel.Title>{header}</LinkPanel.Title>
        {children}
      </div>
    </LinkPanel>
  );
};
