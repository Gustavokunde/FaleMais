import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;

  &:hover strong {
    opacity: 0.7;
  }

  &:hover div:last-child {
    opacity: 1;
    visibility: visible;
    transform: none;
  }

  strong {
    display: block;
    color: #130042;
    text-transform: uppercase;
    margin-right: 5px;
    transition: opacity 0.2s;
  }
  div {
    position: relative;

    > span {
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      background: #7159c1;
      right: -4px;
      top: -8px;
      font-size: 12px;
      line-height: 21px;
      overflow: hidden;
      color: #fff;
      font-weight: bold;
      border-radius: 100%;
      text-align: center;
    }
  }
`;