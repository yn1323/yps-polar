'use client';

import { Signout } from '@/src/components/features/Signout';
import { Box, VStack, Text, Button, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FcDashboard, 
  FcBusinessman, 
  FcShop, 
  FcDebt, 
  FcBarChart, 
  FcSettings 
} from 'react-icons/fc';

const menuItems = [
  { href: '/dashboard', label: 'ダッシュボード', icon: FcDashboard },
  { href: '/users', label: 'ユーザー管理', icon: FcBusinessman },
  { href: '/products', label: '商品管理', icon: FcShop },
  { href: '/orders', label: '注文管理', icon: FcDebt },
  { href: '/reports', label: 'レポート', icon: FcBarChart },
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
                  w="full"
                  variant={pathname === item.href ? 'solid' : 'ghost'}
                  justifyContent="flex-start"
                  colorScheme={pathname === item.href ? 'blue' : 'gray'}
                  leftIcon={<IconComponent size={20} />}
                >
                  {item.label}
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