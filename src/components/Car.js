import React from "react";
import styled from "styled-components";

function Car({ imgSrc, model, testDrive }) {
  return (
    <Container>
      <Image>
        <img src={imgSrc} alt={model} />
      </Image>
      <h2>{model}</h2>
      <ButtonGroup>
        <ButtonPrimary>ORDER</ButtonPrimary>
        {testDrive && <ButtonSecondary>TEXT DRIVE</ButtonSecondary>}
      </ButtonGroup>
      <p>
        <span>Request a Call</span> to speak with a product specialist, value
        your trade-in or apply for leasing
      </p>
    </Container>
  );
}

export default Car;

const Container = styled.div`
  display: grid;
  place-items: center;
  border-top: 1px solid #d0d1d2;

  h2 {
    font-weight: 500;
    font-size: xx-large;
    margin-top: -180px;
    text-transform: capitalize;
  }

  p {
    max-width: 350px;
    align-items: center;
    text-align: center;
    font-size: smaller;
    line-height: 1.5;
    font-weight: 500;
    color: #393c41;

    span {
      color: #3e6be2;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

const Image = styled.div`
  img {
    object-fit: contain;
    width: 1000px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ButtonPrimary = styled.button`
  width: 230px;
  margin-top: -30px;
  margin-bottom: 30px;
  background-color: #3e6ae1;
  border: 1px solid #f4f4f4;
  padding: 12px 20px;
  border-radius: 50px;
  color: white;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #3457b1;
  }
`;

const ButtonSecondary = styled.button`
  width: 230px;
  margin-top: -30px;
  margin-bottom: 30px;
  background-color: transparent;
  border: 3px solid black;
  padding: 12px 20px;
  border-radius: 50px;
  color: black;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: black;
    color: white;
    font-weight: 500;
  }
`;
