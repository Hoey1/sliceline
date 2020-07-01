import styled from "styled-components";
import { Title } from "../Styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-columns: 1fr; */
  gap: 25px;
`;

export const FoodLabel = styled(Title)`
  position: absolute;
  background-color: rgba(256, 256, 256, 0.5);
  padding: 5px;
  border-radius: 7px;
`;

export const Food = styled.div`
  height: 150px;
  padding: 10px;
  font-size: 20px;
  background-image: ${({ img }) => `url(${img});`};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  border-radius: 12px;
  margin-top: 5px;
  transition-property: box-shadow margin-top filter;
  transition-duration: 250ms;
  box-shadow: 0px 0px 2px 0px grey;
  &:hover {
    cursor: pointer;
    margin-top: 0px;
    margin-bottom: 5px;
    box-shadow: 0px 5px 10px 0px grey;
    filter: contrast(100%);
  }
`;
