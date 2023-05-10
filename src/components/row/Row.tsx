import styled from "styled-components";

interface Props {
  spaceBetweenChildren?: "true" | "false";
}
export const Row = styled.div<Props>`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: ${(props) => (props.spaceBetweenChildren === "true" ? "space-between" : "normal")};
  gap: var(--a-spacing-4);
`;
