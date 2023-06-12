export function getLocalStorageValue<T>(key: string): T | false {
  const storedValue = localStorage.getItem(key);
  return storedValue !== null ? (JSON.parse(storedValue) as T) : false;
}
export function setLocalStorageValue(key: string, value: object): void {
  localStorage.setItem(key, JSON.stringify(value));
}
export function removeLocalStorageValue(key: string): void {
  localStorage.removeItem(key);
}