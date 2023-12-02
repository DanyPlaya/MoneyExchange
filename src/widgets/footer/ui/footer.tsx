import { Box, Link } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"50px"}
      w="100%"
    >
      <Link>https://github.com/DanyPlaya/MoneyExchange</Link>
    </Box>
  );
};
