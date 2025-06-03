'use client';

import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FcBusinessman,
  FcCalendar,
  FcClock,
  FcDocument,
  FcSettings,
} from 'react-icons/fc';
import { IoLogOut, IoMoon, IoSunny } from 'react-icons/io5';
import { useColorMode } from '@/src/components/ui/color-mode';
import { signout } from './actions';

const menuItems = [
  { href: '/mypage', label: 'マイページ', icon: FcBusinessman },
  { href: '/shifts', label: 'シフト', icon: FcCalendar },
  { href: '/attendance', label: '勤怠記録', icon: FcClock },
  { href: '/timecard', label: 'タイムカード', icon: FcDocument },
  { href: '/settings', label: '設定', icon: FcSettings },
];

export const SideMenu = () => {
  const pathname = usePathname();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {/* PC用サイドメニュー */}
      <Box
        h="100vh"
        bg="rgba(255, 255, 255, 0.01)"
        borderRight="1px"
        borderColor="border"
        py={4}
        px={4}
        position="fixed"
        left={0}
        top={0}
        zIndex={10}
        display={{ base: 'none', md: 'block' }}
      >
        <VStack gap={4} h="full">
          <Text fontSize="xl" fontWeight="bold">
            管理画面
          </Text>

          <VStack gap={2} flex={1} alignItems="stretch">
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
                    <IconComponent size={20} />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </VStack>
          
          {/* デバッグ用ダークモード切り替え */}
          <Button
            width="full"
            variant="ghost"
            justifyContent="flex-start"
            colorPalette="blue"
            onClick={toggleColorMode}
          >
            {colorMode === 'dark' ? <IoSunny size={20} /> : <IoMoon size={20} />}
            {colorMode === 'dark' ? 'ライトモード' : 'ダークモード'}
          </Button>
          
          <Button
            width="full"
            variant="ghost"
            justifyContent="flex-start"
            colorPalette="gray"
            onClick={signout}
          >
            <IoLogOut size={20} />
            ログアウト
          </Button>
        </VStack>
      </Box>

      {/* モバイル用ボトムナビゲーション */}
      <Box
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        bg="rgba(255, 255, 255, 0.95)"
        borderTop="1px"
        borderColor="border"
        py={2}
        px={2}
        zIndex={10}
        display={{ base: 'block', md: 'none' }}
        backdropFilter="blur(10px)"
        _dark={{
          bg: 'rgba(0, 0, 0, 0.95)',
        }}
      >
        <HStack gap={1} justifyContent="space-around">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <VStack
                  gap={1}
                  py={2}
                  px={2}
                  borderRadius="md"
                  bg={isActive ? 'blue.50' : 'transparent'}
                  _dark={{
                    bg: isActive ? 'blue.900' : 'transparent',
                  }}
                  minW="60px"
                >
                  <IconComponent size={20} />
                  <Text
                    fontSize="xs"
                    fontWeight={isActive ? 'semibold' : 'normal'}
                    color={isActive ? 'blue.600' : 'gray.600'}
                    _dark={{
                      color: isActive ? 'blue.300' : 'gray.400',
                    }}
                    lineHeight="1"
                  >
                    {item.label === 'マイページ' ? 'ホーム' : 
                     item.label === '勤怠記録' ? '勤怠' : 
                     item.label}
                  </Text>
                </VStack>
              </Link>
            );
          })}
        </HStack>
      </Box>
    </>
  );
};
