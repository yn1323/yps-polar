import { Signin } from '@/src/components/features/Signin/SigninForm';
import { Animation } from '@/src/components/templates/Animation';
import { Center } from '@chakra-ui/react';

export default function Page() {
  return (
    <Animation>
      <Center h="100vh">
        <Signin />
      </Center>
    </Animation>
  );
}
