import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BuildingDrawingService } from '../services/3ddrawing/building-drawing.service';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class BuildingDrawingComponent implements OnInit {

  //3D Model Related
  @ViewChild('3DCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  //@Input() isFromPricing: boolean = false;
  constructor(private buildingDrawingService: BuildingDrawingService) { }

  ngOnInit(): void {
    //3D 
    this.buildingDrawingService.createScene(this.rendererCanvas);
    this.buildingDrawingService.animate();
    //this.buildingDrawingService.DrawWindow(20,15,0.01);

    // this.buildingDrawingService.DrawBuilding();
    this.buildingDrawingService.DrawBuildingCustom(100,100,50,20);
    //  this.buildingDrawingService.showAxis(200*120);
  }

}
