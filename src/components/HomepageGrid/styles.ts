import styled from "styled-components";

export const StyledGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 100%;
  & > div {
    width: 100%;
  }
  & p {
    line-height: 24px;
    width: 100%;
  }
  & a {
    color: #000000;
    padding: 24px;
    display: block;
  }
  & .skeleton-loader {
    height: 24px;
    width: 100%;
  }
`;

export const StyledEmptyContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  & .spinner {
    position: absolute;
  }
`;
