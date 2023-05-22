import styled from "styled-components";

export const NavContainer = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  left: 0;

  width: 250px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  row-gap: 100px;

  background-color: #1e1e1e;
  color: #f6f6f6;

  cursor: pointer;
`;

export const NavTopWrap = styled.div`
  width: 100%;
  height: 50px;

  margin-top: 56px;
  text-align: center;
`;

export const NavTitle = styled.img``;

export const NavTitleText = styled.p`
  font-size: 16px;

  letter-spacing: 1em;
`;

export const NavMidWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 25px;
  padding-left: 46px;
  font-size: 22px;
`;

export const NavCategoryBox = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  column-gap: 14px;
`;

export const NavBottomImg = styled.img`
  position: absolute;

  bottom: 0;
`;