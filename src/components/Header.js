import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header({ menuOpen, setMenuOpen }) {
  return (
    <Container>
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
        </HeaderRightInfo>
        <HeaderRightIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </HeaderRightIcon>
      </HeaderRight>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 20px 30px;
  padding-top: 15px;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  margin-right: 15px;

  img {
    object-fit: contain;
    width: 90px;
  }
`;

const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  a {
    text-decoration: none;
    text-transform: capitalize;
    color: black;
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
    color: black;
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
    color: black;
    font-weight: 500;
    font-size: 14px;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

const HeaderRightIcon = styled.div`
  .MuiSvgIcon-root {
    cursor: pointer;
  }
`;

export default Header;
