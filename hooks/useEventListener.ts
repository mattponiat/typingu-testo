import { useEffect, useRef } from "react";

export const useEventListener = (
  eventType: string,
  callback: (e: KeyboardEvent) => void
) => {
  let element: Window & typeof globalThis;
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    element = window;
    const handler = (e: any) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType]);
};
