import { EventEmitter, Injectable, Output } from '@angular/core';
import { CoredataService } from '../../core/coredata.service';
import { CodesLoadsParameter, Occupancy, ThermalFactor } from '../../models/building-input/loads';
import { CommonEnum } from '../../models/common-enum';
import { BuildingDesignCode } from '../../models/project-information/project-information';

@Injectable({
  providedIn: 'root'
})
export class ProjectInformationService {

  @Output() SelectedDesignCodeOutEmit: EventEmitter<string> = new EventEmitter();
  @Output() DesignCodeModelOutEmit: EventEmitter<BuildingDesignCode[]> = new EventEmitter();

  //lstBuildingDesignCodeList: BuildingDesignCode[];

  constructor(private coreData: CoredataService) { }

  validateProjectLocation(latitude: string, longitude: string, success, error) {
    const companyId = Number(sessionStorage.getItem('CompanyId'));
    const url = `${CommonEnum.ProjectInformationAPI}/ValidateLocation/${companyId}/${latitude}/${longitude}`;
    this.coreData.Get(CommonEnum.BuildingProjectAPP, url, null, (result) => {
      if (result != null) {
        return success(result);
      }
      return null;
    }, (error) => {
      return error(error);
    });
  }

  GetCountyBasedProvince(jobsiteState: string, success, error) {
    this.coreData.Get(CommonEnum.CodesLoadsAPP, CommonEnum.CodesLoadsAPI + "/GetCountyList/" + jobsiteState, null, (result) => {
      if (result != null) {
        return success(result);
      }
      return null;
    }, (error) => {
      return error(error);
    });
  }


  GetcodesAndLoads(latitude: string, longitude: string, country: string, state: string, isIntlJobsite: boolean, success, error) {
    this.coreData.Get(CommonEnum.CodesLoadsAPP, CommonEnum.CodesLoadsAPI + `/GetCodesAndLoads/${latitude}/${longitude}/${country}/${state}/${isIntlJobsite}`, null, (result) => {
      if (result != null) {
        return success(result);
      }
      return null;
    }, (error) => {
      return error(error);
    });
  }

  getLoadsDropdownData(modelCodesLoadsParameter: CodesLoadsParameter, success, error) {
    this.coreData.Post(CommonEnum.BuildingInputAPP, CommonEnum.LoadsAPI + '/CodesLoads', modelCodesLoadsParameter,
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


  selectedCodeEmitter(designCode) {
    this.SelectedDesignCodeOutEmit.emit(designCode);
  }
  designCodeModelEmitter(designCode) {
    this.DesignCodeModelOutEmit.emit(designCode);
  }

  getBuilderAcessPermissionById(builderaccessid, success, error) {
    this.coreData.Get(CommonEnum.SystemAPP, CommonEnum.BuilderPermissionAdministrationAPI + '/' + builderaccessid ,null,
      (result) => {
        if (result != null) {
          return success(result);
        }
        return null;
      },
      (error) => {
        return error(error);
      }
      );
  }
}
