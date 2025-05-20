'use client';

import { Signout } from '@/src/components/features/Signout';
import { Button, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { registerUser } from './actions';

export function ConfigClient({ userId }: { userId: string }) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      const userName = 'NoName';
      const result = await registerUser(userId, userName);

      if (result.success) {
        setIsRegistered(true);
      }
    } catch (error) {
      console.error('登録エラー:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VStack gap={6}>
      {isRegistered ? (
        <Text fontSize="lg">初回設定が完了しました</Text>
      ) : (
        <>
          <Text fontSize="lg">初回設定を行います</Text>
          <Button
            colorScheme="teal"
            onClick={handleRegister}
            disabled={isLoading}
          >
            {isLoading ? '登録中...' : '登録する'}
          </Button>
        </>
      )}
      <Signout />
    </VStack>
  );
}
