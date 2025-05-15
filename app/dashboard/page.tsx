import { Signout } from '@/src/components/features/Signout';
import { Animation } from '@/src/components/templates/Animation';
import { Center } from '@chakra-ui/react';

export default function Page() {
  return (
    <Animation>
      <Center h="100vh">
        this is dashboard
        <Signout />
      </Center>
    </Animation>
  );
}
