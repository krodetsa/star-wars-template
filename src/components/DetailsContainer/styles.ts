import styled from "styled-components";

export const StyledDetailsContainer = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & .ant-descriptions-item-label span {
    text-transform: capitalize;
  }
  & input {
    width: 100%;
    max-width: 130px;
  }
  & tbody span {
    height: 32px;
    display: flex;
    align-items: center;
  }
  & .restore {
    margin-right: 8px;
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 8px
`;
