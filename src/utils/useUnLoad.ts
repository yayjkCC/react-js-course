import { useRef, useEffect } from 'react';

const useUnload = fn => {
  const cb = useRef(fn);
    
  useEffect(() => {
    cb.current = (event) => {
      const returnValue = fn?.(event);
      // Handle legacy `event.returnValue` property
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
      if (typeof returnValue === 'string') {
        return (event.returnValue = returnValue);
      }
      // Chrome doesn't support `event.preventDefault()` on `BeforeUnloadEvent`,
      // instead it requires `event.returnValue` to be set
      // https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload#browser_compatibility
      if (event.defaultPrevented) {
        return (event.returnValue = '');
      }
    };
  }, [fn]);

  useEffect(() => {
    const onUnload = (event) => {
        console.log('ok')
        cb.current?.(event);
    }
    window.addEventListener("onunload", onUnload);

    return () => window.removeEventListener("onunload", onUnload);
  }, []);
};

export default useUnload;