import { Animation } from '@/src/components/templates/Animation';
import { LandingPage } from '@/src/components/templates/LandingPage';

export const metadata = {
  title: 'YPS-Polar - アルバイト勤怠シフト管理システム',
  description: 'マネージャーとスタッフでシフト調整が簡単にできるシステム。個人情報を最小限に抑えた安心設計で効率的な店舗運営をサポート。',
};

export default async function Page() {
  return (
    <Animation>
      <LandingPage />
    </Animation>
  );
}
