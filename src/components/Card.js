import { Card as ChakraCard, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return <ChakraCard>
    <VStack justify="flex-start" spacing='20px'>
      <img src={imageSrc} style={{borderRadius: '5px'}}></img>
      <div style={{paddingLeft: '10px'}}>
        <h1 style={{fontWeight: 'bold'}}>{title}</h1>
        <p style={{color: 'grey'}}> {description}</p>
        <HStack justify="flex-start" w="full" spacing='10px' sx={{paddingBottom: '10px'}}>
          <p style={{fontWeight: 'bold'}}>See more</p>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </div>
    </VStack>

  </ChakraCard>;
};

export default Card;
