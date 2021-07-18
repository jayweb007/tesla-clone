import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function HeaderBlock() {
  return (
    <Container>
      <Header>
        <HeaderInfo>
          <h1>Model S</h1>
          <h4>
            Order Online for <span>Touchless Delivery</span>
          </h4>
        </HeaderInfo>
        <HeaderButton>
          <ButtonPrimary>custom order</ButtonPrimary>
          <ButtonSecondary>existing inventory</ButtonSecondary>
        </HeaderButton>
        <ExpandMoreIcon fontSize="large" />
      </Header>
    </Container>
  );
}

export default HeaderBlock;

const Container = styled.div`
  background: url("https://tesla.com/ns_videos/model-3-social.jpg") no-repeat
    center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  place-items: center;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 360px;

  .MuiSvgIcon-root {
    align-self: center;
    margin-right: 20px;
    margin-top: 20px;
    font-size: 50px;
  }
`;
const HeaderInfo = styled.div`
  text-align: center;
  flex: 1;
  margin-top: -55px;

  h1 {
    color: #393c41;
    font-weight: 500;
    font-size: 38px;
    margin-bottom: 10px;
  }

  h4 {
    color: #5c5e62;
    font-weight: 400;
    font-size: 15px;

    span {
      padding-bottom: 4px;
      padding-top: 15px;
      border-bottom: 1px solid black;
      cursor: pointer;
      opacity: 0.9;

      &:hover {
        color: black;
        border-bottom: 2px solid black;
      }
    }
  }
`;
const HeaderButton = styled.div`
  margin-top: 380px;
  display: flex;
  gap: 30px;

  @media (max-width: 576px) {
    margin-top: 330px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
const ButtonPrimary = styled(Button)`
  background-color: black !important;
  color: #ffffff !important;
  padding: 5px !important;
  padding-left: 70px !important;
  padding-right: 70px !important;
  border-radius: 20px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  opacity: 0.8 !important;

  @media (max-width: 576px) {
    padding: 5px !important;
    padding-left: 170px !important;
    padding-right: 170px !important;
  }
`;
const ButtonSecondary = styled(Button)`
  background-color: #f5f5f5 !important;
  color: black !important;
  padding: 7px !important;
  /* padding: 0 70px !important; */
  padding-left: 60px !important;
  padding-right: 60px !important;
  border-radius: 20px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  opacity: 0.8 !important;

  @media (max-width: 576px) {
    padding: 5px !important;
    padding-left: 150px !important;
    padding-right: 150px !important;
  }
`;
