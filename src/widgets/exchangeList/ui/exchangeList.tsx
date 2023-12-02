import { useCurrencyStore, useGetDirections } from "@/entities/currency";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Box, Card, CardBody, Flex, Image, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ExchangeListItemSkeleton } from "./exchangeListSkeleton";
const listVariants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
    },
  }),
  hidden: { opacity: 0 },
};
export const ExchangeList = () => {
  const { valueFrom, valuteTo } = useCurrencyStore();
  const { data, isLoading } = useGetDirections({
    valute_from: valueFrom,
    valute_to: valuteTo,
  });

  // Используем Array.from для создания массива из 10 элементов
  const initialSkeletons = Array.from({ length: 10 }, (_, index) => (
    <ExchangeListItemSkeleton key={`skeleton-${index}`} />
  ));

  return (
    <Box mt={"8px"}>
      {data && (
        <Text fontSize={"24px"} mb={"8px"}>
          Лучшие курсы {valueFrom} на {valuteTo}
        </Text>
      )}

      {data?.map((data, index) => (
        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="visible"
          custom={index}
          key={data.id}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            href={data.partner_link}
            isExternal
          >
            <Card mb={"8px"} key={data.id}>
              <CardBody>
                <Box display={"flex"} alignItems={"center"} gap={"8"}>
                  <Image width={"42px"} src={data.icon_valute_from} />
                  <Box>
                    <Text>{data.name}</Text>
                    <Flex alignItems={"center"}>
                      <Text fontSize={"small"}>
                        {data.out_count} {valuteTo}
                      </Text>
                      <IoIosArrowRoundForward />
                      <Text fontSize={"small"}>
                        {data.in_count} {valueFrom}
                      </Text>
                    </Flex>
                    <Text fontSize={"small"} color={"gray"}>
                      Обмен от {data.min_amount} до {data.max_amount}
                    </Text>
                  </Box>
                </Box>
              </CardBody>
            </Card>
          </Link>
        </motion.div>
      ))}

      {isLoading && (
        <motion.div variants={listVariants} initial="hidden" animate="visible">
          {initialSkeletons}
        </motion.div>
      )}
    </Box>
  );
};
