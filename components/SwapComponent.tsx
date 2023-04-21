import { usePublicKey, Swap } from "@strata-foundation/react";
import { CSSReset, Text, Image, Container, Stack, Divider, ButtonGroup, Button, Avatar, Flex, Box, Badge, CircularProgress, CircularProgressLabel  } from "@chakra-ui/react";
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

      //   <CircularProgress value={40} color='green.400'>
      //   <CircularProgressLabel>40%</CircularProgressLabel>
      // </CircularProgress>

         <Image 
        src='https://i.imgur.com/k9VZAhh.png'
        alt='Token'>
          </Image>
      
        
          
      }
          
  </div>
}

function useVariables(): { id: any; } {
  return { id: "EdneNPMErcL1fSQDnkkPeBAAn1obRoTHdghEyh3nZWgo"}
} 

