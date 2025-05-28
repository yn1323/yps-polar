'use client';

import { Signout } from '@/src/components/features/Signout';
import { Box, VStack, Text, Button, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/dashboard', label: 'ダッシュボード' },
  { href: '/users', label: 'ユーザー管理' },
  { href: '/products', label: '商品管理' },
  { href: '/orders', label: '注文管理' },
  { href: '/reports', label: 'レポート' },
  { href: '/settings', label: '設定' },
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
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                w="full"
                variant={pathname === item.href ? 'solid' : 'ghost'}
                justifyContent="flex-start"
                colorScheme={pathname === item.href ? 'blue' : 'gray'}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </VStack>
        
        <Spacer />
        
        <Box>
          <Signout />
        </Box>
      </VStack>
    </Box>
  );
};