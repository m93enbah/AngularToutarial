export class Process {
    constructor()
    {
        this.ProcessSteps = new Array<ProcessSteps>();
    }
    Id:number;
    Name:string;
    Desc:string;
    ProcessSteps:Array<ProcessSteps>;
}



export class ProcessSteps
{
    constructor()
    {
        this.ParentObjects = new Array<ParentShape>();

    }
    Id:number;
    Step_ID:number;
    Process_ID:number;
    Name:string;
    ShapeType:number;
    SwimlaneID:number; 
    x:number;
    y:number;

    Width:number;
    Height:number;
    Prop1:string ;
    Prop2:string;

    ParentObjects:Array<ParentShape>;  
}



export class ParentShape
{
    Id:number;
    ShapeID:number;
    ParentShape_ID:number;
    ProcessSteps_ID:number;
    Process_ID:number;
    EdgeDesc:string;
}



export enum ShapeTypes
{
    swimlane = 1,
    start = 2,
    end = 3,
    process = 4,
    condition = 5,
    arrow = 6,
    crossover = 7
}