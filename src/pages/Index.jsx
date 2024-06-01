import { Container, VStack, Text, Image, IconButton } from "@chakra-ui/react";
import { FaLaugh } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          AFV Funny Fails
        </Text>
        <Image src="https://images.unsplash.com/photo-1674764779060-608a2fe7c26a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdW5ueSUyMGZhaWx8ZW58MHx8fHwxNzE3MjAwMTU2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Funny Fail" borderRadius="md" />
        <Text fontSize="lg" textAlign="center">
          Enjoy a collection of the funniest fails from America's Funniest Home Videos!
        </Text>
        <IconButton aria-label="Laugh" icon={<FaLaugh />} size="lg" colorScheme="teal" />
      </VStack>
    </Container>
  );
};

export default Index;
