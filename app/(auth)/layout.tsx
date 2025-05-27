import { SideMenu } from '@/src/components/features/SideMenu';
import { Box } from '@chakra-ui/react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex">
      <SideMenu />
      <Box ml="250px" flex={1}>
        {children}
      </Box>
    </Box>
  );
}