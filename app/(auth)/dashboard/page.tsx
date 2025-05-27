import { Signout } from '@/src/components/features/Signout';
import { Animation } from '@/src/components/templates/Animation';

export default function Page() {
  return (
    <Animation>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <div>this is dashboard</div>
          <Signout />
        </div>
      </div>
    </Animation>
  );
}
