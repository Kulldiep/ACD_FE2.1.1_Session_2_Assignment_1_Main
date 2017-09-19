import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myName: string = "Kulldiep";

  firstName: string = "Sachin" ;    // Predefining firstName in View
  lastName: string = "Tendulkar" ;  // Predefining lastName in view
  age: number = 10;                   
  firstName11: string;              //Localized variable created


  //Fat Arrow Expression to return when user clicks on Click me button.
    add = (firstName1, age): string => this.firstName11 = firstName1 + " " + age;
  
  /*  Traditional method of declaring a function without =>
     { 
    
      this.firstName11 = firstName1 + " " + age;
        return this.firstName11;
      //console.log(this.firstName11);
    }*/
  

  
ngOnInit(){
 
 // this.age;
  this.add;
}


}

