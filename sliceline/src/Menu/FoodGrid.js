import styled from "styled-components";
import { Title } from "../Styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled.div`
  position: absolute;
  background-color: rgba(256, 256, 256, 0.5);
  padding: 5px;
  border-radius: 7px;
`;

export const Food = styled(Title)`
  height: 100px;
  background-image: ${({ img }) => `url(${img});`};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  padding: 10px;
  font-size: 20px;
  border-radius: 12px;
  box-shadow: 0px 0px 7px 0px grey;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: ease-in-out 500ms;
  }
`;
