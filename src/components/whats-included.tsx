import {
  VStack,
  SimpleGrid,
  Heading,
  Icon,
  Text,
  AspectRatio,
  GridItem,
  HStack,
} from '@chakra-ui/react';
import { IoFastFoodOutline, IoBicycleOutline } from 'react-icons/io5';
import { HiWifi } from 'react-icons/hi';
import { BiCar } from 'react-icons/bi';

const items = [
  {
    icon: IoFastFoodOutline,
    title: 'Breakfast',
    text: 'Everyone gets a breakfast plate every morning at the cabana behind the beach house.',
    color: 'green.50',
  },
  {
    icon: HiWifi,
    title: 'Wi-Fi',
    text: 'The beach house, and the wider area around it is covered by a 100mbps Wi-Fi network, free of charge.',
    color: 'red.50',
  },
  {
    icon: IoBicycleOutline,
    title: 'Bicycles',
    text: 'There are 10 bicycles available for all guests. Also, there is a beautiful hiking trail nearby.',
    color: 'blue.50',
  },
  {
    icon: BiCar,
    title: 'Parking',
    text: 'There are 3 parking spots in the shared campus parking lot available for the guests.',
    color: 'yellow.50',
  },
];

const WhatsIncluded = () => {
  return (
    <VStack spacing={6} alignItems="flex-start">
      <Heading size="lg">What's included?</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} w="full">
        {items.map(({ icon, color, text, title }) => (
          <GridItem key={title}>
            <AspectRatio ratio={{ base: 16 / 9, md: 1 }}>
              <VStack
                h="full"
                justifyContent="space-between"
                p={6}
                bg={color}
                rounded="xl"
              >
                <HStack justifyContent="flex-start" w="full">
                  <Icon as={icon} boxSize={10} />
                </HStack>
                <VStack
                  flex={1}
                  spacing={2}
                  alignItems="flex-start"
                  justifyContent="flex-end"
                >
                  <Heading size="sm">{title}</Heading>
                  <Text fontSize="sm">{text}</Text>
                </VStack>
              </VStack>
            </AspectRatio>
          </GridItem>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default WhatsIncluded;
