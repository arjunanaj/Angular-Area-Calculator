import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shapesvalues:string='';
  commonShapes:string='';
  Formula:string='SelectFormula';
  length:string='';
  breath:string='';
  height:string='';
  result:number=0;
  selectedimension(Shapes:string){
    this.commonShapes=Shapes;
  }


  Onselectdimension(selectedDimension:string){
    this.shapesvalues=selectedDimension;
  }
  OnselectFormula(selectedformula:string){
      this.Formula=selectedformula;
  }

  calculate(Length:string,Breath:string,Height:string,shapes:string,Formula:string){
    if(Formula=="Area"){
      if(shapes=="Triangle"){
       this.result=(parseInt(Breath)*parseInt(Height))*0.5;
       this.height='';
       this.breath='';
       this.Formula='SelectFormula';
      }
      if(shapes=="Square"){
        this.result=parseInt(Length)*parseInt(Length)
        this.length='';
        this.Formula='SelectFormula';
       }
       if(shapes=="Rectangle"){
        this.result=(parseInt(Length)*parseInt(Breath));
        this.length='';
        this.breath=''
        this.Formula='SelectFormula';
       }
    }
    if(Formula=="Perimeter"){
      if(shapes=="Triangle"){
       this.result=parseInt(Length)+parseInt(Breath)+parseInt(Height);
       this.length='';
       this.breath=''
       this.height=''
       this.Formula='SelectFormula';
      }
      if(shapes=="Square"){
        this.result=parseInt(Length)*4;
        this.length='';
        this.Formula='SelectFormula';
       }
       if(shapes=="Rectangle"){
        this.result=(parseInt(Length)*parseInt(Breath))*2;
        this.length='';
        this.breath=''
        this.Formula='SelectFormula';
       }
    }
    if(Formula=="Volumn"){
      if(shapes=="Cube"){
        this.result=parseInt(Length)*parseInt(Length)*parseInt(Length);
        this.length='';
        this.Formula='SelectFormula';
       }
       if(shapes=="Cuboid"){
        this.result=parseInt(Length)*parseInt(Breath)*parseInt(Height);
        this.length='';
        this.breath=''
        this.height=''
        this.Formula='SelectFormula';
       }
    }
    if(Formula=="SurfaceArea"){
      if(shapes=="Cube"){
          this.result=(parseInt(Length)*parseInt(Length))*6;
          this.length='';
          this.Formula='SelectFormula';
        }
      if(shapes=="Cuboid"){
          this.result=((parseInt(Length)*parseInt(Breath))+
          (parseInt(Breath)*parseInt(Height))+(parseInt(Height)*(parseInt(Length))))*2;
          this.length='';
          this.breath=''
          this.height=''
          this.Formula='SelectFormula';
        }
  
  }


  }
}
