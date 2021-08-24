import styled from "styled-components";

export const CustomButton = styled.button`
  border-style: ${(props) => props.theme.borders.style};
  border-radius: ${(props) => props.theme.borders.radius};
  background: ${(props) => props.theme.colors.primary};
  padding: 0.5rem;
  color: white;
  cursor: pointer;
  width: 100%;
`;
