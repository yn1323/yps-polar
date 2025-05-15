import { signout } from '@/src/components/features/Signout/actions';
import { Button } from '@chakra-ui/react';

export const Signout = () => {
  return <Button onClick={signout}>Signout</Button>;
};
