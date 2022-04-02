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
          background-color: ${colors.contrast};
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
      `;

    case 'medium':
      return css`
      `;

    case 'large':
      return css`
        width: 20rem;
        font-size: ${fonts.size.large};
        font-weight: ${fonts.weight.bold};
      `;
  }
};

const applyShape = (theme, shape) => {
  switch (shape) {

    case 'oval':
      return css`
      `;

    case 'square':
      return css`
        border-radius: 8px;
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
  ${({ theme, shape }) => applyShape(theme, shape)}
`;
