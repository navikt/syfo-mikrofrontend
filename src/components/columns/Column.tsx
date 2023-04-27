import styled from "styled-components";

interface Props {
  gap?: string;
  paddingLeft?: string;
  paddingRight?: string;
}

export const Column = styled.div<Props>`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${(props) => props.gap};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
`;
