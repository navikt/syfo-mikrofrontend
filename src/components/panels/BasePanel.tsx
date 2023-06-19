import React from "react";
import styled from "styled-components";
import { Heading, Tag } from "@navikt/ds-react";
import { HeadingSpacing } from "../typography/typography";
import { ChevronRightIcon, ExclamationmarkTriangleFillIcon } from "@navikt/aksel-icons";
import { Column } from "../columns/Column";

const YellowWarningIcon = styled(ExclamationmarkTriangleFillIcon)`
  background: radial-gradient(circle at 50% 57%, var(--a-surface-default) 32%, 0, transparent);
  color: var(--ac-alert-icon-warning-color, var(--a-icon-warning));
`;

const StyledPanel = styled.div`
  width: 100%;
  text-decoration: none;
  background-color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 0.5px 0 rgba(0, 0, 0, 0.18);

  &:hover {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 0 0.5px 0 rgba(0, 0, 0, 0.08);

    .navds-link-panel__chevron {
      transform: translateX(4px);
    }

    .dialogmote__title {
      text-decoration: underline;
      color: var(--ac-link-panel-hover-text, var(--a-text-action));
    }
  }
`;

export const HeadingRow = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: var(--a-spacing-4);
  border-bottom: 1px solid #0000001a;
`;

const MainContentRow = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: var(--a-spacing-4);
`;

const MainContentText = styled(Heading)`
  font-weight: var(--a-font-weight-regular);
`;

const ChevronSection = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ContainedTag = styled(Tag)`
  width: fit-content;
`;

const AlertContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface Heading {
  text: string;
  icon: "warning" | "none";
}

interface MainContent {
  text: string;
  textFormat: "text" | "date";
  tag: TagMeta;
}

export interface TagMeta {
  text: string;
  variant: "success-moderate" | "warning-moderate" | "neutral-moderate";
}

interface Props {
  href: string;
  onClick: () => void;
  heading: Heading;
  mainContent: MainContent;
}
export const BasePanel = ({ href, onClick, heading, mainContent }: Props) => {
  return (
    <StyledPanel
      onClick={() => {
        onClick();
        window.location.href = href;
      }}
    >
      <HeadingRow>
        <HeadingSpacing size={"small"} level={"2"} className="dialogmote__title">
          {heading.text}
        </HeadingSpacing>
        <ChevronSection>
          {heading.icon === "warning" ? (
            <AlertContainer>
              <YellowWarningIcon />
            </AlertContainer>
          ) : null}
          <ChevronRightIcon className="navds-link-panel__chevron" aria-hidden />
        </ChevronSection>
      </HeadingRow>
      <MainContentRow>
        <Column gap={"1rem"}>
          <MainContentText size={mainContent.textFormat === "text" ? "medium" : "large"} level={"3"}>
            {mainContent.text}
          </MainContentText>
          <ContainedTag size={"small"} variant={mainContent.tag.variant}>
            {mainContent.tag.text}
          </ContainedTag>
        </Column>
      </MainContentRow>
    </StyledPanel>
  );
};
