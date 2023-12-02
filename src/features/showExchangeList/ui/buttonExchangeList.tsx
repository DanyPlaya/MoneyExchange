import { useCurrencyStore, useGetDirections } from "@/entities/currency";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const ButtonShowExchangeList = () => {
  const { valueFrom, valuteTo } = useCurrencyStore();

  const { refetch, data } = useGetDirections({
    valute_from: valueFrom,
    valute_to: valuteTo,
  });

  const isBothDirectionsSelected =
    valueFrom.trim() !== "" && valuteTo.trim() !== "";

  return (
    <>
      {isBothDirectionsSelected && (
        <Button
          as={motion.button}
          whileTap={{ scale: 0.9 }}
          onClick={() => (console.log(data, valueFrom, valuteTo), refetch())}
        >
          Далее
        </Button>
      )}
    </>
  );
};
