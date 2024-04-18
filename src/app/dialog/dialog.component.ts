import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  freshnesslist = ["Brand new" ,"Second hand" , "refurbished"];
  productForm!: FormGroup;

  constructor(private formbuilder :FormBuilder) { }

  ngOnInit(): void {

    this.productForm = this.formbuilder.group({

     productName : ['',Validators.required],
     category: ['',Validators.required],
     freshness : ['',Validators.required],
     price : ['',Validators.required],
     comment : ['',Validators.required],
     date : ['',Validators.required],
     




    })
  }
  
  onsave(){



    
  }






  

}
