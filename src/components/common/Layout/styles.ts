import styled from "styled-components";

export const StyledLayoutContainer = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding: 0 16px;
  }
`