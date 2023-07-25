import { Tag } from '@/components/tag';
import { PencilIcon } from '@/icons/pencil';

const skinTags = ['Combination', 'Sensitive', 'Lines', 'Acne', 'Redness'];

export const DetailCard = () => {
  return (
    <div className="rounded-[1.75rem] border border-gray-200 bg-white py-6 shadow">
      <img
        className="mx-auto rounded-[1.75rem]"
        src="/assets/images/sample.png"
        alt=""
        width="93%"
      />
      <div className="mt-6 p-5">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold">Jocelyn Culhane</span>
          <span className="hover:cursor-pointer">
            <PencilIcon />
          </span>
        </div>
        <div className="mt-6 font-bold">@ryry</div>
        <div className="mt-6">
          <span className="font-bold">Age</span>: 30-40
        </div>
        <div className="mt-6">
          <span className="font-bold">Location</span>: New-York, USA
        </div>
        <div>
          <p className="font-bold">About Me</p>
          <p>
            I&apos;m a passionate individual with a love for exploring the
            wonders of life. Curiosity is my driving force, and I&apos;m
            constantly seeking new experiences and knowledge that broaden my
            horizons. Whether it&apos;s diving into the depths of a gripping
            novel or embarking on an adventure in the great outdoors, I embrace
            every opportunity to learn and grow.
          </p>
        </div>
        <div>
          <p className="font-bold">My Skin</p>
          <div className="flex flex-wrap">
            {skinTags.map((item) => (
              <Tag text={item} key={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
