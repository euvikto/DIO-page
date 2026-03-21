import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background: #565656;
  border-radius: 22px;
  position: relative;
  color: #ffff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      min-width: 167px;
      height: 33px;
      background: #e4105d;

      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

      &:after {
        content: "";
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border: 1px solid #e4105d;
        border-radius: 22px;
      }
    `}
`;
