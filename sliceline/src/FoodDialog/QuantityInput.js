import React from "react";
import styled from "styled-components";
import { Title } from "../Styles/title";
import { pizzaRed } from "../Styles/colors";

const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 24px;
  text-align: center;
  border: none;
  outline: none;
`;

const IncrementContainer = styled(Title)`
  display: flex;
  height: 24px;
`;

const IncrementButton = styled.div`
  width: 23px;
  color: ${pizzaRed};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  border: 1px solid ${pizzaRed};
  border-radius: 100%;
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5;
        pointer-events: none;
        `}
  &:hover {
    background-color: #ffe3e3;
  }
`;

export function QuantityInput({ quantity }) {
  return (
    <IncrementContainer>
      <div> Quantity:</div>
      <IncrementButton> - </IncrementButton>
      <QuantityInputStyled {...quantity} />
      <IncrementButton> + </IncrementButton>
    </IncrementContainer>
  );
}
