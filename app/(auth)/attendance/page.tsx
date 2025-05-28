import { Animation } from '@/src/components/templates/Animation';
import { Center, Heading } from '@chakra-ui/react';

export default function AttendancePage() {
  return (
    <Animation>
      <Center h="100vh">
        <Heading>勤怠記録</Heading>
      </Center>
    </Animation>
  );
}