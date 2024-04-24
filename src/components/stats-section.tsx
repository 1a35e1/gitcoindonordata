interface StatsItem {
  label: string;
  content: React.ReactNode;
}

interface Props {
  title: string;
  stats: StatsItem[];
}

export const StatsSection = ({ title, stats }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <span className="text-xl tracking-wide">{title}</span>

      <div className="-mx-2 flex flex-wrap">
        {stats.map(({ label, content }) => (
          <Stats key={label} label={label} content={content} />
        ))}
      </div>
    </div>
  );
};

const Stats = ({ content, label }: StatsItem) => {
  return (
    <div className="mb-4 w-1/2 px-2 ">
      <div className="h-full space-y-3 rounded-lg bg-slate-200 p-4">
        <div className="font-mono text-[32px] font-normal text-black">{content}</div>
        <div className="text-sm text-greyMid">{label}</div>
      </div>
    </div>
  );
};
