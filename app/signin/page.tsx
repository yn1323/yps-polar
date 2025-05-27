import { SigninForm } from '@/src/components/features/signin/SigninForm';
import { Animation } from '@/src/components/templates/Animation';

export default function Page() {
  return (
    <Animation>
      <div className="flex items-center justify-center min-h-screen">
        <SigninForm />
      </div>
    </Animation>
  );
}
