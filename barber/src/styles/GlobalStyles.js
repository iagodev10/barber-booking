import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Base do app */
  body {
    background-color: ${({ theme }) => theme.colors.deepBlack};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  /* Textos padrão */
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 600;
  }

  p, span, label {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  small {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  /* Links */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Botões */
  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
