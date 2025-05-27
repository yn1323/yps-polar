import { UserForm } from '@/src/components/features/register/UserForm';
import { Animation } from '@/src/components/templates/Animation';
import { getSelfInfo } from '@/src/helpers/auth/auth';

export default async function Page() {
  const { userId } = await getSelfInfo();

  return (
    <Animation>
      <div className="flex items-center justify-center min-h-screen">
        <UserForm userId={userId} callbackRoutingPath="/dashboard" />
      </div>
    </Animation>
  );
}
