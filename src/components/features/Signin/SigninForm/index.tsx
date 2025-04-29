import {
  Box,
  Button,
  Card,
  Field,
  Flex,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

export const SigninForm = () => {
  return (
    <Card.Root maxW="sm" p="8">
      <Stack gap="8" w="full">
        <Stack gap="6" as="form">
          <Field.Root>
            <Field.Label>メールアドレス</Field.Label>
            <Input id="mail" />
          </Field.Root>
          <Field.Root>
            <Field.Label>パスワード</Field.Label>
            <Input id="password" type="password" />
          </Field.Root>
          <Button variant="solid" colorPalette="teal">
            メールアドレスでログイン
          </Button>
        </Stack>

        <Flex alignItems="center" gap="6" mx="-2">
          <Box flex="1" h="1px" bg="gray.300" />
          <Text>or</Text>
          <Box flex="1" h="1px" bg="gray.300" />
        </Flex>

        <Button variant="outline">
          <Flex align="center" gap="2">
            <FcGoogle />
            <Text>Googleでログイン</Text>
          </Flex>
        </Button>

        <Stack
          w="full"
          gap="2"
          textAlign="right"
          color="gray.500"
          fontSize="sm"
        >
          <Box>
            <Link href="/login/signup" _hover={{ textDecoration: 'underline' }}>
              新規登録
            </Link>
          </Box>
          <Box>
            <Link href="/login/forget" _hover={{ textDecoration: 'underline' }}>
              パスワードを忘れた方
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Card.Root>
  );
};
