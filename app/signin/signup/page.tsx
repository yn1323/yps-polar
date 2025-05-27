import { SignupForm } from '@/src/components/features/signin/SignupForm';
import { Animation } from '@/src/components/templates/Animation';

export default function Page() {
  return (
    <Animation>
      <div className="flex items-center justify-center min-h-screen">
        <SignupForm />
      </div>
    </Animation>
  );
}
