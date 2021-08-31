import { Container, Divider, VStack } from '@chakra-ui/react';
import Gallery from '../src/components/gallery';
import Header from '../src/components/header';
import ListingDetails from '../src/components/listing-details';
import ThingsToKnow from '../src/components/things-to-know';
import TitleDetails from '../src/components/title';
import WhatsIncluded from '../src/components/whats-included';

const IndexPage = () => (
  <Container maxW="container.xl" py={10}>
    <VStack spacing={8} alignItems="stretch">
      <Header />
      <TitleDetails />
      <Gallery />
      <ListingDetails />
      <WhatsIncluded />
      <Divider />
      <ThingsToKnow />
    </VStack>
  </Container>
);

export default IndexPage;
