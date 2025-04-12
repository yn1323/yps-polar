import { Button as ChakraButton } from '@chakra-ui/react';

type Props = {
  children: string;
  onClick: () => void;
};

export const Button = ({ children, onClick }: Props) => {
  return <ChakraButton onClick={onClick}>{children}</ChakraButton>;
};
