import styled from "styled-components";

interface StylingProps {
  background: string;
}

export const BaseBox = styled.div<StylingProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.8rem;
  border-radius: 4px;
  background: ${(props) => props.background};
`;
