import { SigninForm } from '@/src/components/features/signin/SigninForm';
import { Animation } from '@/src/components/templates/Animation';
import { Center } from '@chakra-ui/react';

export default function Page() {
  return (
    <Animation>
      <Center h="100vh">
        <SigninForm />
      </Center>
    </Animation>
  );
}
