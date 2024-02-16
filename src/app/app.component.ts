import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'table';

   firstname ="babita"
   lastname = "chaturvedi"


   // array of object 
   memberData  = [


    
    {name:"babita" ,email :"baita@gmail.com"},
    {name:"kuttu" ,email :"kuttu@gmail.com"},
    {name:"neelam" ,email :"neelam@gmail.com"},
    {name:"shivanand" ,email :"shivanand@gmail.com"},
    {name:"swaraj" ,email :"swaraj@gmail.com"},
    {name:"xyc" ,email :"xyc@gmail.com"}

     
   ]





}
