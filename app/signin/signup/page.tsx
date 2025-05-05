import { SignupForm } from '@/src/components/features/signin/SignupForm';
import { Animation } from '@/src/components/templates/Animation';
import { Center } from '@chakra-ui/react';

export default function Page() {
  return (
    <Animation>
      <Center h="100vh">
        <SignupForm />
      </Center>
    </Animation>
  );
}
