import { SideMenu } from '@/src/components/layout/SideMenu';
import { Box } from '@chakra-ui/react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const DESKTOP_SIDEBAR_WIDTH = '250px';
const MOBILE_BOTTOM_NAV_HEIGHT = '80px';

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Box display="flex">
      <SideMenu />
      <Box 
        ml={{ base: 0, md: DESKTOP_SIDEBAR_WIDTH }}
        pb={{ base: MOBILE_BOTTOM_NAV_HEIGHT, md: 0 }}
        flex={1}
      >
        {children}
      </Box>
    </Box>
  );
}