import { useEffect, useRef } from "react";

export const useEventListener = (
  eventType: string,
  handler: (e: KeyboardEvent) => void
) => {
  let element: Window & typeof globalThis;
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    element = window;
    function internalHandler(e: any) {
      return handlerRef.current(e);
    }

    document.addEventListener(eventType, internalHandler);

    return () => document.removeEventListener(eventType, internalHandler);
  }, [eventType]);
};
