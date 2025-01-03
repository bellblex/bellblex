import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from "react";

interface MouseState {
  x: number | null; // Global X position
  y: number | null; // Global Y position
  elementX: number | null; // X relative to the element
  elementY: number | null; // Y relative to the element
  elementPositionX: number | null; // Element's position in the viewport
  elementPositionY: number | null; // Element's position in the viewport
}

interface UseMousePositionResult {
  mouseState: MouseState;
  elementRef: RefObject<HTMLDivElement>;
}

export function useMousePosition(): UseMousePositionResult {
  const [mouseState, setMouseState] = useState<MouseState>({
    x: null,
    y: null,
    elementX: null,
    elementY: null,
    elementPositionX: null,
    elementPositionY: null,
  });

  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const newState: Partial<MouseState> = {
        x: event.clientX,
        y: event.clientY,
      };

      if (elementRef.current instanceof Element) {
        const { left, top } = elementRef.current.getBoundingClientRect();
        const elementPositionX = left + window.scrollX;
        const elementPositionY = top + window.scrollY;
        const elementX = event.pageX - elementPositionX;
        const elementY = event.pageY - elementPositionY;

        newState.elementX = elementX;
        newState.elementY = elementY;
        newState.elementPositionX = elementPositionX;
        newState.elementPositionY = elementPositionY;
      }

      setMouseState((prev) => ({
        ...prev,
        ...newState,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return { mouseState, elementRef };
}
