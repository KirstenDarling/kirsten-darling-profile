const Event = ({ date, text }: { date: string; text?: string }) => {
  return (
    <div className="flex justify-between self-stretch py-4 items-center">
      <div className="text-zinc-100 text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
        {date}
      </div>
      <div className="grow shrink basis-0 flex-col justify-center items-center gap-4 max-w-[90%] inline-flex">
        <div className="self-stretch text-white text-lg font-normal font-['Source Sans Pro'] leading-[27px]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Event;
