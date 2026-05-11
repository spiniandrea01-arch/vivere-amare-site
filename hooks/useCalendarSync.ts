"use client";

import { useState, useCallback } from "react";

export interface CalendarEvent {
  uid: string;
  summary: string;
  start: Date;
  end: Date;
  type: "booked" | "blocked";
}

export interface SyncState {
  events: CalendarEvent[];
  lastSync: Date | null;
  isLoading: boolean;
  error: string | null;
}

export function useCalendarSync() {
  const [state, setState] = useState<SyncState>({
    events: [],
    lastSync: null,
    isLoading: false,
    error: null,
  });

  const sync = useCallback(async () => {
    setState((s) => ({ ...s, isLoading: true, error: null }));

    try {
      const res = await fetch("/api/calendar/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? `HTTP ${res.status}`);

      setState({
        events: (data.events ?? []).map((e: any) => ({
          ...e,
          start: new Date(e.start),
          end: new Date(e.end),
        })),
        lastSync: new Date(),
        isLoading: false,
        error: null,
      });
    } catch (e: any) {
      setState((s) => ({ ...s, isLoading: false, error: e.message ?? "Sync failed" }));
    }
  }, []);

  const occupiedDays = useCallback((): Map<string, CalendarEvent> => {
    const map = new Map<string, CalendarEvent>();

    for (const evt of state.events) {
      const cur = new Date(evt.start);
      while (cur < evt.end) {
        map.set(toKey(cur), evt);
        cur.setDate(cur.getDate() + 1);
      }
    }

    return map;
  }, [state.events]);

  return { ...state, sync, occupiedDays };
}

export function toKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

