import styled from 'styled-components';

export const InputStyled = styled.input`
  border: none;
  /* border: 1px solid white; */
  height: 100%;
  width: 100%;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fonts.size.normal};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  /* color: ${({ theme }) => theme.colors.primary}; */
  padding: 0 1rem;
  caret-color: yellow;
  border: 1px solid ${({ theme }) => theme.colors.low_contrast};
  color: ${({ theme }) => theme.colors.low_contrast};
  border-radius: 8px;
`;
