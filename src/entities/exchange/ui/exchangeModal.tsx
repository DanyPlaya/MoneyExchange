import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Slide,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useGetNoCash } from "../api/exchangeApi";
type ExchangeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const ExchangeModal = (props: ExchangeModalProps) => {
  const { isOpen, onClose } = props;
  const { data } = useGetNoCash();
  return (
    <Modal
      scrollBehavior="inside"
      size="full"
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />

      <ModalContent
        initial={{ size: "sm" }}
        as={motion.div}
        borderRadius={"12px"}
      >
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs isFitted isLazy>
            <TabList>
              {data?.directionsExchange.map((item) => (
                <Tab key={item.length}>{item}</Tab>
              ))}
            </TabList>
          </Tabs>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
