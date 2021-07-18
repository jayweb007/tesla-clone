import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Car from "./Car";

function Account({ menuOpen, setMenuOpen }) {
  const user = useSelector(selectUser);

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </HeaderLeft>

        <HeaderCenter>
          <Link to="/"> Model S </Link>
          <Link to="/"> Model 3 </Link>
          <Link to="/"> Model X </Link>
          <Link to="/"> Model Y </Link>
          <Link to="/"> Solar Roof </Link>
          <Link to="/"> Solar Panels </Link>
        </HeaderCenter>

        <HeaderRight>
          <HeaderRightInfo>
            <Link to="/" style={menuOpen ? { visibility: "hidden" } : {}}>
              Shop
            </Link>
            <Link to="/login" style={menuOpen ? { visibility: "hidden" } : {}}>
              Account
            </Link>
            <Link
              to="/"
              onClick={() => auth.signOut()}
              style={menuOpen ? { visibility: "hidden" } : {}}
            >
              Log Out
            </Link>
          </HeaderRightInfo>
          <HeaderRightIcon onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon style={{ color: "black" }} /> : <MenuIcon />}
          </HeaderRightIcon>
        </HeaderRight>
      </Header>

      <AccountInfo>
        <AccountPerson>
          <h4>
            Welcome <span> {user?.displayName} </span>{" "}
          </h4>
        </AccountPerson>
        <InfoRight>
          <Link>Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link onClick={() => auth.signOut()}>Sign Out</Link>
        </InfoRight>
      </AccountInfo>

      <AccountCar>
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          model="model s"
          testDrive
        />
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          model="model x"
        />
      </AccountCar>
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  /* position: sticky; */
  /* top: 0;
  right: 0;
  left: 0; */
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 20px 30px;
  padding-top: 15px;
  background-color: black;
  color: white;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  margin-right: 15px;

  img {
    object-fit: contain;
    width: 90px;
    filter: brightness(0) invert(1);
  }
`;

const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  a {
    text-decoration: none;
    text-transform: capitalize;
    color: white;
    font-weight: 500;
    font-size: 14px;
  }

  @media (max-width: 1151px) {
    display: none;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  a {
    text-decoration: none;
    text-transform: capitalize;
    color: white;
    font-weight: 500;
    font-size: 14px;
  }
`;

const HeaderRightInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  a {
    text-decoration: none;
    text-transform: capitalize;
    color: white;
    font-weight: 500;
    font-size: 14px;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

const HeaderRightIcon = styled.div`
  z-index: 2;

  .MuiSvgIcon-root {
    cursor: pointer;
  }
`;

const AccountInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 140px;
  padding-bottom: 30px;
`;

const AccountPerson = styled.div`
  h4 {
    font-weight: 500;
    text-transform: capitalize;
    font-size: x-large;

    span {
      color: #3e6be2;
      font-weight: 700;
    }
  }
`;

const InfoRight = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  a {
    text-decoration: none;
    text-transform: capitalize;
    color: #393c41;
    font-weight: 500;
    font-size: 14px;
    transition: all 0.2s;

    &:hover {
      color: black;
      font-weight: 500;
    }
  }

  /* @media (max-width: 1151px) {
    display: none;
  } */
`;

const AccountCar = styled.div`
  display: grid;
  place-items: center;
  gap: 30px;
  padding-bottom: 40px;
`;

export default Account;
