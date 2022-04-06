import styled from 'styled-components';

export const Content = styled.div`
  margin-top: -${({ theme }) => theme.layout.header_height};
  min-height: 85vh;
`;
