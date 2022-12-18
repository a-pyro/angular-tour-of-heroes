import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T | undefined {
    const item = localStorage.getItem(key);
    if (!item) return;
    return JSON.parse(item);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
