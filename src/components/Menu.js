import React from "react";
import styled from "styled-components";
import MenuItem from "../menuitems/MenuItem";

function Menu(props) {
  return (
    <Container>
      <MenuItem title="existing inventory" />
      <MenuItem title="used inventory" />
      <MenuItem title="trade-in" />
      <MenuItem title="cybertruck" />
      <MenuItem title="roadster" />
      <MenuItem title="semi" />
      <MenuItem title="charging" />
      <MenuItem title="powerwall" />
      <MenuItem title="commercial solar" />
      <MenuItem title="test drive" />
      <MenuItem title="find us" />
      <MenuItem title="support" />
      <MenuItem title="united states" />
      <MenuItem title="existing inventory" />
      <MenuItem title="used inventory" />
      <MenuItem title="trade-in" />
      <MenuItem title="cybertruck" />
      <MenuItem title="roadster" />
      <MenuItem title="semi" />
      <MenuItem title="charging" />
      <MenuItem title="powerwall" />
      <MenuItem title="commercial solar" />
      <MenuItem title="test drive" />
      <MenuItem title="find us" />
      <MenuItem title="support" />
      <MenuItem title="united states" />
    </Container>
  );
}

export default Menu;

const Container = styled.div`
  position: fixed;
  flex: 0.1;
  overflow-y: scroll;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 70px 30px 30px 30px;
  min-width: 250px;
  gap: 25px;
  background-color: white;
`;
