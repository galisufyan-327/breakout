import { HomeLeft } from '@/components/home/left';
import { HomeRight } from '@/components/home/right';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="Breakout" description="Breakout Application" />}>
      <div>
        <h1 className="mx-6 text-[64px] font-bold text-black">My Routine</h1>
      </div>
      <hr />
      <div>
        <div className="mx-6 pt-10 md:flex">
          <div className="sm:w-full md:w-1/3">
            <HomeLeft />
          </div>
          <div className="sm:w-full md:ml-8 md:w-2/3">
            <HomeRight />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
