'use client';

import {
  Box,
  Button,
  Card,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import {
  HiCalendarDays,
  HiClock,
  HiShieldCheck,
  HiUsers,
  HiChartBar,
  HiBuildingStorefront,
} from 'react-icons/hi2';

interface FeatureCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card.Root 
      p={{ base: 4, md: 6 }} 
      bg="bg.subtle" 
      borderRadius="lg" 
      height="full"
      _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
      transition="all 0.2s"
    >
      <VStack gap={{ base: 3, md: 4 }} align="start" height="full">
        <Box 
          color="blue.500" 
          fontSize={{ base: 'xl', md: '2xl' }}
          p={2}
          bg="blue.50"
          borderRadius="md"
          _dark={{ bg: 'blue.900' }}
        >
          {icon}
        </Box>
        <Heading 
          size={{ base: 'sm', md: 'md' }} 
          color="fg.emphasized"
          lineHeight="1.3"
        >
          {title}
        </Heading>
        <Text 
          color="fg.subtle" 
          fontSize={{ base: 'xs', md: 'sm' }} 
          lineHeight="1.6" 
          flex="1"
        >
          {description}
        </Text>
      </VStack>
    </Card.Root>
  );
}

interface UserTypeCardProps {
  title: string;
  subtitle: string;
  features: string[];
  buttonColor: 'blue' | 'green';
}

function UserTypeCard({
  title,
  subtitle,
  features,
  buttonColor,
}: UserTypeCardProps) {
  return (
    <Card.Root 
      p={{ base: 6, md: 8 }} 
      bg="bg.panel" 
      borderRadius="xl" 
      height="full"
      _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
      transition="all 0.2s"
    >
      <VStack gap={{ base: 5, md: 6 }} align="stretch" height="full">
        <VStack gap={{ base: 1, md: 2 }} align="start">
          <Heading 
            size={{ base: 'md', md: 'lg' }} 
            color="fg.emphasized"
            lineHeight="1.3"
          >
            {title}
          </Heading>
          <Text 
            color="fg.subtle" 
            fontSize={{ base: 'sm', md: 'md' }}
            lineHeight="1.4"
          >
            {subtitle}
          </Text>
        </VStack>
        
        <VStack gap={{ base: 2, md: 3 }} align="start" flex="1">
          {features.map((feature, index) => (
            <HStack key={index} gap={3} align="start" w="full">
              <Box
                w={2}
                h={2}
                bg={`${buttonColor}.500`}
                borderRadius="full"
                mt={{ base: 1.5, md: 2 }}
                flexShrink={0}
              />
              <Text 
                fontSize={{ base: 'xs', md: 'sm' }} 
                color="fg.muted"
                lineHeight="1.5"
                flex="1"
              >
                {feature}
              </Text>
            </HStack>
          ))}
        </VStack>

        <Link href="/signin" style={{ width: '100%' }}>
          <Button
            colorScheme={buttonColor}
            size={{ base: 'md', md: 'lg' }}
            width="full"
            mt={{ base: 2, md: 4 }}
            minH="48px"
            fontSize={{ base: 'sm', md: 'md' }}
          >
            ログイン・新規登録
          </Button>
        </Link>
      </VStack>
    </Card.Root>
  );
}

/**
 * YPS-Polar ランディングページ
 * 
 * アルバイト勤怠シフト管理システムのメインページ
 * - マネージャーとスタッフ向けの機能紹介
 * - シンプルで分かりやすいUI
 * - レスポンシブ対応
 */
export function LandingPage() {
  const features = [
    {
      icon: <HiCalendarDays />,
      title: 'シフト管理',
      description:
        'スタッフのシフト提出から管理者の確定まで、直感的な操作で簡単にシフト調整ができます。',
    },
    {
      icon: <HiClock />,
      title: 'タイムカード',
      description:
        '従業員による打刻機能と管理者による修正機能で、正確な勤怠管理を実現します。',
    },
    {
      icon: <HiBuildingStorefront />,
      title: '店舗管理',
      description:
        '複数店舗の管理や組織設定に対応。店舗ごとの設定やオペレーション管理が可能です。',
    },
    {
      icon: <HiUsers />,
      title: 'スタッフ招待',
      description:
        'メールやURLでスタッフを簡単招待。個人情報を最小限に抑えた安心設計です。',
    },
    {
      icon: <HiShieldCheck />,
      title: 'セキュリティ',
      description:
        'メールアドレス認証やGoogle認証に対応。安全で簡単なログイン機能を提供します。',
    },
    {
      icon: <HiChartBar />,
      title: '通知機能',
      description:
        '店舗ページでの任意通知表示により、重要な情報をタイムリーに共有できます。',
    },
  ];

  const managerFeatures = [
    '店舗作成・設定管理',
    'スタッフ招待・権限管理',
    'シフト確定・調整',
    'タイムカード修正・承認',
    '勤怠データ分析',
    '組織全体の運営管理',
  ];

  const staffFeatures = [
    'シフト希望提出・確認',
    'タイムカード打刻',
    '勤務予定の確認',
    '店舗通知の受信',
    'マイページでの情報管理',
    'シンプルで使いやすいUI',
  ];

  return (
    <Box minH="100vh" bg="bg.canvas">
      {/* ヒーローセクション */}
      <Box 
        bg="gradient-to-br" 
        bgGradient="linear(to-br, blue.50, blue.100)" 
        py={{ base: 12, md: 20 }}
        px={{ base: 4, md: 0 }}
      >
        <Container maxW="6xl">
          <VStack gap={{ base: 6, md: 8 }} textAlign="center">
            <VStack gap={{ base: 3, md: 4 }}>
              <Heading
                size={{ base: '2xl', md: '3xl' }}
                color="blue.900"
                fontWeight="bold"
                _dark={{ color: 'blue.100' }}
              >
                YPS-Polar
              </Heading>
              <Heading
                size={{ base: 'lg', md: 'xl' }}
                color="gray.700"
                fontWeight="medium"
                _dark={{ color: 'gray.300' }}
                px={{ base: 2, md: 0 }}
              >
                アルバイト勤怠シフト管理システム
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.600"
                maxW="2xl"
                lineHeight="1.8"
                _dark={{ color: 'gray.400' }}
                px={{ base: 4, md: 0 }}
              >
                マネージャーとスタッフでシフト調整が簡単にできるシステム。
                <br />
                個人情報を最小限に抑えた安心設計で、効率的な店舗運営をサポートします。
              </Text>
            </VStack>

            <VStack gap={3} w="full" maxW={{ base: 'sm', md: 'none' }}>
              <Link href="/signin" style={{ width: '100%' }}>
                <Button
                  colorScheme="blue"
                  size={{ base: 'lg', md: 'lg' }}
                  px={{ base: 6, md: 8 }}
                  py={{ base: 6, md: 6 }}
                  fontSize={{ base: 'md', md: 'lg' }}
                  width="full"
                  minH="50px"
                >
                  今すぐ始める
                </Button>
              </Link>
              <Link href="#features" style={{ width: '100%' }}>
                <Button
                  variant="outline"
                  colorScheme="blue"
                  size={{ base: 'lg', md: 'lg' }}
                  px={{ base: 6, md: 8 }}
                  py={{ base: 6, md: 6 }}
                  fontSize={{ base: 'md', md: 'lg' }}
                  width="full"
                  minH="50px"
                >
                  機能を見る
                </Button>
              </Link>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* ユーザータイプ選択セクション */}
      <Container maxW="6xl" py={{ base: 12, md: 20 }} px={{ base: 4, md: 8 }}>
        <VStack gap={{ base: 8, md: 12 }}>
          <VStack gap={{ base: 3, md: 4 }} textAlign="center">
            <Heading 
              size={{ base: 'xl', md: '2xl' }} 
              color="fg.emphasized"
              px={{ base: 2, md: 0 }}
            >
              あなたの役割に合わせて
            </Heading>
            <Text 
              fontSize={{ base: 'md', md: 'lg' }} 
              color="fg.subtle" 
              maxW="2xl"
              px={{ base: 4, md: 0 }}
              lineHeight="1.6"
            >
              マネージャーとスタッフ、それぞれに最適化された機能で、
              効率的なシフト管理を実現します。
            </Text>
          </VStack>

          <SimpleGrid 
            columns={{ base: 1, lg: 2 }} 
            gap={{ base: 6, md: 8 }} 
            w="full"
          >
            <UserTypeCard
              title="マネージャー"
              subtitle="店舗の管理者として"
              features={managerFeatures}
              buttonColor="blue"
            />
            <UserTypeCard
              title="スタッフ"
              subtitle="店舗の従業員として"
              features={staffFeatures}
              buttonColor="green"
            />
          </SimpleGrid>
        </VStack>
      </Container>

      {/* 機能紹介セクション */}
      <Box id="features" bg="bg.subtle" py={{ base: 12, md: 20 }}>
        <Container maxW="6xl" px={{ base: 4, md: 8 }}>
          <VStack gap={{ base: 10, md: 16 }}>
            <VStack gap={{ base: 3, md: 4 }} textAlign="center">
              <Heading 
                size={{ base: 'xl', md: '2xl' }} 
                color="fg.emphasized"
                px={{ base: 2, md: 0 }}
              >
                主要機能
              </Heading>
              <Text 
                fontSize={{ base: 'md', md: 'lg' }} 
                color="fg.subtle" 
                maxW="2xl"
                px={{ base: 4, md: 0 }}
                lineHeight="1.6"
              >
                シフト管理からタイムカードまで、店舗運営に必要な機能を
                一つのシステムで効率的に管理できます。
              </Text>
            </VStack>

            <SimpleGrid 
              columns={{ base: 1, md: 2, lg: 3 }} 
              gap={{ base: 6, md: 8 }} 
              w="full"
            >
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTAセクション */}
      <Container maxW="6xl" py={{ base: 12, md: 20 }} px={{ base: 4, md: 8 }}>
        <Card.Root 
          bg="blue.50" 
          borderRadius="2xl" 
          p={{ base: 6, md: 12 }} 
          _dark={{ bg: 'blue.900' }}
        >
          <VStack gap={{ base: 6, md: 8 }} textAlign="center">
            <VStack gap={{ base: 3, md: 4 }}>
              <Heading 
                size={{ base: 'xl', md: '2xl' }} 
                color="blue.900" 
                _dark={{ color: 'blue.100' }}
                px={{ base: 2, md: 0 }}
              >
                今すぐ始めてみませんか？
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="blue.700"
                maxW="2xl"
                _dark={{ color: 'blue.200' }}
                px={{ base: 4, md: 0 }}
                lineHeight="1.6"
              >
                YPS-Polarで、効率的なシフト管理を実現しましょう。
                アカウント作成は簡単、すぐに利用開始できます。
              </Text>
            </VStack>

            <Link href="/signin" style={{ width: '100%', maxWidth: '400px' }}>
              <Button
                colorScheme="blue"
                size={{ base: 'lg', md: 'xl' }}
                px={{ base: 8, md: 12 }}
                py={{ base: 6, md: 8 }}
                fontSize={{ base: 'lg', md: 'xl' }}
                width="full"
                minH="56px"
              >
                今すぐ始める
              </Button>
            </Link>
          </VStack>
        </Card.Root>
      </Container>
    </Box>
  );
}