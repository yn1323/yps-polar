import { ResetPasswordForm } from '@/src/components/features/signin/ResetPasswordForm';
import { Animation } from '@/src/components/templates/Animation';
import { Center } from '@chakra-ui/react';

export default function Page() {
  return (
    <Animation>
      <Center h="100vh">
        <ResetPasswordForm />
      </Center>
    </Animation>
  );
}
