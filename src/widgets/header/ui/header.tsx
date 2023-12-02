import { Box, Text } from "@chakra-ui/react";
import { FcCurrencyExchange } from "react-icons/fc";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Box
      w={"100%"}
      as="header"
      h={"62px"}
      display={"flex"}
      alignItems={"center"}
    >
      <Link to={"/"}>
        <FcCurrencyExchange cursor={"pointer"} size={"48px"} />
      </Link>
      <Link to={"/"}>
        <Text
          cursor={"pointer"}
          fontWeight={"700"}
          color={"#323232"}
          fontSize={"28px"}
        >
          MoneyExchange
        </Text>
      </Link>
    </Box>
  );
};
