import styled from "styled-components";

interface Props {
  gap?: string;
}

export const Column = styled.div<Props>`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${(props) => props.gap};
`;
