import { VStack, Stack, Heading, Text } from '@chakra-ui/react';

const ThingsToKnow = () => {
  return (
    <VStack spacing={6} alignItems="flex-start">
      <Heading size="lg">Things to know</Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="flex-start"
        w="full"
        spacing={8}
      >
        <VStack spacing={2} alignItems="flex-start" maxW={60}>
          <Heading size="md">House rules</Heading>
          <VStack spacing={3} alignItems="flex-start">
            <Text>Check-in: After 1:00 PM</Text>
            <Text>Checkout: 11:00 AM</Text>
            <Text>Self check-in with lockbox</Text>
            <Text>Pets are allowed</Text>
            <Text>Smoking is allowed</Text>
          </VStack>
        </VStack>
        <VStack spacing={2} alignItems="flex-start" maxW={60}>
          <Heading size="md">Health & safety</Heading>
          <VStack spacing={3} alignItems="flex-start">
            <Text>Enhanced cleaning process</Text>
            <Text>
              Social-distancing and other COVID-19-related guidelines apply
            </Text>
            <Text>Carbon monoxide alarm not reported</Text>
            <Text>Smoke alarm not reported</Text>
          </VStack>
        </VStack>
        <VStack spacing={2} alignItems="flex-start" maxW={60}>
          <Heading size="md">Cancellation policy</Heading>
          <VStack spacing={3} alignItems="flex-start">
            <Text>Free cancellation before Nov 14</Text>
          </VStack>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default ThingsToKnow;
