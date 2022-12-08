import { Injectable } from '@angular/core';
import { TemporaryDataModel } from '../model/temporaryDataModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: Array<TemporaryDataModel> = [
    new TemporaryDataModel("Hello", "Hi", "How"),
    new TemporaryDataModel("Hello", "Hi", "How"),
    new TemporaryDataModel("Hello", "Hi", "How"),
    new TemporaryDataModel("Hello", "Hi", "How"),
    new TemporaryDataModel("Hello", "Hi", "How"),
    new TemporaryDataModel("Hello", "Hi", "How"),
    new TemporaryDataModel("Hello", "Hi", "How")
  ];

  constructor() { }

  public getData(): Array<TemporaryDataModel> {
    return this.data;
  }
}
