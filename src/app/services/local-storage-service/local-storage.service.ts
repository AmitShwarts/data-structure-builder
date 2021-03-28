import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // https://firstclassjs.com/persist-data-using-local-storage-and-angular/
  private m_LocalStorage: Storage;
  private m_Changes$ = new Subject();

  constructor() {
    this.m_LocalStorage = window.localStorage;
  }
  public Get(i_Key: string): any {
    if (this.IsLocalStorageSupported) {
      const jsonData = this.m_LocalStorage.getItem(i_Key);

      if (jsonData !== null) {
        return JSON.parse(jsonData);
      }
    }
    return null;
  }
  public Set(i_Key: string, i_Value: any): boolean {
    if (this.IsLocalStorageSupported) {
      this.m_LocalStorage.setItem(i_Key, i_Value);

      this.m_Changes$.next({
        type: 'set',
        key: i_Key,
        value: i_Value
      });
      return true;
    }
    return false;
  }
  public Remove(i_Key: string): boolean {
    if (this.IsLocalStorageSupported) {
      const val = this.Get(i_Key);

      this.m_LocalStorage.removeItem(i_Key);
      this.m_Changes$.next({
        type: 'remove',
        key: i_Key,
        value: val
      });
      return true;
    }
    return false;
  }
  get IsLocalStorageSupported(): boolean {
    return !!this.m_LocalStorage;
  }
  public Osbserve(): Subject<unknown> {
    return this.m_Changes$;
  }
}
