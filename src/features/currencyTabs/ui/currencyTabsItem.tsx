import { CurrencyType } from "@/entities/currency";
import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { memo } from "react";
type CurrencyTabsItemProps = {
  currencyItem: Omit<CurrencyType, "type_valute">;
  onClose: () => void;
  setValute: (value: string) => void;
};
export const CurrencyTabsItem = memo((props: CurrencyTabsItemProps) => {
  const { currencyItem, onClose, setValute } = props;

  const handleClick = () => {
    setValute(currencyItem.code_name);
    onClose();
  };
  return (
    <Card onClick={handleClick} cursor={"pointer"} mb={"8px"}>
      <CardBody>
        <Box display={"flex"} alignItems={"center"} gap={"8"}>
          <Image width={"42px"} src={currencyItem.icon_url} />
          <Box>
            <Text>{currencyItem.name}</Text>
            <Text fontSize={"small"}>{currencyItem.code_name}</Text>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
});
