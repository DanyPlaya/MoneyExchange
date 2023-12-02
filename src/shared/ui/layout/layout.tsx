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
    <Box display={"flex"} flexDirection={"column"} px={"12px"} minH="100%">
      {navbarSlot}
      {headerSlot}
      <Box>
        <Outlet />
      </Box>
      <Box>{bottomSlot}</Box>
      <ScrollRestoration />
    </Box>
  );
};
