import { ExchangeCard } from "@/entities/currency";
import { MarqueesValute } from "@/features/marquees";
import { ExchangeList } from "@/widgets/exchangeList";
import { Box } from "@chakra-ui/react";

export const MainPage = () => {
  return (
    <Box minH="100vh">
      <MarqueesValute />
      <Box mt={"12px"}>
        <ExchangeCard />
      </Box>
      <ExchangeList />
    </Box>
  );
};
