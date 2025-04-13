import Link from 'next/link';

export const metadata = {
  title: 'YPS-Polar',
};
export const MainPage = async () => {
  return <MainPageInner />;
};

export const MainPageInner = () => {
  return (
    <main>
      <h1 className="border text-gray-500">YPS-Polar</h1>
      <Link href="/login">ログイン</Link>
    </main>
  );
};
