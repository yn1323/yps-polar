'use client';

import { Signout } from '@/src/components/features/Signout';
import { Button, Text, VStack } from '@chakra-ui/react';
import type { User } from '@supabase/supabase-js';
import { useState } from 'react';
import { registerUser } from './actions';

export function ConfigClient({ user }: { user: User }) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      const userName = user.user_metadata?.full_name ?? user.email ?? 'NoName';
      const result = await registerUser(user.id, userName);

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
