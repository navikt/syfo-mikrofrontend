import styled from "styled-components";

interface StylingProps {
  background: string;
}

export const SpacedBaseBox = styled.div<StylingProps>`
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  border-radius: 4px;
  background: ${(props) => props.background};
  align-items: center;
  justify-content: space-between;
  gap: var(--a-spacing-4);
`;
