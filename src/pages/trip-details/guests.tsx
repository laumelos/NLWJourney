import { CircleCheck, CircleDashed, UserCog } from "lucide-react";

function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-1.5">
            <span className="block font-medium text-zinc-100">Laura Melo</span>
            <span className="block text-sm text-zinc-400 truncate">
              lauraemelos@gmail.com
            </span>
          </div>
          <CircleCheck className="size-5 shrink-0 text-lime-300" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-1.5">
            <span className="block font-medium text-zinc-100">
              Samir Andrade
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              samirandradee@gmail.com
            </span>
          </div>
          <CircleDashed className="size-5 shrink-0" />
        </div>

        <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 py-2 font-medium flex w-full justify-center items-center gap-2 hover:bg-zinc-700">
          <UserCog className="size-5" />
          Gerenciar convidados
        </button>
      </div>
    </div>
  );
}

export default Guests;
