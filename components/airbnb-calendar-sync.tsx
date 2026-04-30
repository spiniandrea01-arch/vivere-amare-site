"use client";

import { useEffect, useState } from "react";
import { useCalendarSync, toKey } from "@/hooks/useCalendarSync";

const MONTHS = [
  "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
  "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre",
];
const DAYS = ["LUN", "MAR", "MER", "GIO", "VEN", "SAB", "DOM"];

export function AirbnbCalendarSync() {
  const { events, isLoading, error, sync, occupiedDays } = useCalendarSync();
  const now = new Date();
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());

  useEffect(() => {
    sync();
  }, [sync]);

  if (isLoading) return null;
  if (error || events.length === 0) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const map = occupiedDays();

  const firstDay = new Date(viewYear, viewMonth, 1);
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const startOffset = (firstDay.getDay() + 6) % 7;

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
      return;
    }
    setViewMonth((m) => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
      return;
    }
    setViewMonth((m) => m + 1);
  };

  return (
    <section id="calendario" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-center text-sm uppercase tracking-[0.28em] text-red-500">Disponibilita</p>
        <h2 className="mb-8 text-center font-serif text-4xl text-slate-900 md:text-5xl">Calendario prenotazioni</h2>

        <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm md:p-7">
          <div className="mb-4 flex justify-end">
            <button
              type="button"
              onClick={() => {
                const picker = document.getElementById("calendar-month-picker") as HTMLInputElement | null;
                if (!picker) return;
                if (typeof picker.showPicker === "function") picker.showPicker();
                else picker.focus();
              }}
              className="h-10 rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
            >
              Scegli mese e anno
            </button>
            <input
              id="calendar-month-picker"
              type="month"
              aria-label="Seleziona mese e anno"
              value={`${viewYear}-${String(viewMonth + 1).padStart(2, "0")}`}
              onChange={(e) => {
                const [y, m] = e.target.value.split("-");
                if (!y || !m) return;
                setViewYear(Number(y));
                setViewMonth(Number(m) - 1);
              }}
              className="sr-only"
              tabIndex={-1}
            />
          </div>
          <div className="mb-6 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={prevMonth}
              aria-label="Mese precedente"
              className="h-10 w-10 rounded-full border border-slate-200 bg-white text-lg text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
            >
              ‹
            </button>
            <span className="text-xl font-semibold tracking-tight text-slate-900">
              {MONTHS[viewMonth]} {viewYear}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              aria-label="Mese successivo"
              className="h-10 w-10 rounded-full border border-slate-200 bg-white text-lg text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
            >
              ›
            </button>
          </div>

          <div className="mb-2 grid grid-cols-7 gap-2">
            {DAYS.map((d) => (
              <div key={d} className="text-center text-xs font-bold tracking-wide text-slate-400">{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: startOffset }).map((_, i) => <div key={`empty-${i}`} />)}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const date = new Date(viewYear, viewMonth, i + 1);
              const key = toKey(date);
              const evt = map.get(key);

              let cls = "border border-slate-200 bg-white text-slate-800";
              if (evt?.type === "booked") cls = "border-red-500 bg-red-500 text-white shadow-[0_6px_16px_-10px_rgba(239,68,68,0.8)]";
              if (evt?.type === "blocked") cls = "border-slate-500 bg-slate-500 text-white";

              return (
                <div
                  key={key}
                  className={`aspect-square rounded-xl flex items-center justify-center text-sm font-medium transition-colors ${cls}`}
                  title={evt?.summary ?? "Libero"}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
