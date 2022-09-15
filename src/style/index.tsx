import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
  position: relative;
`;

export const Header = styled.header`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
