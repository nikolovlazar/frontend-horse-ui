import {
  HStack,
  VStack,
  Heading,
  Text,
  Avatar,
  Divider,
  Icon,
  AvatarBadge,
  SimpleGrid,
  FormControl,
  FormLabel,
  Menu,
  MenuButton,
  Button,
  GridItem,
  Stack,
} from '@chakra-ui/react';
import { HiStar } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import IconLabel from './icon-label';

const ListingDetails = () => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={8}
      alignItems="flex-start"
    >
      <VStack spacing={6} alignItems="flex-start">
        <VStack spacing={2} alignItems="flex-start">
          <Heading size="lg">All about Lazar's place</Heading>
          <HStack spacing={2}>
            <Text color="gray.500">Hosted by</Text>
            <Avatar src="/images/lazar.jpg" size="xs" />
            <Text color="brand.500">Lazar Nikolov</Text>
          </HStack>
        </VStack>
        <Divider />
        <VStack alignItems="flex-start" spacing={4}>
          <Text>
            Beach House Belgrade villa on the water is a modern designed, open
            space residence, tucked in the flourishing green oasis of Ada
            Ciganlija's park.
          </Text>
          <Text>
            Our property prevails in simplicity. It possess a large living area
            with big movable windows , in front and on the sides, which provides
            the magical view on Sava river even when you are relaxing inside.
          </Text>
          <Text>
            Our location - behind the Golf club Belgrade in Ada, 15 min drive
            from the city center, will not leave you out from the city's vibrant
            life.
          </Text>
          <Text>
            <strong>The space</strong>
            <br />
            We didnt let any walls or corridors stand in the way between you and
            the nature, so as soon as you open the front door, you will feel the
            positive energy of the water, flow through your body.
          </Text>
          <Text>
            <strong>Guest access</strong>
            <br />
            During the day, around 8 people are allowed to be in the house. Its
            perfect for small events such as birthdays, bachelorette parties,
            team buidings. 4 guests can sleep over.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w="full"
        maxW={{ base: 'auto', md: 80, lg: 96 }}
        flexShrink={0}
        p={6}
        spacing={6}
        justifyContent="stretch"
        alignItems="stretch"
        rounded="2xl"
        borderWidth={1}
        borderColor="gray.300"
      >
        <HStack justifyContent="space-between">
          <VStack>
            <HStack spacing={2} w="full">
              <Heading size="lg" textDecoration="line-through" color="gray.500">
                $115
              </Heading>
              <Heading size="lg">$98</Heading>
              <Text color="gray.500">/ night</Text>
            </HStack>
            <IconLabel
              icon={<Icon fontSize={24} as={HiStar} color="yellow.400" />}
              separator={
                <Text color="gray.500" fontWeight="bold">
                  ·
                </Text>
              }
            >
              <Text size="md">4.96</Text>
              <Text size="md">26 reviews</Text>
            </IconLabel>
          </VStack>
          <Avatar src="/images/lazar.jpg" size="lg">
            <AvatarBadge boxSize="1.38em" bg="green.500" />
          </Avatar>
        </HStack>
        <SimpleGrid
          columns={2}
          rounded="lg"
          borderWidth={1}
          borderColor="gray.300"
          p={3}
          gap={3}
        >
          <FormControl>
            <FormLabel
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="xs"
            >
              Check-in
            </FormLabel>
            <Menu>
              <MenuButton
                textAlign="start"
                as={Button}
                variant="outline"
                fontSize="sm"
                w="full"
                pl={3}
                pr={2}
                rightIcon={<IoIosArrowDown />}
              >
                09/03/2021
              </MenuButton>
            </Menu>
          </FormControl>
          <FormControl>
            <FormLabel
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="xs"
            >
              Check-out
            </FormLabel>
            <Menu>
              <MenuButton
                textAlign="start"
                as={Button}
                variant="outline"
                fontSize="sm"
                w="full"
                pl={3}
                pr={2}
                rightIcon={<IoIosArrowDown />}
              >
                09/10/2021
              </MenuButton>
            </Menu>
          </FormControl>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="xs"
              >
                Guest
              </FormLabel>
              <Menu>
                <MenuButton
                  as={Button}
                  textAlign="start"
                  variant="outline"
                  fontSize="sm"
                  rightIcon={<IoIosArrowDown />}
                  w="full"
                >
                  1 Adult
                </MenuButton>
              </Menu>
            </FormControl>
          </GridItem>
        </SimpleGrid>
        <VStack spacing={2}>
          <Button colorScheme="brand" size="lg" w="full">
            Reserve
          </Button>
          <Text color="gray.500">You won’t be charged yet</Text>
        </VStack>
        <VStack spacing={3} alignItems="stretch">
          <HStack justifyContent="space-between">
            <Text>$98 x 7 nights</Text>
            <Text>$686</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>8% weekly price discount</Text>
            <Text color="green.500">-$54</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text>Service fee</Text>
            <Text>$97</Text>
          </HStack>
          <Divider />
          <HStack justifyContent="space-between" fontWeight="bold">
            <Text>Total</Text>
            <Text>$729</Text>
          </HStack>
        </VStack>
      </VStack>
    </Stack>
  );
};

export default ListingDetails;
