import Image, { StaticImageData } from 'next/image';

const QuoteWithImage = ({
  quote,
  author,
  image,
  bgColor,
}: {
  quote?: string;
  author?: string;
  image: StaticImageData;
  bgColor: string;
}) => {
  return (
    <div className={`self-stretch bg-${bgColor} justify-center items-center inline-flex`}>
      <div className='grow shrink basis-0 h-[640px] p-6 bg-[${bgColor}] justify-center items-center gap-10 flex'>
        <div className='grow shrink basis-0 flex-col justify-center items-center gap-3 inline-flex'>
          <div className='self-stretch h-[100px] flex-col justify-center items-center gap-10 flex'>
            <div className='self-stretch h-[100px] flex-col justify-center items-start gap-4 flex'>
              <div className="self-stretch text-center text-[${bgColor === 'gray-800' ? 'zinc-100' : 'neutral-100'}] text-[22px] font-normal font-['${bgColor === 'gray-800' ? 'Source Sans Pro' : 'Open Sans'}] leading-[30.80px]">
                {quote}
              </div>
              <div className="self-stretch text-center text-[${bgColor === 'gray-800' ? 'white' : 'zinc-300'}] text-sm font-normal font-['${bgColor === 'gray-800' ? 'Source Sans Pro' : 'Open Sans'}] leading-snug">
                {author}
              </div>
            </div>
          </div>
        </div>
      </div>
      {image && (
        <Image
          className={`${bgColor === 'gray-800' ? 'max-w-[50%] w-[640px]' : 'w-[620px]'} h-[640px] relative`}
          src={image}
          alt=''
        />
      )}
    </div>
  );
};

export default QuoteWithImage;
