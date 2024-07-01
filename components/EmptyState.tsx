'use client';

import { useRouter } from 'next/navigation';
import Heading from './Heading';
import { Button } from './Button';

type Props = {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
};

const EmptyState = ({
  title = 'No item match',
  subtitle = 'Try changing or removing some of your filters',
}: Props) => {
  const router = useRouter();
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        <Button outline onClick={() => router.push('/')}>
          Remove all filters
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;
