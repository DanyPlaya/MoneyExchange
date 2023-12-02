import { useGetNoCash } from "@/entities/currency";
import { Box, Image, Text } from "@chakra-ui/react";
import { memo } from "react";
import Marquee from "react-fast-marquee";

export const MarqueesValute = memo(() => {
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
});
