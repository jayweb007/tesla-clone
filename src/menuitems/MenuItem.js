import React from "react";
import styled from "styled-components";

function MenuItem({ title }) {
  return (
    <Container>
      <p>{title}</p>
    </Container>
  );
}

export default MenuItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1) ease-in-out;
  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 500;
    padding: 10px;
    padding-left: 10px;
    text-transform: uppercase;
  }

  &:hover {
    background-color: #f5f5f5;
    border-radius: 15px;
  }
`;
