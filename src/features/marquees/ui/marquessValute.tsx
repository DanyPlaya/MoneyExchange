import { useGetNoCash } from "@/entities/exchange";
import { Box, Image, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

export const MarqueesValute = () => {
  const { data } = useGetNoCash();

  return (
    <Marquee pauseOnHover>
      {data?.dataExchage.map((item) => (
        <Box display={"flex"} key={item.code_name}>
          <Image
            mr={"5px"}
            ml={"5px"}
            w={"30px"}
            h={"30px"}
            src={item.icon_url}
          />
          <Text>{item.name}</Text>
        </Box>
      ))}
    </Marquee>
  );
};
