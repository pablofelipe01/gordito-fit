import { usePublicKey, Swap } from "@strata-foundation/react";
import { CSSReset, Text, Image, Container, Stack, Divider, ButtonGroup, Button, Avatar, Flex, Box, CircularProgress, CircularProgressLabel, AspectRatio  } from "@chakra-ui/react";

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/card';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Lbc } from "@strata-foundation/marketplace-ui";



export function SwapComponent() {
  const { id: idRaw } = useVariables();
  const { publicKey } = useWallet();
  const { setVisible } = useWalletModal();


  const id = usePublicKey(idRaw);

  return <div>
      { publicKey ?
        <Lbc id={id} /> :

   

         <Image 
        src='https://i.imgur.com/k9VZAhh.png'
        alt='Token'>
          </Image>
       // This video will have equal sides
          // <AspectRatio maxW='560px' ratio={1}>
          //   <iframe
          //   title='naruto'
          //   src='https://www.youtube.com/embed/0NdV54S4BY4?autoplay=1'
          //   allowFullScreen
          //  />
          // </AspectRatio> 
    
          
      }
          
  </div>
}

function useVariables(): { id: any; } {
  return { id: "EdneNPMErcL1fSQDnkkPeBAAn1obRoTHdghEyh3nZWgo"}
} 

