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

interface MenuItem {
  href: string;
  label: string;
  mobileLabel?: string;
  icon: React.ComponentType<{ size?: number }>;
}

const ICON_SIZE = 20;
const MOBILE_ITEM_MIN_WIDTH = '60px';

const menuItems: MenuItem[] = [
  { href: '/mypage', label: 'マイページ', mobileLabel: 'ホーム', icon: FcBusinessman },
  { href: '/shifts', label: 'シフト', icon: FcCalendar },
  { href: '/attendance', label: '勤怠記録', mobileLabel: '勤怠', icon: FcClock },
  { href: '/timecard', label: 'タイムカード', icon: FcDocument },
  { href: '/settings', label: '設定', icon: FcSettings },
];

interface MenuItemProps {
  item: MenuItem;
  isActive: boolean;
}

const DesktopMenuItem = ({ item, isActive }: MenuItemProps) => {
  const IconComponent = item.icon;
  
  return (
    <Link href={item.href}>
      <Button
        width="full"
        variant={isActive ? 'solid' : 'ghost'}
        justifyContent="flex-start"
        colorPalette={isActive ? 'blue' : 'gray'}
      >
        <IconComponent size={ICON_SIZE} />
        {item.label}
      </Button>
    </Link>
  );
};

const MobileMenuItem = ({ item, isActive }: MenuItemProps) => {
  const IconComponent = item.icon;
  const displayLabel = item.mobileLabel || item.label;
  
  return (
    <Link href={item.href}>
      <VStack
        gap={1}
        py={2}
        px={2}
        borderRadius="md"
        bg={isActive ? 'blue.50' : 'transparent'}
        _dark={{
          bg: isActive ? 'blue.900' : 'transparent',
        }}
        minW={MOBILE_ITEM_MIN_WIDTH}
      >
        <IconComponent size={ICON_SIZE} />
        <Text
          fontSize="xs"
          fontWeight={isActive ? 'semibold' : 'normal'}
          color={isActive ? 'blue.600' : 'gray.600'}
          _dark={{
            color: isActive ? 'blue.300' : 'gray.400',
          }}
          lineHeight="1"
        >
          {displayLabel}
        </Text>
      </VStack>
    </Link>
  );
};

const DesktopControls = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <>
      <Button
        width="full"
        variant="ghost"
        justifyContent="flex-start"
        colorPalette="blue"
        onClick={toggleColorMode}
      >
        {colorMode === 'dark' ? <IoSunny size={ICON_SIZE} /> : <IoMoon size={ICON_SIZE} />}
        {colorMode === 'dark' ? 'ライトモード' : 'ダークモード'}
      </Button>
      
      <Button
        width="full"
        variant="ghost"
        justifyContent="flex-start"
        colorPalette="gray"
        onClick={signout}
      >
        <IoLogOut size={ICON_SIZE} />
        ログアウト
      </Button>
    </>
  );
};

export const SideMenu = () => {
  const pathname = usePathname();

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
            {menuItems.map((item) => (
              <DesktopMenuItem
                key={item.href}
                item={item}
                isActive={pathname === item.href}
              />
            ))}
          </VStack>
          
          <DesktopControls />
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
          {menuItems.map((item) => (
            <MobileMenuItem
              key={item.href}
              item={item}
              isActive={pathname === item.href}
            />
          ))}
        </HStack>
      </Box>
    </>
  );
};
