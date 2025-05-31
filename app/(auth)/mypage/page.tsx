'use client';

import { Animation } from '@/src/components/templates/Animation';
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  HiPlus, 
  HiOfficeBuilding, 
  HiClock,
  HiCalendar,
  HiClipboardCheck,
  HiCog,
  HiBell,
  HiUser,
  HiUserGroup
} from 'react-icons/hi';

// 仮のデータ
const mockShops = [
  {
    id: '1',
    shopName: 'カフェ渋谷店',
    role: 'manager',
    shifts: [
      { date: '12/20(金)', time: '10:00-18:00' },
      { date: '12/21(土)', time: '12:00-20:00' },
      { date: '12/24(火)', time: '14:00-22:00' },
    ],
    staffCount: 12,
  },
  {
    id: '2',
    shopName: 'カフェ新宿店',
    role: 'staff',
    shifts: [
      { date: '12/21(土)', time: '14:00-22:00' },
      { date: '12/22(日)', time: '14:00-22:00' },
      { date: '12/25(水)', time: '10:00-18:00' },
    ],
    staffCount: 8,
  },
  {
    id: '3',
    shopName: 'カフェ池袋店',
    role: 'manager',
    shifts: [
      { date: '12/20(金)', time: '14:00-22:00' },
      { date: '12/21(土)', time: '10:00-18:00' },
      { date: '12/22(日)', time: '10:00-18:00' },
    ],
    staffCount: 15,
  },
];

export default function MyPage() {
  const router = useRouter();
  const userName = 'テストユーザー'; // 仮のユーザー名
  const today = new Date();
  const todayString = `${today.getMonth() + 1}/${today.getDate()}(${['日', '月', '火', '水', '木', '金', '土'][today.getDay()]})`;

  return (
    <Animation>
      <Container maxW="container.xl" py={8}>
        <VStack gap={8} align="stretch">
          {/* ヘッダー部分 */}
          <Flex justify="space-between" align="center">
            <Box>
              <Heading size="2xl" mb={2}>
                こんにちは、{userName}さん！
              </Heading>
              <Text color="gray.600">
                {todayString} - 今日も一日がんばりましょう！✨
              </Text>
            </Box>
          </Flex>


          {/* 今日の勤務予定サマリー */}
          <Card.Root variant="subtle" colorPalette="teal">
            <Card.Body>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text fontSize="sm" color="gray.600" mb={1}>本日の勤務予定</Text>
                  <Text fontSize="2xl" fontWeight="bold">
                    {mockShops.filter(shop => shop.shifts[0]?.date === todayString && shop.shifts[0]?.time !== 'なし').length > 0
                      ? mockShops.find(shop => shop.shifts[0]?.date === todayString && shop.shifts[0]?.time !== 'なし')?.shopName
                      : '休み'}
                  </Text>
                  {mockShops.filter(shop => shop.shifts[0]?.date === todayString && shop.shifts[0]?.time !== 'なし').length > 0 && (
                    <Text fontSize="lg" color="gray.700" mt={1}>
                      {mockShops.find(shop => shop.shifts[0]?.date === todayString && shop.shifts[0]?.time !== 'なし')?.shifts[0].time}
                    </Text>
                  )}
                </Box>
                <Button onClick={() => router.push('/timecard')} colorPalette="teal" size="lg">
                  <HiClock size={20} />
                  打刻する
                </Button>
              </Flex>
            </Card.Body>
          </Card.Root>

          {/* 通知・お知らせセクション */}
          <Card.Root>
            <Card.Header>
              <Flex justify="space-between" align="center">
                <Heading size="md">
                  <HiBell style={{ display: 'inline', marginRight: '8px' }} />
                  お知らせ
                </Heading>
                <Text fontSize="sm" color="gray.500">すべて見る</Text>
              </Flex>
            </Card.Header>
            <Card.Body>
              <Stack gap={3}>
                <Box p={3} bg="blue.50" borderRadius="md" borderLeft="4px solid" borderColor="blue.500">
                  <Flex justify="space-between" align="start">
                    <Box flex={1}>
                      <Text fontWeight="medium" mb={1}>【重要】年末年始の営業について</Text>
                      <Text fontSize="sm" color="gray.600">12/31〜1/3は全店舗休業となります</Text>
                    </Box>
                    <Text fontSize="xs" color="gray.500" whiteSpace="nowrap" ml={3}>2日前</Text>
                  </Flex>
                </Box>
                <Box p={3} bg="gray.50" borderRadius="md">
                  <Flex justify="space-between" align="start">
                    <Box flex={1}>
                      <Text fontWeight="medium" mb={1}>シフト提出のお願い</Text>
                      <Text fontSize="sm" color="gray.600">来月のシフト提出期限は今週金曜日です</Text>
                    </Box>
                    <Text fontSize="xs" color="gray.500" whiteSpace="nowrap" ml={3}>4日前</Text>
                  </Flex>
                </Box>
              </Stack>
            </Card.Body>
          </Card.Root>

          {/* 店舗一覧セクション */}
          <Box>
            <Flex justify="space-between" align="center" mb={6}>
              <Heading size="lg">所属店舗</Heading>
              <Button
                onClick={() => router.push('/shops/new')}
                colorPalette="teal"
                variant="solid"
              >
                <HiPlus />
                新規店舗を作成
              </Button>
            </Flex>

            <Grid
              templateColumns={{
                base: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              }}
              gap={6}
            >
              {mockShops.map((shop) => (
                <Card.Root
                  key={shop.id}
                  onClick={() => router.push(`/shops/${shop.id}`)}
                  cursor="pointer"
                  _hover={{ shadow: 'lg', transform: 'translateY(-2px)' }}
                  transition="all 0.2s"
                >
                  <Card.Body>
                    <Stack gap={4}>
                      <Flex justify="space-between" align="start">
                        <Box>
                          <Heading size="md" mb={1}>
                            {shop.shopName}
                          </Heading>
                          <Flex align="center" gap={1}>
                            {shop.role === 'manager' ? <HiUser size={14} /> : <HiUserGroup size={14} />}
                            <Text
                              fontSize="sm"
                              color={
                                shop.role === 'manager'
                                  ? 'teal.600'
                                  : 'gray.600'
                              }
                              fontWeight="medium"
                            >
                              {shop.role === 'manager'
                                ? 'マネージャー'
                                : 'スタッフ'}
                            </Text>
                          </Flex>
                        </Box>
                        <HiOfficeBuilding size={24} color="gray" />
                      </Flex>

                      <Box>
                        <Flex align="center" gap={2} mb={3}>
                          <HiCalendar size={16} />
                          <Text fontSize="sm" fontWeight="medium">
                            直近のシフト
                          </Text>
                        </Flex>
                        <Stack gap={1}>
                          {shop.shifts.length > 0 ? (
                            shop.shifts.map((shift, index) => (
                              <Flex
                                key={index}
                                justify="space-between"
                                align="center"
                                p={2}
                                borderRadius="md"
                                bg={shift.date === todayString ? 'teal.50' : 'transparent'}
                                borderLeft={shift.date === todayString ? '3px solid' : 'none'}
                                borderColor={shift.date === todayString ? 'teal.500' : 'transparent'}
                              >
                                <Text fontSize="sm" color={shift.date === todayString ? 'teal.700' : 'gray.600'}>
                                  {shift.date}
                                </Text>
                                <Text
                                  fontSize="sm"
                                  fontWeight={shift.date === todayString ? 'bold' : 'medium'}
                                  color={shift.date === todayString ? 'teal.700' : 'gray.700'}
                                >
                                  {shift.time}
                                </Text>
                              </Flex>
                            ))
                          ) : (
                            <Text fontSize="sm" color="gray.400">
                              予定されているシフトはありません
                            </Text>
                          )}
                        </Stack>
                      </Box>

                      <Flex justify="space-between" align="center">
                        <Text fontSize="sm" color="gray.600">
                          スタッフ数: {shop.staffCount}名
                        </Text>
                        {shop.role === 'manager' && (
                          <Text fontSize="xs" color="teal.600">
                            管理者権限
                          </Text>
                        )}
                      </Flex>
                    </Stack>
                  </Card.Body>
                </Card.Root>
              ))}
            </Grid>
          </Box>
        </VStack>
      </Container>
    </Animation>
  );
}