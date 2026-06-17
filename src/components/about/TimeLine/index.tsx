import { TimelineItem } from "../TimelineItems";

type TimeLineProps = {
  timelineItems: TimelineItem[];
};

export function TimeLine({ timelineItems }: TimeLineProps) {
  return (
    <div className="relative my-20 pb-16 xl:h-140 xl:pb-0">
      <div className="absolute left-4 top-0 h-full w-px bg-white/30 xl:left-0 xl:top-1/2 xl:h-px xl:w-full xl:-translate-y-1/2" />

      <div className="grid grid-cols-1 gap-8 xl:h-full xl:grid-cols-8 xl:gap-0">
        {timelineItems.map((item) => {
          const isTop = item.position === "top";
          const Icon = item.icon;

          return (
            <div
              key={`${item.date}-${item.title}`}
              className="relative pl-12 xl:h-full xl:pl-0"
            >
              <span className="absolute left-2 top-2 z-20 h-4 w-4 rounded-full bg-gray-400 xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2" />

              <div
                className={`absolute left-1/2 hidden w-px -translate-x-1/2 bg-white/30 xl:block ${
                  isTop ? "bottom-1/2 h-16" : "top-1/2 h-16"
                }`}
              />

              <div className="flex flex-col gap-4 xl:hidden">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-400 text-zinc-950 shadow-lg shadow-black/20">
                  <Icon className="h-9 w-9" />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-2xl font-bold text-white">
                    {item.date}
                  </span>

                  <span className="text-lg font-bold leading-tight text-white">
                    {item.title}
                  </span>

                  <p className="text-sm leading-relaxed text-white/75">
                    {item.description}
                  </p>
                </div>
              </div>

              {isTop ? (
                <>
                  <div className="absolute bottom-[calc(50%+64px)] left-1/2 hidden w-47.5 -translate-x-1/2 flex-col items-center gap-4 text-center xl:flex">
                    <div className="flex flex-col gap-2">
                      <span className="text-lg font-bold leading-tight text-white">
                        {item.title}
                      </span>

                      <p className="text-sm leading-relaxed text-white/75">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-400 text-zinc-950 shadow-lg shadow-black/20 outline-2 outline-gray-400 transition-[outline-offset,transform] delay-100 duration-100 hover:scale-110 hover:outline-offset-4">
                      <Icon className="h-9 w-9" />
                    </div>
                  </div>

                  <span className="absolute left-1/2 top-[calc(50%+22px)] hidden -translate-x-1/2 text-2xl font-bold text-white xl:block">
                    {item.date}
                  </span>
                </>
              ) : (
                <>
                  <span className="absolute bottom-[calc(50%+22px)] left-1/2 hidden -translate-x-1/2 text-2xl font-bold text-white xl:block">
                    {item.date}
                  </span>

                  <div className="absolute left-1/2 top-[calc(50%+64px)] hidden w-47.5 -translate-x-1/2 flex-col items-center gap-4 text-center xl:flex">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-400 text-zinc-950 shadow-lg shadow-black/20 outline-2 outline-gray-400 transition-[outline-offset,transform] delay-100 duration-100 hover:scale-110 hover:outline-offset-4">
                      <Icon className="h-9 w-9" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-lg font-bold leading-tight text-white">
                        {item.title}
                      </span>

                      <p className="text-sm leading-relaxed text-white/75">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
