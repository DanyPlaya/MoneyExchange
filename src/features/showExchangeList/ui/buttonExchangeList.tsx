import { useCurrencyStore, useGetDirections } from "@/entities/currency";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const ButtonShowExchangeList = () => {
  const { valueFrom, valuteTo } = useCurrencyStore();

  const { refetch } = useGetDirections({
    valute_from: valueFrom,
    valute_to: valuteTo,
  });
  // const [isVisibleButton, setIsVisibleButton] = useState(false);
  const isBothDirectionsSelected =
    valueFrom.trim() !== "" && valuteTo.trim() !== "";

  const handleClick = () => {
    refetch();
    // setIsVisibleButton((prev) => !prev);
  };
  return (
    <>
      {isBothDirectionsSelected && (
        <Button
          // hidden={isVisibleButton}
          as={motion.button}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
        >
          Далее
        </Button>
      )}
    </>
  );
};
