import { useCurrencyStore } from "@/entities/currency";
import { ButtonShowExchangeList } from "@/features/showExchangeList";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { ExchangeModal } from "./exchangeModal";
export const ExchangeCard = () => {
  const {
    isOpen: isOpenFrom,
    onClose: onCloseFrom,
    onOpen: onOpenFrom,
  } = useDisclosure();
  const {
    isOpen: isOpenTo,
    onClose: onCloseTo,
    onOpen: onOpenTo,
  } = useDisclosure();
  const { valueFrom, valuteTo, setValuteFrom, setValuteTo } =
    useCurrencyStore();

  const firstInputSelected = valueFrom.trim() !== "";

  return (
    <Card bg={"#FFF"}>
      <CardHeader>
        <Heading size={"md"}>Выберите направления обмена</Heading>
      </CardHeader>
      <CardBody>
        <Box>
          <Text fontWeight={"700"}>Выберите что отдаете</Text>
          <InputGroup>
            <InputRightElement pointerEvents="none">
              <IoIosArrowDown />
            </InputRightElement>
            <Input
              isReadOnly
              defaultValue={valueFrom}
              as={motion.input}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onOpenFrom();
              }}
            />
            <ExchangeModal
              isOpen={isOpenFrom}
              onClose={() => {
                onCloseFrom();
              }}
              setValute={setValuteFrom}
            />
          </InputGroup>
        </Box>
        <Box>
          <Text fontWeight={"700"}>Выберите что получаете</Text>
          <InputGroup>
            <InputRightElement pointerEvents="none">
              <IoIosArrowDown />
            </InputRightElement>
            <Input
              isReadOnly
              disabled={!firstInputSelected}
              defaultValue={valuteTo}
              as={motion.input}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenTo}
            />
            <ExchangeModal
              isOpen={isOpenTo}
              onClose={onCloseTo}
              setValute={setValuteTo}
            />
          </InputGroup>
        </Box>
      </CardBody>
      <CardFooter>
        <ButtonShowExchangeList />
      </CardFooter>
    </Card>
  );
};
