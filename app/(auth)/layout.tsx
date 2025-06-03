import { SideMenu } from '@/src/components/layout/SideMenu';
import { Box } from '@chakra-ui/react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex">
      <SideMenu />
      <Box 
        ml={{ base: 0, md: "250px" }}
        pb={{ base: "80px", md: 0 }}
        flex={1}
      >
        {children}
      </Box>
    </Box>
  );
}