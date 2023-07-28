import { Injectable } from '@angular/core';
import { CoredataService } from '../../core/coredata.service';
import { CommonEnum } from '../../models/common-enum';

@Injectable({
  providedIn: 'root'
})
export class GeometryService {

  constructor(private coreData: CoredataService) { }

  GeometryDropdown(success, error) {
    this.coreData.Get(CommonEnum.QuickQuoteAPP, CommonEnum.QQHomeAPI + '/GetGeometryDropdown', null,
        (result) => {
          if (result != null) {
            return success(result);
          }
          return null;
        },
        (error) => {
          return error(error);
        });
  }

  getSideWallConfigurations(success, error) {

    this.coreData.Get(CommonEnum.GeometryAPI, CommonEnum.GetSidewallConfigurationsAPI, null, (result) => {
      if (result != null) {
        return success(result);
      }

    }
      , (error) => {
        return error(error);
      }
    );
  };
}
