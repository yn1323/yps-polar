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
    <Card.Root p={6} bg="bg.subtle" borderRadius="lg" height="full">
      <VStack gap={4} align="start" height="full">
        <Box color="blue.500" fontSize="2xl">
          {icon}
        </Box>
        <Heading size="md" color="fg.emphasized">
          {title}
        </Heading>
        <Text color="fg.subtle" fontSize="sm" lineHeight="1.6" flex="1">
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
    <Card.Root p={8} bg="bg.panel" borderRadius="xl" height="full">
      <VStack gap={6} align="stretch" height="full">
        <VStack gap={2} align="start">
          <Heading size="lg" color="fg.emphasized">
            {title}
          </Heading>
          <Text color="fg.subtle" fontSize="md">
            {subtitle}
          </Text>
        </VStack>
        
        <VStack gap={3} align="start" flex="1">
          {features.map((feature, index) => (
            <HStack key={index} gap={3} align="start">
              <Box
                w={2}
                h={2}
                bg={`${buttonColor}.500`}
                borderRadius="full"
                mt={2}
                flexShrink={0}
              />
              <Text fontSize="sm" color="fg.muted">
                {feature}
              </Text>
            </HStack>
          ))}
        </VStack>

        <Link href="/signin">
          <Button
            colorScheme={buttonColor}
            size="lg"
            width="full"
            mt={4}
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
      <Box bg="gradient-to-br" bgGradient="linear(to-br, blue.50, blue.100)" py={20}>
        <Container maxW="6xl">
          <VStack gap={8} textAlign="center">
            <VStack gap={4}>
              <Heading
                size="3xl"
                color="blue.900"
                fontWeight="bold"
                _dark={{ color: 'blue.100' }}
              >
                YPS-Polar
              </Heading>
              <Heading
                size="xl"
                color="gray.700"
                fontWeight="medium"
                _dark={{ color: 'gray.300' }}
              >
                アルバイト勤怠シフト管理システム
              </Heading>
              <Text
                fontSize="lg"
                color="gray.600"
                maxW="2xl"
                lineHeight="1.8"
                _dark={{ color: 'gray.400' }}
              >
                マネージャーとスタッフでシフト調整が簡単にできるシステム。
                <br />
                個人情報を最小限に抑えた安心設計で、効率的な店舗運営をサポートします。
              </Text>
            </VStack>

            <HStack gap={4} flexWrap="wrap" justify="center">
              <Link href="/signin">
                <Button
                  colorScheme="blue"
                  size="lg"
                  px={8}
                  py={6}
                  fontSize="lg"
                >
                  今すぐ始める
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="outline"
                  colorScheme="blue"
                  size="lg"
                  px={8}
                  py={6}
                  fontSize="lg"
                >
                  機能を見る
                </Button>
              </Link>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* ユーザータイプ選択セクション */}
      <Container maxW="6xl" py={20}>
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <Heading size="2xl" color="fg.emphasized">
              あなたの役割に合わせて
            </Heading>
            <Text fontSize="lg" color="fg.subtle" maxW="2xl">
              マネージャーとスタッフ、それぞれに最適化された機能で、
              効率的なシフト管理を実現します。
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8} w="full">
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
      <Box id="features" bg="bg.subtle" py={20}>
        <Container maxW="6xl">
          <VStack gap={16}>
            <VStack gap={4} textAlign="center">
              <Heading size="2xl" color="fg.emphasized">
                主要機能
              </Heading>
              <Text fontSize="lg" color="fg.subtle" maxW="2xl">
                シフト管理からタイムカードまで、店舗運営に必要な機能を
                一つのシステムで効率的に管理できます。
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
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
      <Container maxW="6xl" py={20}>
        <Card.Root bg="blue.50" borderRadius="2xl" p={12} _dark={{ bg: 'blue.900' }}>
          <VStack gap={8} textAlign="center">
            <VStack gap={4}>
              <Heading size="2xl" color="blue.900" _dark={{ color: 'blue.100' }}>
                今すぐ始めてみませんか？
              </Heading>
              <Text
                fontSize="lg"
                color="blue.700"
                maxW="2xl"
                _dark={{ color: 'blue.200' }}
              >
                YPS-Polarで、効率的なシフト管理を実現しましょう。
                アカウント作成は簡単、すぐに利用開始できます。
              </Text>
            </VStack>

            <Link href="/signin">
              <Button
                colorScheme="blue"
                size="xl"
                px={12}
                py={8}
                fontSize="xl"
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