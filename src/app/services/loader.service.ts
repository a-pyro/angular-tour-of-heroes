import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  #loading = false;

  constructor() {}

  getLoading() {
    return this.#loading;
  }

  setLoading(value: boolean) {
    this.#loading = value;
  }
}
