import { ExchangeCard } from "@/entities/exchange";
import { MarqueesValute } from "@/features/marquees";
import { Box, Image } from "@chakra-ui/react";

export const MainPage = () => {
  return (
    <Box h={"100vh"}>
      <MarqueesValute />
      <Box mt={"12px"}>
        <ExchangeCard />
      </Box>

      <Image />
    </Box>
  );
};
