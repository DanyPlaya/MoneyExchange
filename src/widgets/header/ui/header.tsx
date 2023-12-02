import { Box, Text } from "@chakra-ui/react";
import { FcCurrencyExchange } from "react-icons/fc";

export const Header = () => {
  return (
    <Box
      w={"100%"}
      as="header"
      h={"62px"}
      display={"flex"}
      alignItems={"center"}
    >
      <FcCurrencyExchange size={"48px"} />
      <Text fontWeight={"700"} color={"#323232"} fontSize={"28px"}>
        MoneyExchange
      </Text>
    </Box>
  );
};
