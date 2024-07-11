import { Calendar, Clock, Tag, X } from "lucide-react";

interface CreateActivityModalProps{
    closeCreateActivityModalOpen: () => void;
}

function CreateActivityModal({closeCreateActivityModalOpen}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between ">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={closeCreateActivityModalOpen}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem ver as atividades
          </p>
        </div>

        <form className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              className="!bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              type="text"
              name="title"
              placeholder="Qual a atividade?"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Calendar className="text-zinc-400 size-5" />
              <input
                className="!bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                type="text"
                name="title"
                placeholder="Qual a atividade?"
              />
            </div>
            <div className="h-14 w-36 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Clock className="text-zinc-400 size-5" />
              <input
                className="!bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                type="text"
                name="title"
                placeholder="Horário"
              />
            </div>
          </div>

          <button className="h-11 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex gap-2 hover:bg-lime-400 w-full justify-center items-center">
            Salvar atividade
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateActivityModal;
