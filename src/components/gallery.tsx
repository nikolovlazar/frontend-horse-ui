import {
  AspectRatio,
  GridItem,
  Image,
  Grid,
  Text,
  Button,
} from '@chakra-ui/react';

const Gallery = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
    (index) => `/images/${index}.jpg`
  );

  const first = images[0];
  const nextTwo = [images[1], images[2]];

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(3, 1fr)"
      gap={3}
    >
      <GridItem colSpan={3} rowSpan={3}>
        <AspectRatio ratio={1}>
          <Image
            objectFit="cover"
            rounded="3xl"
            src={first}
            alt="Beach House Photo"
          />
        </AspectRatio>
      </GridItem>
      {nextTwo.map((image, index) => (
        <GridItem
          key={image}
          colSpan={1}
          rowSpan={1}
          colStart={4}
          rowStart={index + 1}
        >
          <AspectRatio ratio={1}>
            <Image rounded="3xl" src={image} alt="Beach House Photo" />
          </AspectRatio>
        </GridItem>
      ))}
      <GridItem colSpan={1} rowSpan={1} colStart={4} rowStart={3}>
        <AspectRatio ratio={1}>
          <Button
            alignItems="center"
            justifyContent="center"
            rounded="3xl"
            bg="gray.100"
          >
            <Text fontSize="xl" color="gray.500">
              View {images.length - 3}+ photos
            </Text>
          </Button>
        </AspectRatio>
      </GridItem>
    </Grid>
  );
};

export default Gallery;
