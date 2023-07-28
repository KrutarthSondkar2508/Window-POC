import * as BABYLON from 'babylonjs';
import { IBays } from './imodel/ibays';

export class BabylonModelData {

  //constructor() { }

  public lstBuildingMeshContainer: BABYLON.Mesh[] = new Array();
  public MeshContainerIndex: number;
  public Scene: BABYLON.Scene;
}
export class BayWidthReturnData {
  bay_widths: number[] = new Array();
  num_bays: number = 0;
  bays: IBays = new IBays();
}

