import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  selectedshape:string='';
  TwoDshapes:string='2dShapes';
  ThreeDshapes:string='3dShapes';
  shapes:string='';
  formula:string='Formula';
  length:string='';
  breath:string='';
  height:string='';
  result:number=0;
  selectedimension(Shapes:string){
    this.shapes=Shapes;
    
  }


  Onselectdimension(selectedDimension:string){
    this.selectedshape=selectedDimension;
    if(selectedDimension=="Triangle"||selectedDimension=="Rectangle"||selectedDimension=="Square"){
      this.TwoDshapes=selectedDimension;
    }else{
      this.TwoDshapes= '2dShapes';
    }if(selectedDimension=="Cube"||selectedDimension=="Cuboid"){
      this.ThreeDshapes=selectedDimension;
    }else{
      this.ThreeDshapes= '3dShapes';
    }
  }
  OnselectFormula(selectedformula:string){
      this. formula=selectedformula;
  }

  calculate(Length:string,Breath:string,Height:string,shapes:string,Formula:string){
   
    if(Formula=="Area"){
      if(shapes=="Triangle"){
       this.result=(parseInt(Breath)*parseInt(Height))*0.5;
       this.height='';
       this.breath='';
       this. formula='Formula';
       this.selectedshape='';
       this. TwoDshapes='2dShapes';
      }
      if(shapes=="Square"){
        this.result=parseInt(Length)*parseInt(Length)
        this.length='';
        this. formula='Formula';
        this.selectedshape='';
        this. TwoDshapes='2dShapes';
       }
       if(shapes=="Rectangle"){
        this.result=(parseInt(Length)*parseInt(Breath));
        this.length='';
        this.breath=''
        this. formula='Formula';
        this.selectedshape='';
        this. TwoDshapes='2dShapes';
       }
    }
    if(Formula=="Perimeter"){
      if(shapes=="Triangle"){
       this.result=parseInt(Length)+parseInt(Breath)+parseInt(Height);
       this.length='';
       this.breath=''
       this.height=''
       this. formula='Formula';
       this. TwoDshapes='2dShapes';
       this.selectedshape='';
      }
      if(shapes=="Square"){
        this.result=parseInt(Length)*4;
        this.length='';
        this. formula='Formula';
        this.selectedshape='';
        this. TwoDshapes='2dShapes';
       }
       if(shapes=="Rectangle"){
        this.result=(parseInt(Length)*parseInt(Breath))*2;
        this.length='';
        this.breath=''
        this. formula='Formula';
        this.selectedshape='';
        this. TwoDshapes='2dShapes';
       }
    }
    if(Formula=="Volume"){
      if(shapes=="Cube"){
        this.result=parseInt(Length)*parseInt(Length)*parseInt(Length);
        this.length='';
        this. formula='Formula';
        this.selectedshape='';
        this.ThreeDshapes='3dShapes';
       }
       if(shapes=="Cuboid"){
        this.result=parseInt(Length)*parseInt(Breath)*parseInt(Height);
        this.length='';
        this.breath=''
        this.height=''
        this. formula='Formula';
        this.selectedshape='';
        this.ThreeDshapes='3dShapes';
       }
       if(shapes=="Sphere"){
        this.result=4.188*(parseInt(Length)*parseInt(Length)*parseInt(Length));
        this.length='';
        this. formula='Formula';
        this.selectedshape='';
        this.ThreeDshapes='3dShapes';
       }
    }
    if(Formula=="SurfaceArea"){
      if(shapes=="Cube"){
          this.result=(parseInt(Length)*parseInt(Length))*6;
          this.length='';
          this. formula='Formula';
          this.selectedshape='';
          this.ThreeDshapes='3dShapes';
        }
      if(shapes=="Cuboid"){
          this.result=((parseInt(Length)*parseInt(Breath))+
          (parseInt(Breath)*parseInt(Height))+(parseInt(Height)*(parseInt(Length))))*2;
          this.length='';
          this.breath=''
          this.height=''
          this. formula='Formula';
          this.selectedshape='';
          this.ThreeDshapes='3dShapes';
        }
        if(shapes=="Sphere"){
          this.result=12.566*(parseInt(Length)*parseInt(Length));
          this.length='';
          this. formula='Formula';
          this.selectedshape='';
          this.ThreeDshapes='3dShapes';
         }
         
  
  }


  }
}
