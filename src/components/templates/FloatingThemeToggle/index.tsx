'use client';

import { Box, HStack, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { ColorModeButton, ColorModeIcon } from '@/src/components/ui/color-mode';

export interface FloatingThemeToggleProps {
  /**
   * 初期状態で最小化するかどうか
   * @default true
   */
  defaultMinimized?: boolean;
  /**
   * 左上からの位置調整
   */
  top?: string | number;
  left?: string | number;
}

/**
 * 最小化機能付きFloatingテーマトグル
 * 
 * 特徴:
 * - 左上に固定配置
 * - 最小化/展開機能
 * - レスポンシブ対応（モバイルでは常に最小化）
 * - スムーズなアニメーション
 * - アクセシビリティ対応
 */
export function FloatingThemeToggle({
  defaultMinimized = true,
  top = 4,
  left = 4,
}: FloatingThemeToggleProps) {
  const [isMinimized, setIsMinimized] = useState(defaultMinimized);
  
  // モバイルサイズの判定
  const isMobile = useBreakpointValue({ base: true, md: false });
  
  // モバイルでは常に最小化状態を維持
  useEffect(() => {
    if (isMobile) {
      setIsMinimized(true);
    }
  }, [isMobile]);

  const toggleMinimized = () => {
    // モバイルでは展開を無効化
    if (!isMobile) {
      setIsMinimized(!isMinimized);
    }
  };

  // 実際の表示状態（モバイルでは強制的に最小化）
  const shouldMinimize = isMobile || isMinimized;

  return (
    <Box
      position="fixed"
      top={top}
      left={left}
      zIndex={9999}
      bg="bg.panel"
      borderWidth="1px"
      borderColor="border"
      borderRadius="lg"
      shadow="lg"
      p={shouldMinimize ? 1 : 2}
      transition="all 0.2s ease-in-out"
      _hover={{
        shadow: 'xl',
        transform: 'translateY(-1px)',
      }}
      // タッチデバイス対応
      _active={{
        transform: 'scale(0.95)',
      }}
      // アクセシビリティ
      role="toolbar"
      aria-label="テーマ切り替えツール"
      // モバイルでのタッチ操作最適化
      minH="44px"
      minW="44px"
    >
      {shouldMinimize ? (
        // 最小化状態：テーマボタンと展開ボタン（PC時のみ）
        <HStack gap={1}>
          <ColorModeButton size="sm" />
          {!isMobile && (
            <IconButton
              onClick={toggleMinimized}
              variant="ghost"
              size="sm"
              aria-label="テーマ設定を展開"
              opacity={0.7}
              _hover={{ opacity: 1 }}
              transition="opacity 0.2s"
            >
              <HiChevronRight />
            </IconButton>
          )}
        </HStack>
      ) : (
        // 展開状態：フルUI（PC時のみ）
        <HStack gap={3}>
          <IconButton
            onClick={toggleMinimized}
            variant="ghost"
            size="sm"
            aria-label="テーマ設定を最小化"
            opacity={0.7}
            _hover={{ opacity: 1 }}
            transition="opacity 0.2s"
          >
            <HiChevronLeft />
          </IconButton>
          <HStack gap={2}>
            <ColorModeIcon />
            <Text 
              fontSize="sm" 
              fontWeight="medium" 
              color="fg.subtle"
              whiteSpace="nowrap"
            >
              テーマ切替
            </Text>
          </HStack>
          <ColorModeButton size="sm" />
        </HStack>
      )}
    </Box>
  );
}

/**
 * シンプル版：常に最小化状態
 */
export function MinimalFloatingThemeToggle({
  top = 4,
  left = 4,
}: Pick<FloatingThemeToggleProps, 'top' | 'left'>) {
  return (
    <Box
      position="fixed"
      top={top}
      left={left}
      zIndex={9999}
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: 'translateY(-1px)',
      }}
    >
      <ColorModeButton
        size="md"
        bg="bg.panel"
        borderWidth="1px"
        borderColor="border"
        shadow="lg"
        _hover={{
          shadow: 'xl',
          bg: 'bg.subtle',
        }}
      />
    </Box>
  );
}