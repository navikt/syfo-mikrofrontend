import { PinIcon } from "@navikt/aksel-icons";
import React from "react";
import { InfoBox } from "../InfoBox";

interface Props {
  sted: string;
}

export const StedBoks = ({ sted }: Props) => {
  return <InfoBox text={sted} icon={<PinIcon title="a11y-title" fontSize="1.5rem" />} background={"#cce1ff"} />;
};
