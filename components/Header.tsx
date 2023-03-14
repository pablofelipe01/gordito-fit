import React from "react";
import { Box, Center, Flex, HStack, Icon, Text, Link, LinkProps } from "@chakra-ui/react";
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

interface IMenuItemProps extends LinkProps {
  isLast?: boolean;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  children,
  isLast = false,
  href = "/",
  ...rest
}) => (
  <Text
    mb={{ base: isLast ? 0 : 8, sm: 0 }}
    mr={{ base: 0, sm: isLast ? 0 : 8 }}
    display="block"
  >
    <Link href={href} {...rest}>
      {children}
    </Link>
  </Text>
);

export const Header: React.FC = () => (
  <Center
    w="full"
    paddingX={14}
    paddingY={2}
    justifyContent="space-between"
    alignItems="center"
    color="white"
    bg="#ffffff"
  >
    <HStack spacing={200}>

      {/* <Text fontSize="50px">Camphill Agualinda </Text>  */}
      <a href="https://instagram.com/elgorditofitofficial?igshid=YmMyMTA2M2Y="
      rel='noopener' target='_blank'>

        <img src="https://i.imgur.com/cpfbQyT.png" alt="bitso" />
        {/* <Text fontSize="20px">Bitso</Text> */}
      </a>
      <br />
      <a href="https://bitso.com/co"
      rel='noopener' target='_blank'>

        <img src="https://i.imgur.com/1X5VRck.png" alt="bitso" />
        {/* <Text fontSize="20px">Bitso</Text> */}
      </a>
    </HStack>
    <Box display={{ md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
      <HStack
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <WalletMultiButton />
        <WalletDisconnectButton />
      </HStack>
    </Box>
  </Center>
);
