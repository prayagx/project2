import React from 'react';
import { Box, Stack, Heading, VStack, Button, HStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      bgColor={'blackAlpha.900'}
      color={'whiteAlpha.700'}
      minH={'40'}
      p={'16'}
    >
      <Stack direction={['column', 'row']}>
        <VStack>
          <Heading size={'md'} textTransform={'uppercase'}>
            subsscribe to get updates.
          </Heading>
          <HStack>
            <Button p={"0"}
            colorScheme='purple'
            variant={'ghost'}
            borderRadius={'0 20px 20px 0'}
            >

            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
