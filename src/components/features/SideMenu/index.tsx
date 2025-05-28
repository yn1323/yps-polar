'use client';

import { Signout } from '@/src/components/features/Signout';
import { Box, VStack, Text, Button, Spacer, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FcBusinessman, 
  FcCalendar, 
  FcClock, 
  FcDocument, 
  FcSettings 
} from 'react-icons/fc';

const menuItems = [
  { href: '/mypage', label: 'マイページ', icon: FcBusinessman },
  { href: '/shifts', label: 'シフト', icon: FcCalendar },
  { href: '/attendance', label: '勤怠記録', icon: FcClock },
  { href: '/timecard', label: 'タイムカード', icon: FcDocument },
  { href: '/settings', label: '設定', icon: FcSettings },
];

export const SideMenu = () => {
  const pathname = usePathname();

  return (
    <Box
      w="250px"
      h="100vh"
      bg="gray.50"
      borderRight="1px"
      borderColor="gray.200"
      p={4}
      position="fixed"
      left={0}
      top={0}
      zIndex={10}
    >
      <VStack gap={4} alignItems="stretch" h="full">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          管理画面
        </Text>
        
        <VStack gap={2} alignItems="stretch">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  width="full"
                  variant={pathname === item.href ? 'solid' : 'ghost'}
                  justifyContent="flex-start"
                  colorPalette={pathname === item.href ? 'blue' : 'gray'}
                >
                  <Flex align="center" gap="2">
                    <IconComponent size={20} />
                    <Text>{item.label}</Text>
                  </Flex>
                </Button>
              </Link>
            );
          })}
        </VStack>
        
        <Spacer />
        
        <Box>
          <Signout />
        </Box>
      </VStack>
    </Box>
  );
};