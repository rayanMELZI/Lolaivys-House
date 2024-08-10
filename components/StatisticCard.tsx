interface props {
  icon: any;
  title: string;
  amount: number | string;
}

export default function StatisticCard({ icon, title, amount }: props) {
  return (
    <div className="bg-[rgba(153,205,50,0.1)] rounded p-10 px-12 flex flex-col items-center gap-3 font-bold shadow-lg min-w-[15rem]">
      <div className="flex items-end gap-2">
        <div className="text-3xl">{icon}</div>
        <div className="text-2xl">{amount}</div>
      </div>
      <div>{title}</div>
    </div>
  );
}
