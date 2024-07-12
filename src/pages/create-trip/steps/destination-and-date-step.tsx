import { MapPin, Calendar, Settings2, ArrowRight, X } from "lucide-react";
import Button from "../../../components/button";
import { DateRange, DayPicker } from "react-day-picker";
import { useState } from "react";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
}

function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [eventStartAndDates, setEventStartAndDates] = useState<
    DateRange | undefined
  >();

  function OpenDatePicker() {
    return setIsDatePickerOpen(true);
  }

  function CloseDatePicker() {
    return setIsDatePickerOpen(false);
  }

  const displayedDate =
    eventStartAndDates && eventStartAndDates.from && eventStartAndDates.to
      ? format(eventStartAndDates.from, "d' de 'LLL")
          .concat(" até ")
          .concat(format(eventStartAndDates.to, "d' de 'LLL"))
      : null;
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 w-56">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          className="bg-transparent text-lg placeholder-zinc-400 outline-none"
          type="text"
          placeholder="Para onde você vai?"
        />
      </div>

      <button
        onClick={OpenDatePicker}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 text-left"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-48 flex-1 text-nowrap">
          {displayedDate || "Quando?"}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between ">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button type="button" onClick={CloseDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>
            <DayPicker
              mode="range"
              selected={eventStartAndDates}
              onSelect={setEventStartAndDates}
            />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800"></div>
      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary" size="default">
          Alterar local e data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput} variant="primary" size="default">
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}

export default DestinationAndDateStep;
