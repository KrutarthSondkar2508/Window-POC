import { Injectable } from '@angular/core';
import { Surface } from '../../models/QuickQuoteModel';

@Injectable({
  providedIn: 'root'
})



export class CommonBuildingService {

  private maxQuantityReferenceData: number = 5;
  private maxQuantityAllowed: number = 15;
  private quantityReferenceData: Array<NameValueReferenceData> = [];
  private yesNoReferenceData: Array<NameValueReferenceData> = [];
  private surfaceReferenceData: Array<NameValueReferenceData> = [];


  constructor() {
    for (let i = 0; i <= this.maxQuantityReferenceData; i++) {
      let name = (i == this.maxQuantityReferenceData) ? i.toString() + '+' : i.toString();
      let value = i.toString();
      this.quantityReferenceData.push({ "name": name, "value": value });
    }

    this.yesNoReferenceData.push({ "name": "No", "value": false.toString() });
    this.yesNoReferenceData.push({ "name": "Yes", "value": true.toString() });

    this.surfaceReferenceData.push({ "name": Surface.SWA, "value": Surface.SWA});
    this.surfaceReferenceData.push({ "name": Surface.SWC, "value": Surface.SWC});
    this.surfaceReferenceData.push({ "name": Surface.EWB, "value": Surface.EWB});
    this.surfaceReferenceData.push({ "name": Surface.EWD, "value": Surface.EWD});
  }
  getQuantityReferenceData(): Array<NameValueReferenceData> {
    return this.quantityReferenceData;
  }

  getYesNoReferenceData(): Array<NameValueReferenceData> {
    return this.yesNoReferenceData;
  }
  getMaxQuantityAllowed(): number {
    return this.maxQuantityAllowed;
  }
  getSurface(): Array<NameValueReferenceData> {
    return this.surfaceReferenceData;
  }
}

export class NameValueReferenceData {
  constructor(public name: string, public value: string) { }
}



