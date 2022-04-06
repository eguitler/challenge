import styled from 'styled-components';
import Section from '../../components/Section';

export const NotFoundSection = styled(Section)`
  margin-top: ${({ theme }) => theme.layout.header_height};
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 2rem auto;
`;

export const Message = styled.span`
  width: 100%;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fonts.size.large};
  white-space: pre-wrap;
  text-align: center;
  margin-bottom: 2rem;
`;

