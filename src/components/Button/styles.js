/* eslint-disable default-case */
import styled, { css } from 'styled-components';

const applyVariant = (theme, variant) => {
  const { colors } = theme;

  switch (variant) {

    case 'primary':
      return css`
        background-color: ${colors.primary};
        border: 3px solid ${colors.primary};
        color: ${colors.text_contrast};

        :hover {
          color: ${colors.primary};
          background-color: transparent;
        }
      `;

    case 'secondary':
      return css`
        border: 3px solid ${colors.secondary};
      `;
  }
};

const applySize = (theme, size) => {
  const { fonts } = theme;

  switch (size) {

    case 'small':
      return css`
        font-size: ${fonts.size.small};
        font-weight: ${fonts.weight.bold};
        padding: 0 .7rem;
      `;

    case 'medium':
      return css`
        padding: .5rem 2rem;
        font-size: ${fonts.size.normal};
        font-weight: ${fonts.weight.bold};
      `;

    case 'large':
      return css`
        padding: 1rem 6rem;
        font-size: ${fonts.size.large};
        font-weight: ${fonts.weight.bold};

        @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.mobile}) {
          padding: 1rem 4rem;
        }

        @media screen and (max-width: ${({ theme }) => theme.layout.breakpoints.mobile_sm}) {
          padding: 1rem 2rem;
        }
      `;
  }
};

export const ButtonStyled = styled.button`
  padding: 1rem 2rem;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  border-radius: 45px;
  cursor: pointer;
  transition: all 200ms ease;

  ${({ theme, variant }) => applyVariant(theme, variant)}
  ${({ theme, size }) => applySize(theme, size)}
`;
