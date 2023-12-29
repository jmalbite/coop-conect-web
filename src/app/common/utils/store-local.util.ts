export function storeLocal<T>(keyName: string, data: T): void {
  const jsonString = JSON.stringify(data);

  localStorage.setItem(keyName, jsonString);
}

export function getItemFromLocal<T>(keyName: string): T | null {
  const jsonString = localStorage.getItem(keyName);
  if (jsonString) {
    return JSON.parse(jsonString) as T;
  }
  return null;
}

export function removeFromLocal(keyName: string): void {
  localStorage.removeItem(keyName);
}
