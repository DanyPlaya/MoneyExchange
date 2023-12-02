import { Box, Card, CardBody, Skeleton } from "@chakra-ui/react";

export const CurrencyTabsItemSkeleton = () => (
  <Card mb={"8px"}>
    <CardBody>
      <Box display={"flex"} alignItems={"center"} gap={"8"}>
        <Skeleton height="42px" width="42px" borderRadius="50%" />
        <Box>
          <Skeleton height="20px" width="80%" mb="2" />
          <Skeleton height="14px" width="60%" />
        </Box>
      </Box>
    </CardBody>
  </Card>
);
