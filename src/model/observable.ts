export const makeObservable = (target: any) => {
  let listeners: any[] = [];
  let value = target;

  function get() {
    return value;
  }

  function set(newValue: any) {
    if (value === newValue) return;
    value = newValue;
    listeners.forEach((l) => l(value));
  }

  function subscribe(listenerFunc: any) {
    listeners.push(listenerFunc);
    return () => unsubscribe(listenerFunc);
  }

  function unsubscribe(listenerFunc: any) {
    listeners = listeners.filter((l) => l !== listenerFunc);
  }

  return {
    get,
    set,
    subscribe,
  };
};
