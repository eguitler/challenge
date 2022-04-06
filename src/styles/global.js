import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.contrast};
    font-family: ${({ theme }) => theme.fonts.family};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    color: white;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
  }

  @font-face {
    font-family: 'DM Sans';
    src: url('/fonts/DMSans-Bold.ttf');
    font-weight: 700;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url('/fonts/DMSans-Medium.ttf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url('/fonts/DMSans-Regular.ttf');
    font-weight: 400;
  }
`;
