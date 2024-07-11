import { X, User, Mail } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps {
  closeConfirmModalTrip: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

function CornfirmTripModal({
  closeConfirmModalTrip,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between ">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button type="button" onClick={closeConfirmModalTrip}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="font-semibold tezt-zinc-100">slz</span> nas datas
            de{" "}
            <span className="font-semibold tezt-zinc-100">
              16 a 20 de agosto de 2024
            </span>
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              className="!bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              type="text"
              name="name"
              placeholder="Seu nome completo"
            />
          </div>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Mail className="text-zinc-400 size-5" />
            <input
              className="!bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              type="email"
              name="email"
              placeholder="Seu email pessoal"
              autoComplete="off"
            />
          </div>
          <button className="h-11 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex gap-2 hover:bg-lime-400 w-full justify-center items-center">
            Confirmar criação da viagem
          </button>
        </form>
      </div>
    </div>
  );
}

export default CornfirmTripModal;
