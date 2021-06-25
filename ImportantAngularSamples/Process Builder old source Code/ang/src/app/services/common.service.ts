import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProcessSteps, Process, ParentShape, ShapeTypes } from '../components/models/process';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private messageService: MessageService, private httpClient: HttpClient, public fb: FormBuilder) { }

	selectedStep: ProcessSteps = new ProcessSteps();
	proc: Process = new Process();
	graph: any;
	parent: any;
	cell: any;
	selectedEdge: ParentShape = new ParentShape();
	currentState: any;
	dragElt: any;
  
  resetForm(formGroup: FormGroup) {
    formGroup.reset();
    this.messageService.clear();
  }

  DeleteSwapedEdge(s1: number) {

    const index = this.proc.ProcessSteps.findIndex((e) => e.Step_ID == s1);
    var res = this.proc.ProcessSteps.find((e) => e.Step_ID == s1);
    const parentIndex = res.ParentObjects.findIndex(i => i.ShapeID == s1);
   // this.proc.ProcessSteps[index].ParentObjects[parentIndex]

    this.proc.ProcessSteps[index].ParentObjects.splice(parentIndex, 1);
    this.selectedEdge = new ParentShape();
  }

  getShapeTypeValue(shapeType:string)
	{
		if(shapeType == ShapeTypes[ShapeTypes.swimlane])
		{
		   return ShapeTypes.swimlane;
		}
		else if(shapeType == ShapeTypes[ShapeTypes.start])
		{
			return ShapeTypes.start;
		}
		else if(shapeType == ShapeTypes[ShapeTypes.end])
		{
			return ShapeTypes.end;
		}
		else if(shapeType == ShapeTypes[ShapeTypes.process])
		{
			return ShapeTypes.process;
		}
		else if(shapeType == ShapeTypes[ShapeTypes.condition])
		{
			return ShapeTypes.condition;
		}
  }
  
  DeleteEdge(s1: ParentShape) {
    const index = this.proc.ProcessSteps.findIndex((e) => e.Step_ID == s1.ShapeID);
    var res = this.proc.ProcessSteps.find((e) => e.Step_ID == s1.ShapeID);
    const parentIndex = res.ParentObjects.findIndex(i => i.ShapeID == s1.ShapeID
        && i.ParentShape_ID == s1.ParentShape_ID
        && i.Process_ID == s1.Process_ID);
   // this.proc.ProcessSteps[index].ParentObjects[parentIndex]

    this.proc.ProcessSteps[index].ParentObjects.splice(parentIndex, 1);
    this.selectedEdge = new ParentShape();
}
  
updateEdge(s1: ParentShape) {
  debugger;
  const index = this.proc.ProcessSteps.findIndex((e) => e.Step_ID == s1.ShapeID);
  var res = this.proc.ProcessSteps.find((e) => e.Step_ID == s1.ShapeID);
  const parentIndex = res.ParentObjects.findIndex(i => i.ShapeID == s1.ShapeID
    && i.ParentShape_ID == s1.ParentShape_ID
    && i.Process_ID == s1.Process_ID);
  this.proc.ProcessSteps[index].ParentObjects[parentIndex].EdgeDesc = s1.EdgeDesc;
}

pushToArray(obj: ProcessSteps) {
  const index = this.proc.ProcessSteps.findIndex((e) => e.Step_ID == obj.Step_ID);
  if (index === -1) {
    this.proc.ProcessSteps.push(obj);
  } else {
    this.proc.ProcessSteps[index] = obj;
  }
}

setSelectedCellValue(cell: any) {

  if (cell != null) {
    if (cell.vertex == true) {
      this.selectedStep = new ProcessSteps();
      this.selectedStep.Step_ID = parseInt(cell.id);
      this.selectedStep.Name = cell.value;
      this.selectedStep.ShapeType = this.getShapeTypeValue(cell.style);
      this.selectedStep.x = cell.geometry.x;
      this.selectedStep.y = cell.geometry.y;
      this.selectedStep.Width = cell.geometry.width;
      this.selectedStep.Height = cell.geometry.height;
      this.selectedStep.Process_ID = this.proc.Id
  
      //If the selected shape is not swimlane then we put the vertex  swimlane ID = ID of the swimlane object
      if (this.selectedStep.ShapeType != ShapeTypes.swimlane) {
        this.selectedStep.SwimlaneID = parseInt(cell.parent.id);
      }
      else {
        this.selectedStep.SwimlaneID = null;
      }
  
     if(this.proc.ProcessSteps.find(obj => obj.Step_ID == this.selectedStep.Step_ID) != null)
     {
      this.selectedStep.ParentObjects = this.proc.ProcessSteps.find(obj => obj.Step_ID == this.selectedStep.Step_ID).ParentObjects;
      this.selectedStep.Prop1 = this.proc.ProcessSteps.find(obj => obj.Step_ID == this.selectedStep.Step_ID).Prop1;
      this.selectedStep.Prop2 = this.proc.ProcessSteps.find(obj => obj.Step_ID == this.selectedStep.Step_ID).Prop2;
    }
      //This part is used for update the process object
      const index = this.proc.ProcessSteps.findIndex((e) => e.Step_ID == this.selectedStep.Step_ID);
      if(index >= 0)
      {
        this.proc.ProcessSteps[index] = this.selectedStep;
      }
     
    }
  }
}

}
