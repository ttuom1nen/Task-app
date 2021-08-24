import styled from "styled-components";

export const CustomInput = styled.input`
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borders.radius};
  background: white;
  padding: 0.5rem;
  color: black;
  width: 100%;
  box-sizing: border-box;
`;
