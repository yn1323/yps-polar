import { Animation } from '@/src/components/templates/Animation';
import Link from 'next/link';

export const metadata = {
  title: 'YPS-Polar',
};

export default function Page() {
  return (
    <Animation>
      <h1 className="border text-gray-500">YPS-Polar</h1>
      <Link href="/signin">ログイン</Link>
    </Animation>
  );
}
