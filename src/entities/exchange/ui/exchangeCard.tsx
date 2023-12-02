import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useGetNoCash } from "../api/exchangeApi";
import { ExchangeModal } from "./exchangeModal";

export const ExchangeCard = () => {
  //   const { data } = useGetAvailableDirections({ available_directions: "BTC" });
  const { data } = useGetNoCash();
  //   console.log(data?.directionsExchange);
  //   console.log(data?.dataExchage);
  //   data?.dataExchage.map((item) =>
  //     console.log(item.code_name, item.icon_url, item.type_valute)
  //   );

  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Card bg={"#FFF"}>
      <CardHeader>
        <Heading size={"md"}>Выберите направления обмена</Heading>
      </CardHeader>
      <CardBody>
        <Box>
          <Text fontWeight={"700"}>Выберите что отдаете</Text>
          <Select onClick={onOpen} />
          <ExchangeModal isOpen={isOpen} onClose={onClose} />
        </Box>
        <Box>
          <Text fontWeight={"700"}>Выберите что получаете</Text>
          <Select onClick={onOpen} />
          <ExchangeModal isOpen={isOpen} onClose={onClose} />
        </Box>
      </CardBody>
    </Card>
  );
};
