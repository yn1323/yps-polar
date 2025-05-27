import { signout } from '@/src/components/features/Signout/actions';
import { Button } from '@/src/components/ui/button';

export const Signout = () => {
  return <Button onClick={signout}>Signout</Button>;
};
