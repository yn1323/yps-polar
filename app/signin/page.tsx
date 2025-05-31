import { SigninForm } from '@/src/components/features/signin/SigninForm';
import { Animation } from '@/src/components/templates/Animation';
import { Center } from '@chakra-ui/react';

type Props = {
  searchParams: Promise<{ error?: string }>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  const error = params.error;

  return (
    <Animation>
      <Center h="100vh">
        <SigninForm authError={error} />
      </Center>
    </Animation>
  );
}

