import { Component } from '@angular/core';
import { BuildingDrawingService } from './services/3ddrawing/building-drawing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ABS-Quick-Quote';
  ProductGroup: string;
  Product: string;
  GrillType: string;
  GrillTypePettrn: string;
  BuildingLength:number=100;
  BuildingWidth:number=150;
  BuildingHeigth:number=50;
  BuildingSlop:number=30;
  WindowColor:string='Mist';
  constructor(private buildingDrawingService: BuildingDrawingService) { }
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
  onChangeProducrGroup(event: string) {
    this.ProductGroup = event;
    if (this.ProductGroup == "Single_Slider")
      this.onChangeWindow(this.ProductGroup)
  }
  onChangeProduct(event: string) {
    this.Product = event;
    if (this.Product == "Single_Slider")
      this.onChangeWindow(this.Product)
    else if (this.Product == "Triple_Slider")
      this.onChangeWindow(this.Product)

  }
  onChangeGrillType(event: string) {
    this.GrillType = event;
    if (this.Product == "Single_Slider")
      this.onChangeWindow(this.GrillType)
    else if (this.Product == "Triple_Slider")
      this.onChangeWindow(this.GrillType)

  }
  onChangeGrillTypePettern() {
    if (this.Product == "Single_Slider")
    this.onChangeWindow(this.Product+'_Grill')
  else if (this.Product == "Triple_Slider")
    this.onChangeWindow(this.Product+'_Grill')
  }
  onChangeWindow(event: string = '123') {
    this.buildingDrawingService.SideWall1(30, 20, event+".png",this.WindowColor);
  }
  LengthChange(value){
    this.BuildingLength=+value;
    this.DrawBuilding();
  }
  WidthChange(value){
    this.BuildingWidth= +value;
    this.DrawBuilding();
    
  }
  HeigthChange(value){
    this.BuildingHeigth= +value;
    this.DrawBuilding();
  }
  SlopChange(value){
    this.BuildingSlop=+value;
    this.DrawBuilding();
  }
  DrawBuilding(){
    this.buildingDrawingService.DrawBuildingCustom(this.BuildingLength,this.BuildingWidth,this.BuildingHeigth,this.BuildingSlop);
  }
  imageClick(value){
    this.buildingDrawingService.SideWall1(30, 20,value+".png",this.WindowColor);
  }
  colorPicker(value:string){
    this.WindowColor=value
    this.buildingDrawingService.SetTextBolorPicker(this.WindowColor);
  }


}
