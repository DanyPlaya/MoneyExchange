import { CurrencyTabs } from "@/features/currencyTabs";
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

type ExchangeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  setValute: (value: string) => void;
};
export const ExchangeModal = (props: ExchangeModalProps) => {
  const { isOpen, onClose, setValute } = props;

  // console.log(data?.dataExchage.map((item) => item.name));
  return (
    <Modal
      blockScrollOnMount={false}
      size={{ base: "full", md: "xl", lg: "xl" }}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />

      <ModalContent initial={{ size: "sm" }} as={motion.div}>
        <Box
          borderRadius={"32px"}
          position="sticky"
          top={0}
          zIndex={1}
          bg="white"
        >
          <ModalHeader>Выберите валюту</ModalHeader>
          <ModalCloseButton />
        </Box>
        <ModalBody overflowY={"auto"}>
          <CurrencyTabs setValute={setValute} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
