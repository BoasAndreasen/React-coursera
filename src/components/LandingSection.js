import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack> 
      <Avatar src="https://i.pravatar.cc/150?img=7"></Avatar>
      <Heading as ='h1' size='sm'>{greeting}</Heading>
      <Heading as ='h1' size='lg' sx={{paddingTop:'20px'}}>{bio1}</Heading>
      <Heading as ='h1' size='lg'>{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
