import { Box, Card, CardBody, Flex, Skeleton } from "@chakra-ui/react";
import { IoIosArrowRoundForward } from "react-icons/io";

export const ExchangeListItemSkeleton = () => {
  return (
    <Card mb={"8px"}>
      <CardBody>
        <Box display={"flex"} alignItems={"center"} gap={"8"}>
          <Skeleton height="42px" width="42px" borderRadius="50%" />
          <Box>
            <Skeleton height="20px" width="80%" mb="2" />
            <Flex alignItems={"center"}>
              <Skeleton height="14px" width="30%" mr="1" />
              <IoIosArrowRoundForward />
              <Skeleton height="14px" width="30%" ml="1" />
            </Flex>
            <Skeleton height="12px" width="60%" mt="2" />
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};
