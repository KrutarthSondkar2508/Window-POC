import { ElementRef, Injectable, NgZone } from '@angular/core';
import * as BABYLON from 'babylonjs';
import * as BABYLON_Material from 'babylonjs-materials';
import * as Babylon_ProceduralMaterial from 'babylonjs-procedural-textures';
import { BabylonModelData, BayWidthReturnData } from '../../models/3dModel/babylon-model';
import { BuildingAccessoriesEnum } from '../../models/3dModel/building-accessories.enum';
import { BuildingDrawingColor } from '../../models/3dModel/building-drawing-classes/building-drawing-color';
import { CDraw_Building } from '../../models/3dModel/building-drawing-classes/cdraw-building';
import { CFrame, ReturnData } from '../../models/3dModel/building-drawing-classes/cframe';
import { CGlobal } from '../../models/3dModel/building-drawing-classes/CGlobal';
import { CXBracing, FixedBaseBracingColumn } from '../../models/3dModel/building-drawing-classes/cxbracing';
import { BuildingDrawingEnum } from '../../models/3dModel/building-drawing.enum';
import { BuildingLayerEnum } from '../../models/3dModel/building-layer.enum';
import { IBuildingData } from '../../models/3dModel/ibuildingdata';
import { IBuildingGeometry } from '../../models/3dModel/imodel/ibuilding-geometry';
import { IEndwalls } from '../../models/3dModel/imodel/iendwalls';
import { WindowRefService } from './window-ref.service';
import * as MeshWriter from "meshwriter";
import { CalculationHelperService } from '../../services/common/calculation-helper.service';
import { CCanopy } from '../../models/3dModel/building-drawing-classes/ccanopy';
import { IBays } from '../../models/3dModel/imodel/ibays';
import { IBracing } from '../../models/3dModel/imodel/ibracing';
import { IFramelines } from '../../models/3dModel/imodel/iframelines';
import { IGroups } from '../../models/3dModel/imodel/igroups';
import * as earcut from "earcut";
import { BuildingGeometry } from '../../models/building-input/bracing';
import { materialize } from 'rxjs/operators';
import * as BABYLON_GUI from 'babylonjs-gui';
import { UpperCasePipe } from '@angular/common';
(window as any).earcut = earcut;

@Injectable({
  providedIn: 'root'
})
export class BuildingDrawingService {
 


  private rendererCanvas: ElementRef<HTMLCanvasElement>;
  private canvas: HTMLCanvasElement;
  private engine: BABYLON.Engine;
  private camera: BABYLON.ArcRotateCamera;
  private cameraViewBox: BABYLON.ArcRotateCamera;
  private scene: BABYLON.Scene;
  private light: BABYLON.Light;
  isDarkBackGround: boolean = false;
  buildingDrawingcolor: BuildingDrawingColor;
  public I_BuildingData: IBuildingData = new IBuildingData();
  private babylonModel: BabylonModelData = new BabylonModelData();
  Count: number = 0;
  oldlength: number;
  newLength: number;
  light1: BABYLON.HemisphericLight;
  materialStell:string = "../../../assets/Textuers/Pillar/Galvanized_steel_02_1K_Base_Color (2).jpg";
  constructor(private ngZone: NgZone,
    private windowRef: WindowRefService,
    private calculationHelper: CalculationHelperService
  ) { }
  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    //this.I_BuildingData = new IBuildingData();
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;
    // Then, load the Babylon 3D engine:
    this.engine = new BABYLON.Engine(this.canvas, true, { preserveDrawingBuffer: true, stencil: true, disableWebGL2Support: false });

    // create a basic BJS Scene object
    this.scene = new BABYLON.Scene(this.engine);

    //this.scene.clearColor = new BABYLON.Color4(0.2, 0.2, 0.3, 1)
    this.scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);
    this.scene.collisionsEnabled = true;

    this.camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 1.3, Math.PI / 3, 2512, new BABYLON.Vector3(0, 0, 0), this.scene);
    this.camera.attachControl(canvas, true);
    //far plan peoperties
    this.camera.maxZ = 100000;
    this.camera.inputs.addMouseWheel();
    this.camera.wheelPrecision = 0.2;
    // this.camera.lowerRadiusLimit = 1000;
    // this.camera.upperRadiusLimit = 5000;
    this.camera.zoomToMouseLocation = true;
    this.light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(-5, 5, 0), this.scene);
    this.light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(-5, 0, -5), this.scene);
    this.light1.intensity = 0.7;
    this.light.intensity = 0.3;


    var grid = {
      'h': 100,
      'w': 100
    };

    const ground = BABYLON.MeshBuilder.CreateTiledGround("Tiled Ground", { xmin: -10000, zmin: -10000, xmax: 15000, zmax: 15000, subdivisions: grid });
    var groundMaterial = new BABYLON.StandardMaterial("bawl", this.scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("https://cdn.sensei3d.com/static/media/grass.66806cc5.jpg", this.babylonModel.Scene);

    ground.material = groundMaterial;
    const verticesCount = ground.getTotalVertices();
    const tileIndicesLength = ground.getIndices().length / (grid.w * grid.h);

    // Set subMeshes of the tiled ground
    ground.subMeshes = [];
    let base = 0;
    for (let row = 0; row < grid.h; row++) {
      for (let col = 0; col < grid.w; col++) {
        ground.subMeshes.push(new BABYLON.SubMesh(row % 2 ^ col % 2, 0, verticesCount, base, tileIndicesLength, ground));
        base += tileIndicesLength;
      }
    }

    //var grassMesh = BABYLON_Material.FurMaterial.FurifyMesh(ground, 30);



    // Skybox
    //var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", 500, this.scene);
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 100000, this.scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", this.scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("../../../assets/img/textures/skybox", this.scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skybox.infiniteDistance = true;
    skyboxMaterial.disableLighting = true;
    skybox.renderingGroupId = 0;
    skybox.material = skyboxMaterial;

    this.camera.beta = Math.PI / 2.5;
    this.camera.upperBetaLimit = Math.PI / 2.1;

    this.camera._useCtrlForPanning = true;
   this.scene.debugLayer.show({ embedMode: true, enableClose: false });
  }

  public animate(): void {
    this.ngZone.runOutsideAngular(() => {
      const rendererLoopCallback = () => {
        this.scene.render();
      };

      if (this.windowRef.document.readyState !== 'loading') {
        this.engine.runRenderLoop(rendererLoopCallback);
      } else {
        this.windowRef.window.addEventListener('DOMContentLoaded', () => {
          this.engine.runRenderLoop(rendererLoopCallback);
        });
      }

      this.windowRef.window.addEventListener('resize', () => {
        this.engine.resize();
      });

    });

    this.scene.onPointerObservable.add(pointerInfo => {
      // switch (pointerInfo.type) {
      //   case BABYLON.PointerEventTypes.POINTERUP: // pointerdown
      //     const pickInfo = this.scene.pick(this.scene.pointerX, this.scene.pointerY)[]
      //     if (pickInfo.hit) {
      //     }
      //     break;
      //     case BABYLON.PointerEventTypes.POINTERUP: // pointerdown
      //     if (pickInfo.hit) {
      //     }
      //     break;
      // }
    }
    )
  }
  DrawBuilding(buildingNumber: number = 0) {
    console.log(this.I_BuildingData);
    this.I_BuildingData = this.CreateStaticBuildingList();
    let numOfTiers: number = 0;
    let isBraced: boolean = false;
    let buildingGlobals: CGlobal = new CGlobal();
    this.babylonModel.Scene = this.scene;
    let basepoint: BABYLON.Vector3 = new BABYLON.Vector3();
    //this.babylonModel.lstBuildingMeshContainer = [];
    let lstIBuildingGeometry: IBuildingGeometry[] = [];



    if (this.I_BuildingData.IBuildingGeometry != undefined && this.I_BuildingData.IBuildingGeometry != null) {

      if (buildingNumber > 0) {
        lstIBuildingGeometry = [...this.I_BuildingData.IBuildingGeometry?.filter(item => item?.BuildingNumber === buildingNumber)];
      } else {
        lstIBuildingGeometry = [...this.I_BuildingData.IBuildingGeometry];
      }


      lstIBuildingGeometry?.forEach((BuildingGeometry, index) => {
        //console.log("Draw currunt building :" + BuildingGeometry.BuildingName)
        //console.log("Start time:" + new Date().toTimeString())
        //Add Conatiner
        let buildingMesh = new BABYLON.Mesh(BuildingGeometry?.BuildingName, this.babylonModel.Scene);
        buildingMesh.id = BuildingGeometry?.BuildingNumber.toString();
        this.babylonModel.lstBuildingMeshContainer.push(buildingMesh);
        this.babylonModel.MeshContainerIndex = this.babylonModel.lstBuildingMeshContainer.findIndex(item => item.id === BuildingGeometry?.BuildingNumber.toString());
        //this.babylonModel.MeshContainerIndex = index;
        //this.babylonModel.lstBuildingMeshContainer[index].id = BuildingGeometry.BuildingNumber.toString();

        // set the 4 wall letters to the right oreintation
        buildingGlobals.SetWallLetters((BuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) ? true : false);
        // find out if we're dealing with a single slope and which is high side
        buildingGlobals.isSngSlp = (BuildingGeometry?.FrameType == BuildingDrawingEnum.ID_FRAME_SINGLE_SLOPE) ? true : false;
        buildingGlobals.isLeanto = (BuildingGeometry?.FrameType == BuildingDrawingEnum.ID_FRAME_LEANTO) ? true : false;

        if (buildingGlobals.isSngSlp || buildingGlobals.isLeanto) {
          buildingGlobals.isHighSideFront = (BuildingGeometry?.HighSideWall == buildingGlobals.frontLetter) ? true : false;
        }

        buildingGlobals.isLeantoOrSngSlpHighSideFront = ((buildingGlobals.isSngSlp || buildingGlobals.isLeanto) && BuildingGeometry?.HighSideWall == buildingGlobals.frontLetter) ? true : false;
        buildingGlobals.isLeantoOrSngSlpHighSideBack = ((buildingGlobals.isSngSlp || buildingGlobals.isLeanto) && BuildingGeometry?.HighSideWall == buildingGlobals.backLetter) ? true : false;

        // check for one-bay-hip
        var I_EndWalls: IEndwalls = this.I_BuildingData.IEndwalls?.find(endwall => endwall.BuildingNumber == BuildingGeometry?.BuildingNumber);
        if (I_EndWalls != undefined && I_EndWalls != null) {
          buildingGlobals.leftWallHip = (I_EndWalls?.Endwall3 == BuildingDrawingEnum.ID_ENDWALL_HIPPED);
          buildingGlobals.rightWallHip = (I_EndWalls?.Endwall4 == BuildingDrawingEnum.ID_ENDWALL_HIPPED);
        }
        // set roof slopes
        buildingGlobals.frontRoofSlope = Math.atan2(BuildingGeometry?.RoofSlope1, 12.0);
        buildingGlobals.backRoofSlope = Math.atan2(BuildingGeometry?.RoofSlope2, 12.0);

        // get the number of bays in this bldg
        buildingGlobals.numBaysFront = buildingGlobals.GetNumberOfBays(this.I_BuildingData.IBays, buildingGlobals.frontLetter, BuildingGeometry?.BuildingNumber);
        buildingGlobals.numBaysBack = buildingGlobals.GetNumberOfBays(this.I_BuildingData.IBays, buildingGlobals.backLetter, BuildingGeometry?.BuildingNumber);
        buildingGlobals.numBaysRight = buildingGlobals.GetNumberOfBays(this.I_BuildingData.IBays, buildingGlobals.rightLetter, BuildingGeometry?.BuildingNumber);
        buildingGlobals.numBaysLeft = buildingGlobals.GetNumberOfBays(this.I_BuildingData.IBays, buildingGlobals.leftLetter, BuildingGeometry?.BuildingNumber);

        // get the building number
        var currentBldgNumber: number = BuildingGeometry?.BuildingNumber;

        //*********** Draw Building Outline ************
        //**********************************************
        let leftEWPlaza: boolean = false; let rightEWPlaza: boolean = false;

        this.I_BuildingData.IEWPlaza?.filter(x => x.BuildingNumber == currentBldgNumber)?.forEach((ewplaza) => {
          if (ewplaza?.BuildingNumber == BuildingGeometry?.BuildingNumber) {
            if (BuildingGeometry?.ElevationA == BuildingDrawingEnum.ID_ENDWALL) {
              if (ewplaza?.Elevation == BuildingDrawingEnum.ID_WALL_A)
                leftEWPlaza = true;
              if (ewplaza?.Elevation == BuildingDrawingEnum.ID_WALL_C)
                rightEWPlaza = true;
            }
            else {
              if (ewplaza?.Elevation == BuildingDrawingEnum.ID_WALL_B)
                leftEWPlaza = true;
              if (ewplaza?.Elevation == BuildingDrawingEnum.ID_WALL_D)
                rightEWPlaza = true;
            }
            if (leftEWPlaza && rightEWPlaza)
              return;
          }
        });

        buildingGlobals.frontEaveHt = BuildingGeometry?.EaveHeight1;
        buildingGlobals.backEaveHt = BuildingGeometry?.EaveHeight2;

        //set building label and Building name 
        let textArch: BABYLON.Vector3 = new BABYLON.Vector3(12, 0, 12);
        var scale = 1;
        let Writer = new MeshWriter(this.scene, { scale: scale, defaultFont: "Arial" });

        // ***************** Draw Building Lable *************
        // *****************************************************

        if (this.scene.getNodes().find(x => x.name == "BuildingLabel " + BuildingGeometry?.BuildingName) != null)
          this.scene.getNodes().find(x => x.name == "BuildingLabel " + BuildingGeometry?.BuildingName).dispose();
        let text1 = new Writer(
          BuildingGeometry?.BuildingLabel + " - " + BuildingGeometry?.BuildingName,
          {
            anchor: "center",
            "letter-height": 5,
            colors: {
              diffuse: this.buildingDrawingcolor?.TextColor,
              specular: this.buildingDrawingcolor?.TextColor,
              ambient: this.buildingDrawingcolor?.TextColor,
              emissive: this.buildingDrawingcolor?.TextColor
            },
          }
        );
        let textMesh = text1.getMesh();
        textMesh.name = BuildingLayerEnum.BUILDINGLABEL;
        textMesh.id = BuildingLayerEnum.BUILDINGLABEL;
        textMesh.scaling = new BABYLON.Vector3(12, 0, 12);
        textMesh.position = new BABYLON.Vector3(textArch.x, textArch.z, textArch.y + 10);
        this.babylonModel.lstBuildingMeshContainer[this.babylonModel.MeshContainerIndex].addChild(text1.getMesh());


        let db: CDraw_Building = new CDraw_Building(buildingGlobals, this.isDarkBackGround, this.calculationHelper);

        db.Draw_Building(
          BuildingGeometry?.Length,
          BuildingGeometry?.Width,
          buildingGlobals.frontEaveHt,
          buildingGlobals.backEaveHt,
          BuildingGeometry?.DistToRidge1,
          BuildingGeometry?.PeakHeight,
          BuildingGeometry?.ElevationA,
          leftEWPlaza, rightEWPlaza,
          this.I_BuildingData.IBays,
          BuildingGeometry,
          this.babylonModel
        );
      });
    }
  }


  CreateStaticBuildingList(): IBuildingData {
    let I_BuildingData: IBuildingData = new IBuildingData();
    let IBays: IBays[] = [{ BuildingNumber: 1444, Elevation: 'A', BayNumber: 1, Width: 15 },
    { BuildingNumber: 1444, Elevation: 'A', BayNumber: 2, Width: 15 },
    { BuildingNumber: 1444, Elevation: 'C', BayNumber: 1, Width: 15 },
    { BuildingNumber: 1444, Elevation: 'C', BayNumber: 2, Width: 15 },
    { BuildingNumber: 1444, Elevation: 'B', BayNumber: 1, Width: 8 },
    { BuildingNumber: 1444, Elevation: 'B', BayNumber: 2, Width: 14 },
    { BuildingNumber: 1444, Elevation: 'B', BayNumber: 3, Width: 8 },
    { BuildingNumber: 1444, Elevation: 'D', BayNumber: 1, Width: 8 },
    { BuildingNumber: 1444, Elevation: 'D', BayNumber: 2, Width: 14 },
    { BuildingNumber: 1444, Elevation: 'D', BayNumber: 3, Width: 8 }];

    let IBracing: IBracing[] = [{ BuildingNumber: 1444, EW3BracingLocations: "1", EW3BracingType: "Rod", EW3PFrameHeight: 0, EW3PFrameType: 0, EW3Tiers: 1, EW4BracingLocations: "1", EW4BracingType: "Rod", EW4PFrameHeight: 0, EW4PFrameType: 0, EW4Tiers: 1, RoofBracingLocations: "1", RoofBracingType: "Rod", SW1BracingLocations: "1", SW1BracingType: "Rod", SW1FBBCRight: "", SW1PFrameHeight: 0, SW1PFrameType: 0, SW1Tiers: 1, SW2BracingLocations: "1", SW2BracingType: "Rod", SW2FBBCRight: "", SW2PFrameHeight: 0, SW2PFrameType: 0, SW2Tiers: 1 }]
    let IBuildingGeometry: IBuildingGeometry[] = [{ AttachmentOffset: 0, AttachmentWall: "", BaseElevation: 100, BuildingLabel: "A", BuildingName: "Building", BuildingNumber: 1444, BuildingType: "S", DistToRidge1: 15, DistToRidge2: 15, EaveHeight1: 10, EaveHeight2: 10, ElevationA: "Sidewall", FrameType: "Symmetrical", Length: 1, PeakHeight: 11.25, RoofSlope1: 1, RoofSlope2: 1, Width: 30, XCoordinate: 0, XDirection: "", XDistance: 0, YCoordinate: 0, YDirection: "", YDistance: 0, HighSideWall: "" }]
    let IEndwalls: IEndwalls[] = [{ BuildingNumber: 1444, ColSpacing3: "Custom", ColSpacing4: "Custom", Endwall3: "Bearing Frame", Endwall4: "Bearing Frame", GirtDepth3: 1, GirtDepth4: 1, GirtType3: 1, GirtType4: 1, SpecifiedSetback3: 1.1666666666666667, SpecifiedSetback4: 1.1666666666666667, OpenFor3: "", OpenFor4: "" }]
    let IFramelines: IFramelines[] = [{ BuildingNumber: 1444, FrameLineNumber: 2, GroupNumber: 1 }]
    let IGroups: IGroups[] = [{ BuildingNumber: 1444, ColType1: "Tapered", ColType2: "Tapered", ExtColRecession1: 0, ExtColRecession2: 0, GroupNumber: 1, IntColRecession: 0 }]
    I_BuildingData.IBays = [...IBays];
    I_BuildingData.IBracing = [...IBracing];
    I_BuildingData.IBuildingGeometry = [...IBuildingGeometry];
    I_BuildingData.IEndwalls = [...IEndwalls];
    I_BuildingData.IFramelines = [...IFramelines];
    I_BuildingData.IGroups = [...IGroups];
    return I_BuildingData;

  }
  DrawWindow(Windowlengh, WindowWidth, WindowDepth, texuturname: string = '123') {
    WindowWidth *= 12;
    Windowlengh *= 12;
    WindowDepth *= 12;


    let faceUV = [];
    faceUV[0] = new BABYLON.Vector4(1, 1, 0, 0);
    faceUV[1] = new BABYLON.Vector4(1, 0, 2, 1);
    faceUV[2] = new BABYLON.Vector4(0, 0, 0, 0);
    faceUV[3] = new BABYLON.Vector4(0, 0, 0, 0);
    faceUV[4] = new BABYLON.Vector4(0, 0, 0, 0);
    faceUV[4] = new BABYLON.Vector4(0, 0, 0, 0);


    if (this.scene.getMeshByName("Test"))
      this.scene.getMeshByName("Test").dispose(true, true);
    var conflictMesh = BABYLON.MeshBuilder.CreateBox("Test", { width: WindowWidth, height: Windowlengh, depth: WindowDepth, faceUV: faceUV }, this.scene);
    var mat = new BABYLON.StandardMaterial("RoofMat", this.scene);
    mat.diffuseTexture = new BABYLON.Texture("../../../assets/Window/" + texuturname + ".png", this.scene);
    conflictMesh.position = new BABYLON.Vector3(WindowWidth / 2, Windowlengh / 2, 0);
    mat.backFaceCulling = false;
    mat.diffuseTexture.level = 3
    mat.wireframe = false;
    conflictMesh.material = mat;
    var pointerDragBehavior: BABYLON.PointerDragBehavior = new BABYLON.PointerDragBehavior({
      dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
    });

    conflictMesh.addBehavior(pointerDragBehavior);

  }

  DrawBuildingCustom(length: number, width: number, hight: number, RoofSlop) {
    //Create a custom mesh 
    this.oldlength = this.newLength;
    this.CheckDeleteMesh();
    let Sidewall_A = new BABYLON.Mesh(Elevation.Sidewall_A, this.scene);
    let SideWall_C = new BABYLON.Mesh(Elevation.SideWall_C, this.scene);
    let Endwall_B = new BABYLON.Mesh(Elevation.Endwall_B, this.scene);
    let Endwall_D = new BABYLON.Mesh(Elevation.Endwall_D, this.scene);
    let Roof_A = new BABYLON.Mesh(Elevation.Roof_A, this.scene);
    let Roof_C = new BABYLON.Mesh(Elevation.Roof_C,this.scene);
    
    let RoofSlop_B = new BABYLON.Mesh(Elevation.RoofSlop_B, this.scene);
    let RoofSlop_D = new BABYLON.Mesh(Elevation.RoofSlop_D, this.scene);
    let Floor_R = new BABYLON.Mesh(Elevation.Floor_R, this.scene);
    length = length * 12;
    this.newLength = length * 12;
    width = width * 12;
    hight = hight * 12;
    RoofSlop *= 12;
    let SidewallA = [0, 0, 0, width, 0, 0, 0, hight, 0, width, hight, 0];
    let SidewallC = [0, 0, length, width, 0, length, 0, hight, length, width, hight, length];
    let EndwallB = [0, 0, 0, 0, 0, length, 0, hight, 0, 0, hight, length];
    let EndwallD = [width, 0, length, width, 0, 0, width, hight, length, width, hight, 0];
    let RoofA = [0, hight, 0, width / 2, hight + RoofSlop, 0, 0, hight, length, width / 2, hight + RoofSlop, length];
    let RoofA_Bay = [0, hight, 0, width / 2, hight + RoofSlop, 0, 0, hight+50, 0, width / 2, hight + RoofSlop + 50, 0];
    let RoofA_Bay1 = [0, hight, 0, width / 2, hight + RoofSlop, 0, 0, hight, 25, width / 2, hight + RoofSlop , 25];
    let RoofA_Bay2 = [0, hight+50, 0, width / 2, hight + RoofSlop+50, 0, 0, hight+50, 25, width / 2, hight + RoofSlop+50 , 25];
    let RoofC = [width, hight, 0,   width, hight, length, (width / 2), hight + RoofSlop, 0, (width / 2), hight + RoofSlop, length];
    // let RoofC_Bay = [width, hight, 0,   width, hight, 50, (width / 2), hight + RoofSlop, 0, (width / 2), hight + RoofSlop, 50];

    let RoofC_Bay = [width, hight, 0, width, hight+ 50, 0, (width / 2),  hight + RoofSlop, 0, (width / 2) , hight+ 50+ RoofSlop,0 ];
    let RoofC_Bay1 = [width, hight+50, 0, width, hight+50, 25, (width / 2),  hight+50 + RoofSlop, 0, (width / 2) , hight+50+ RoofSlop,25 ];
    let RoofC_Bay2 = [width, hight, 0, width, hight, 25, (width / 2),  hight + RoofSlop, 0, (width / 2) , hight+ RoofSlop,25 ];
    let uvs1 =  [0, 5, 0, 5, 0, 0, 0, 0,0];
    // let uvs0 = [0, 1, 0, 1, 0, 0, 0, 0,0];
    let indices = [0, 1, 2, 1, 2, 3];

    let RoofSlopB = [0, hight, 0, width, hight, 0, (width / 2), (hight + (RoofSlop)), 0];
    let RoofSlopD = [0, hight, length, (width / 2), (hight + (RoofSlop)), length, width, hight, length];
    let uvsRoofSlopD = [0, 5, 0, 0, 0, 5];
    let uvsRoofSlopB = [0, 0, 0, 0, 0, 5];
    let indicesRoofSlop = [0, 1, 2];

    // this.setvertexData(SidewallA, indices, uvs1, Sidewall_A)
    // Sidewall_A.material =  this.setMaterial("../../../assets/Textuers/Walls/horizantalTexture.404127a8.jpeg")

    // this.setvertexData(SidewallC, indices, uvs1, SideWall_C)
    // SideWall_C.material =  this.setMaterial("../../../assets/Textuers/Walls/horizantalTexture.404127a8.jpeg")

    // this.setvertexData(EndwallB, indices, uvs1, Endwall_B)
    // Endwall_B.material =  this.setMaterial("../../../assets/Textuers/Walls/horizantalTexture.404127a8.jpeg")

    // this.setvertexData(EndwallD, indices, uvs1, Endwall_D)
    // Endwall_D.material = this.setMaterial("../../../assets/Textuers/Walls/horizantalTexture.404127a8.jpeg")

    // this.setvertexData(RoofSlopB, indicesRoofSlop, uvsRoofSlopB, RoofSlop_B)
    // RoofSlop_B.material =  this.setMaterial("../../../assets/Textuers/Walls/horizantalTexture.404127a8.jpeg")

    // this.setvertexData(RoofSlopD, indicesRoofSlop, uvsRoofSlopD, RoofSlop_D)
    // RoofSlop_D.material =  this.setMaterial("../../../assets/Textuers/Walls/horizantalTexture.404127a8.jpeg")

    let uvsA = [0, 0, 7, 0, 0, 7, 0, 7, 0];

    // this.setvertexData(RoofA, indices, uvsA, Roof_A)
    // Roof_A.material =this.setMaterial("../../../assets/Textuers/Roofs/horizontal-panel.c0375f82.png")

    let uvsC = [7, 0, 7, 7, 0, 0, 7, 7, 7 ];
    // this.setvertexData(RoofC, indices, uvsC, Roof_C)
    // Roof_C.material =this.setMaterial("../../../assets/Textuers/Roofs/horizontal-panel.c0375f82.png")
   
    //for base
    this.CreateCommonPlane("base",{size:length*1.2,width:width*1.2},new BABYLON.Vector3(Math.PI / 2,0,0),new BABYLON.Vector3(width/2,3,length/2),"../../../assets/Textuers/Ground/patchy_cement1_Base_Color.jpg")

    //for upper side bays
    this.CreateCommonPlane("sideBay",{height:length,width:50},new BABYLON.Vector3(0,Math.PI/2,Math.PI/2),new BABYLON.Vector3(width + 50,hight - 10,length/2), this.materialStell)
    this.CreateCommonPlane("sideBay",{height:length,width:25},new BABYLON.Vector3( Math.PI / 2,Math.PI/2,Math.PI/2),new BABYLON.Vector3(width + 39, hight + 15,length/2), this.materialStell)
    this.CreateCommonPlane("sideBay",{height:length,width:25},new BABYLON.Vector3( Math.PI / 2,Math.PI/2,Math.PI/2),new BABYLON.Vector3(width + 39, hight - 35,length/2), this.materialStell)
    this.CreateCommonPlane("sideBay",{height:length,width:50},new BABYLON.Vector3(0,Math.PI/2,Math.PI/2),new BABYLON.Vector3(-37.5,hight - 10,length/2), this.materialStell)
    this.CreateCommonPlane("sideBay",{height:length,width:25},new BABYLON.Vector3( Math.PI / 2,Math.PI/2,Math.PI/2),new BABYLON.Vector3(-25, hight + 15,length/2), this.materialStell)
    this.CreateCommonPlane("sideBay",{height:length,width:25},new BABYLON.Vector3( Math.PI / 2,Math.PI/2,Math.PI/2),new BABYLON.Vector3(-25, hight - 35,length/2), this.materialStell)
    //end upper side bays
      
    //back middel bay
    this.CreateCommonPlane("MiidleBayback",{height:hight+RoofSlop,width:50},new BABYLON.Vector3(0,0,0),new BABYLON.Vector3((width/2), (hight + RoofSlop)/2 ,length), this.materialStell)
    this.CreateCommonPlane("MiidleBayback",{height:hight+RoofSlop,width:50},new BABYLON.Vector3(0,Math.PI / 2,0),new BABYLON.Vector3((width/2)+25, (hight + RoofSlop)/2 , length-12.5), this.materialStell)
    this.CreateCommonPlane("MiidleBayback",{height:hight+RoofSlop,width:25},new BABYLON.Vector3(0,Math.PI / 2,0),new BABYLON.Vector3((width/2)-25, (hight + RoofSlop)/2 , length-12.5), this.materialStell)
      
      
    //front middle bay   
    this.CreateCommonPlane("MiidleBayfront",{height:hight+RoofSlop,width:50},new BABYLON.Vector3(0,0,0),new BABYLON.Vector3((width/2), (hight + RoofSlop)/2 , 0), this.materialStell)
    this.CreateCommonPlane("MiidleBayfront",{height:hight+RoofSlop,width:25},new BABYLON.Vector3(0, Math.PI / 2,0),new BABYLON.Vector3((width/2)+25, (hight + RoofSlop)/2 , -12.5), this.materialStell)
    this.CreateCommonPlane("MiidleBayfront",{height:hight+RoofSlop,width:25},new BABYLON.Vector3(0, Math.PI / 2,0),new BABYLON.Vector3((width/2)-25, (hight + RoofSlop)/2 , -12.5), this.materialStell)
      
      
         let box3= [];
         let box4= [];
         let box5= [];
         let Roof_C_Bay = [];
         let Roof_C_Bay1 = [];
         let Roof_C_Bay2 = [];
         let Roof_A_Bay = [];
         let Roof_A_Bay1 = [];
         let Roof_A_Bay2 = [];
  for(let i=0 ; i<=Math.round(length/300)+1;i++){
           //for upperbays
    this.CreateCommonPlane("bays",{height:hight,width:50},new BABYLON.Vector3(0,0,0),new BABYLON.Vector3(13,hight/2 ,(length/((length/300)+1)) * i), this.materialStell)
    this.CreateCommonPlane("bays",{height:hight,width:25},new BABYLON.Vector3(0, Math.PI / 2,0),new BABYLON.Vector3(-12,hight/2 ,((length/((length/300)+1)) * i)-12.5), this.materialStell)
    this.CreateCommonPlane("bays",{height:hight,width:25},new BABYLON.Vector3(0, Math.PI / 2,0),new BABYLON.Vector3(38,hight/2 ,((length/((length/300)+1)) * i)-12.5), this.materialStell)
        
    this.CreateCommonPlane("bays",{height:hight,width:50},new BABYLON.Vector3(0,0,0),new BABYLON.Vector3(width,hight/2 ,((length/((length/300)+1)) * i)), this.materialStell)
    this.CreateCommonPlane("bays",{height:hight,width:25},new BABYLON.Vector3(0,Math.PI / 2,0),new BABYLON.Vector3(width-25,hight/2 ,((length/((length/300)+1)) * i) - 12.5), this.materialStell)
    this.CreateCommonPlane("bays",{height:hight,width:25},new BABYLON.Vector3(0,Math.PI / 2,0),new BABYLON.Vector3(width+25,hight/2 ,((length/((length/300)+1)) * i) - 12.5), this.materialStell)
          //end Upper bays
        
          //for upper roof
    this.CreateUpperBays("upperroofBay1",RoofC_Bay, indices,uvsC,new BABYLON.Vector3(0,0,(length/((length/300)+1)) * i), this.materialStell)
    this.CreateUpperBays("upperroofBay1",RoofC_Bay1, indices,uvsC,new BABYLON.Vector3(0,0,(length/(((length/300)+1)) * i)-25), this.materialStell)
    this.CreateUpperBays("upperroofBay1",RoofC_Bay2, indices,uvsC,new BABYLON.Vector3(0,0,(length/(((length/300)+1)) * i)-25), this.materialStell)
    
    this.CreateUpperBays("upperroofBay2",RoofA_Bay, indices,uvsA,new BABYLON.Vector3(0,0,(length/(((length/300)+1)) * i)), this.materialStell)
    this.CreateUpperBays("upperroofBay2",RoofA_Bay1, indices,uvsA,new BABYLON.Vector3(0,0,(length/(((length/300)+1)) * i)-25), this.materialStell)
    this.CreateUpperBays("upperroofBay2",RoofA_Bay2, indices,uvsA,new BABYLON.Vector3(0,0,(length/(((length/300)+1)) * i)-25), this.materialStell)
      //end upper roof
     }
  }
  CreateUpperBays(name: string, RoofC_Bay: any[], indices: number[], uvsC: number[], position: BABYLON.Vector3, materialStell: string) {
    let RoofBay = BABYLON.CreatePlane(name,{} ,this.scene);
      this.setvertexData(RoofC_Bay, indices, uvsC, RoofBay);
      RoofBay.position = position;
      RoofBay.material = this.setMaterial(materialStell);
  }

  CreateCommonPlane(name:string,options: any, roatation,position,material ) {
    let Bays = BABYLON.CreatePlane(name,options,this.scene);
    Bays.rotation = roatation;
    Bays.position = position;
    Bays.material = this.setMaterial(material);
  }
  

  CheckDeleteMesh() {

 
    for(let i=0;i<=Math.round(this.oldlength/300)+1;i++){
    if (this.scene.getMeshByName(Elevation.upperroofBay1))
         this.scene.getMeshByName(Elevation.upperroofBay1).dispose(true, true);
    if (this.scene.getMeshByName(Elevation.upperroofBay2))
         this.scene.getMeshByName(Elevation.upperroofBay2).dispose(true, true);
    if (this.scene.getMeshByName(Elevation.MiidleBayfront))
         this.scene.getMeshByName(Elevation.MiidleBayfront).dispose(true, true);
    if (this.scene.getMeshByName(Elevation.MiidleBayback))
         this.scene.getMeshByName(Elevation.MiidleBayback).dispose(true, true);
    if (this.scene.getMeshByName(Elevation.sideBay))
         this.scene.getMeshByName(Elevation.sideBay).dispose(true, true);     
    if (this.scene.getMeshByName(Elevation.Bay))
         this.scene.getMeshByName(Elevation.Bay).dispose(true, true);     
    }


    if (this.scene.getMeshByName(Elevation.Sidewall_A))
      this.scene.getMeshByName(Elevation.Sidewall_A).dispose(true, true);
    if (this.scene.getMeshByName(Elevation.Base))
      this.scene.getMeshByName(Elevation.Base).dispose(true, true);

    if (this.scene.getMeshByName(Elevation.SideWall_C))
      this.scene.getMeshByName(Elevation.SideWall_C).dispose(true, true);

    if (this.scene.getMeshByName(Elevation.Endwall_B))
      this.scene.getMeshByName(Elevation.Endwall_B).dispose(true, true);

    if (this.scene.getMeshByName(Elevation.Endwall_D))
      this.scene.getMeshByName(Elevation.Endwall_D).dispose(true, true);

    if (this.scene.getMeshByName(Elevation.Roof_A))
      this.scene.getMeshByName(Elevation.Roof_A).dispose(true, true);

    if (this.scene.getMeshByName(Elevation.Roof_C))
      this.scene.getMeshByName(Elevation.Roof_C).dispose(true, true);

    if (this.scene.getMeshByName(Elevation.RoofSlop_B))
      this.scene.getMeshByName(Elevation.RoofSlop_B).dispose(true, true);

    if (this.scene.getMeshByName(Elevation.RoofSlop_D))
      this.scene.getMeshByName(Elevation.RoofSlop_D).dispose(true, true);

    if (this.scene.getMeshByName(Elevation.Floor_R))
      this.scene.getMeshByName(Elevation.Floor_R).dispose(true, true);
    
    
  

  }
  setvertexData(Sidewall1: number[], indicesSidewall1: number[], uvs1: number[], mesh: BABYLON.Mesh) {
    var vertexData = new BABYLON.VertexData();
    vertexData.positions = [...Sidewall1];
    vertexData.indices = [...indicesSidewall1];
    vertexData.uvs = [...uvs1];
    vertexData.applyToMesh(mesh, true);
  }
  setMaterial(path: string) {
    var mat = new BABYLON.StandardMaterial("", this.scene);
    mat.diffuseTexture = new BABYLON.Texture(path, this.scene);
    mat.backFaceCulling = false
    mat.diffuseTexture.level = 1.5;
    mat.sideOrientation = BABYLON.Mesh.FRONTSIDE;
    return mat;
  }
  showAxis(size) {
    let makeTextPlane = function (text, color, size) {
      let dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, this.scene);
      dynamicTexture.hasAlpha = true;
      dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color, "transparent", true);
      let plane = BABYLON.Mesh.CreatePlane("TextPlane", size, this.scene);
      let material = new BABYLON.StandardMaterial("TextPlaneMaterial", this.scene);
      material.backFaceCulling = false;
      material.specularColor = new BABYLON.Color3(0, 0, 0);
      material.diffuseTexture = dynamicTexture;
      plane.material = material;
      return plane;
    };

    let axisX = BABYLON.Mesh.CreateLines("axisX", [
      new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
      new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
    ], this.scene, false);
    axisX.color = new BABYLON.Color3(1, 0, 0);
    let xChar = makeTextPlane("X", "red", size / 10);
    xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);



    // let axisY = BABYLON.Mesh.CreateLines("axisY", [
    //   new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
    //   new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(0.05 * size, size * 0.95, 0)
    // ], this.scene, false);
    // axisY.color = new BABYLON.Color3(1, 0, 0);
    // let yChar = makeTextPlane("Y", "red", size / 10);
    // yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);


    
    // let axisZ = BABYLON.Mesh.CreateLines("axisZ", [
    //   new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
    //   new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, 0.05 * size, size * 0.95)
    // ], this.scene, false);
    // axisZ.color = new BABYLON.Color3(1, 0, 0);
    // let zChar = makeTextPlane("Z", "red", size / 10);
    // zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
  };

  SideWall1(Windowlengh: number, WindowWidth: number, windowName: string, windowColor: string) {
    Windowlengh *= 12;
    WindowWidth *= 12;
    //Sidwalllength *= 12;
    //SideWallWidth *= 12;
    //SidewallHigth *= 12;
    let faceUV = [];
    faceUV[0] = new BABYLON.Vector4(1, 1, 0, 0);
    faceUV[1] = new BABYLON.Vector4(1, 0, 2, 1);
    faceUV[2] = new BABYLON.Vector4(0, 0, 0, 0);
    faceUV[3] = new BABYLON.Vector4(0, 0, 0, 0);
    faceUV[4] = new BABYLON.Vector4(0, 0, 0, 0);
    faceUV[4] = new BABYLON.Vector4(0, 0, 0, 0);

    //Count = 0;
    var spheres = []
    var conflictMesh = BABYLON.MeshBuilder.CreateBox(windowName.split(".")[0] + "_" + this.Count, { width: WindowWidth, height: Windowlengh, depth: 12, faceUV: faceUV }, this.scene);
    var mat = new BABYLON.StandardMaterial("RoofMat", this.scene);
    mat.diffuseTexture = new BABYLON.Texture("../../../assets/Window/" + windowColor + "/" + windowName, this.scene);
    mat.backFaceCulling = false;
    conflictMesh.material = mat;
    conflictMesh.position = new BABYLON.Vector3(Windowlengh / 2, (WindowWidth / 2), 0);
    // conflictMesh.showBoundingBox=true;
    // this.scene.getBoundingBoxRenderer().frontColor.set(0, 1, 0);
    //this.scene.getBoundingBoxRenderer().backColor.set(1, 0, 0);
    spheres.push(conflictMesh);
    this.setLimitDragging(windowName.split(".")[0] + "_" + this.Count, spheres);
    //this.CreateDiv(conflictMesh,conflictMesh.position)
    this.Count++;
  }
  

  setLimitDragging(meshName: string, spheres) {

    // Initialize GizmoManager
    // var gizmoManager = new BABYLON.GizmoManager(this.scene)
    // gizmoManager.boundingBoxGizmoEnabled=true
    // // Restrict gizmos to only spheres
    // gizmoManager.attachableMeshes =spheres;
    const dragBehavior = new BABYLON.PointerDragBehavior({ dragPlaneNormal: new BABYLON.Vector3(0, 0, 1) })
    this.scene.getMeshByName(meshName).addBehavior(dragBehavior)
    this.scene.onPointerObservable.add(pointerInfo => {
      switch (pointerInfo.type) {
        case 1: // pointerdown
          const pickInfo = this.scene.pick(this.scene.pointerX, this.scene.pointerY)
          if (pickInfo.hit && pickInfo.pickedMesh.id === meshName) {
            dragBehavior.useObjectOrientationForDragging = false;
            dragBehavior.validateDrag = (targetPosition) => this.scene.getMeshByName(Elevation.Sidewall_A).intersectsPoint(targetPosition);
            //this.setDragValidation(dragBehavior)
          }

          break
      }
    })
  }
  SetTextBolorPicker(value: string) {
    this.scene.getActiveMeshes().forEach(mesh => {
      if (mesh.name.includes("Window")) {
        let meshname: string[] = mesh.name.split("_");
        meshname.pop();
        mesh.material.dispose(true, true);
        mesh.material = this.setMaterial('../../../assets/Window/' + value + '/' + meshname.join("_") + '.png');
      }
    });
  }

  CreateDiv(meshName: BABYLON.Mesh, position: BABYLON.Vector3) {
    // GUI
    var advancedTexture = BABYLON_GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var button1 = BABYLON_GUI.Button.CreateSimpleButton(meshName.name, "DELETE");
    button1.width = "100px"
    button1.height = "40px";
    button1.color = "white";
    button1.cornerRadius = 20;
    button1.background = "green";
    button1.onPointerUpObservable.add(function() {
        alert("you did it!");
    });
    advancedTexture.addControl(button1);    
  }
}
export enum Elevation {
  Sidewall_A = "SideWall_A",
  SideWall_C = "SideWall_C",
  Endwall_B = "Endwall_B",
  Endwall_D = "Endwall_D",
  Roof_A = "Roof_A",
  Roof_C = "Roof_C",
  RoofSlop_B = "RoofSlop_B",
  RoofSlop_D = "RoofSlop_D",
  Floor_R = "Floor",
  upperroofBay1 = "upperroofBay1",
  upperroofBay2 = "upperroofBay2",
  Base = "base",
  MiidleBayfront = "MiidleBayfront",
  MiidleBayback = "MiidleBayback",
  sideBay = "sideBay",
  Bay = "bays",
}