import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
type LayoutProps = {
  navbarSlot?: ReactNode;
  headerSlot?: ReactNode;
  bottomSlot?: ReactNode;
};
export const Layout = (props: LayoutProps) => {
  const { headerSlot, bottomSlot, navbarSlot } = props;
  return (
    <Box px={"12px"} minH="100vh">
      {navbarSlot}
      {headerSlot}
      <Box>
        <Outlet />
      </Box>
      <ScrollRestoration />
      <Box>{bottomSlot}</Box>
    </Box>
  );
};
