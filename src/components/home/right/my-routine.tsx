import { MorningIcon } from '@/icons/morning';
import { NightIcon } from '@/icons/night';

import { EmptyAddBox } from './add-box';

export const MyRoutine = () => {
  return (
    <div>
      <div>
        <div>
          <MorningIcon />
          <EmptyAddBox />
        </div>
      </div>
      <div className="mt-16">
        <NightIcon />
        <EmptyAddBox />
      </div>
    </div>
  );
};
