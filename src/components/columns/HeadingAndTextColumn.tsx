import { Column } from "./Column";
import React from "react";
import { HeadingSpacing } from "../typography/typography";
import styled from "styled-components";
import { Heading } from "@navikt/ds-react";

export const InfoTextSection = styled.div`
  height: 100%;
  display: flex;
`;
export const HeadingLighter = styled(Heading)`
  font-weight: var(--a-font-weight-regular);
`;

interface Props {
  text: string;
}

export const HeadingAndTextColumn = ({ text }: Props) => {
  return (
    <Column paddingRight={"1rem"}>
      <HeadingSpacing size={"small"} level={"2"} spacing>
        Dialogmøte
      </HeadingSpacing>
      <InfoTextSection>
        <HeadingLighter size={"medium"}>{text}</HeadingLighter>
      </InfoTextSection>
    </Column>
  );
};
