import React from "react";
import CustomHead from "../Head/Head";
import { StyledLayoutContainer } from "./styles";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayoutContainer>
      <CustomHead />
      {children}
    </StyledLayoutContainer>
  );
};

export default Layout;
