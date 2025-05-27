import { ResetPasswordForm } from '@/src/components/features/signin/ResetPasswordForm';
import { Animation } from '@/src/components/templates/Animation';

export default function Page() {
  return (
    <Animation>
      <div className="flex items-center justify-center min-h-screen">
        <ResetPasswordForm />
      </div>
    </Animation>
  );
}
