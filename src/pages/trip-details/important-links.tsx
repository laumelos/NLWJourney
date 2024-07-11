import { Link2, Plus } from "lucide-react";

function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnb
            </span>
            <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200 cursor-pointer">
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </div>
          <Link2 className="size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-1.5">
            <span className="block font-medium text-zinc-100">
              Regras da casa
            </span>
            <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200 cursor-pointer">
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </div>
          <Link2 className="size-5 shrink-0" />
        </div>
      </div>
      <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 py-2 font-medium flex w-full justify-center items-center gap-2 hover:bg-zinc-700">
        <Plus className="size-5" />
        Cadastrar novo link
      </button>
    </div>
  );
}

export default ImportantLinks;
