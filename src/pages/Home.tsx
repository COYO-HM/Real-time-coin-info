import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Header, Loader, Title } from "../style";
import { ICoin } from "../types";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import ToggleSwitch from "../components/ToggleSwitch";

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 15px;
  transition: color 0.2s ease-in;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
  }
  img {
    height: 35px;
    margin-right: 10px;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: #dcdde1;
    color: ${(props) => props.theme.accentColor};
  }
`;

function Home() {
  const { isLoading, data } = useQuery<ICoin[]>(["allCoins"], fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>COIN</title>
      </Helmet>
      <Header>
        <Title>COIN</Title>
        <ToggleSwitch />
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={coin}>
                <img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt={""}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Home;
