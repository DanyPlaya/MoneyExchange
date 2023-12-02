import { motion } from "framer-motion";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { CurrencyTabsItem } from "./currencyTabsItem";
import { useGetNoCash } from "@/entities/currency";
import { memo, useId } from "react";
import { CurrencyTabsItemSkeleton } from "./currencyTabsListSkeleton";

const listVariants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
    },
  }),
  hidden: { opacity: 0 },
};
type CurrencyTabsType = {
  onClose: () => void;
  setValute: (value: string) => void;
};
export const CurrencyTabs = memo((props: CurrencyTabsType) => {
  const { data, isLoading } = useGetNoCash();
  const { onClose, setValute } = props;
  const panelId = useId();
  const skeletons = Array.from({ length: 10 }, (_, index) => (
    <CurrencyTabsItemSkeleton key={`skeleton-${index}`} />
  ));
  return (
    <Tabs variant="enclosed" isFitted isLazy>
      <TabList
        overflowX={{ base: "auto", md: "hidden", lg: "hidden" }}
        overflowY="hidden"
      >
        {data?.directionsExchange.map((direction, index) => (
          <Tab key={`${panelId}-${index}`}>{direction}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {data?.directionsExchange.map((direction) => (
          <TabPanel key={direction}>
            <motion.div>
              {data?.dataExchage
                .filter((item) => item.type_valute === direction)
                .map((currency, index) => (
                  <motion.div
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    key={currency.name}
                  >
                    <CurrencyTabsItem
                      setValute={setValute}
                      onClose={onClose}
                      currencyItem={currency}
                    />
                  </motion.div>
                ))}
              {isLoading && (
                <Box>
                  {skeletons.map((skeleton, index) => (
                    <div key={`${panelId}-${index}`}>{skeleton}</div>
                  ))}
                </Box>
              )}
            </motion.div>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
});
