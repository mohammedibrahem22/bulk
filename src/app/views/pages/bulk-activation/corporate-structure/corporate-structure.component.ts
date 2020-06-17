import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiebelProduct } from '../model/siebel-product';

@Component({
  selector: 'kt-corporate-structure',
  templateUrl: './corporate-structure.component.html',
  styleUrls: ['./corporate-structure.component.scss']
})
export class CorporateStructureComponent implements OnInit {

  uploadedFiles: any[] = [];
  file: any;
  next: boolean = false;
  isUpload: boolean = false;
  disabled: boolean = true;
  postProductiondial: boolean;
  displayDialog: boolean = false;
  siebelProduct: SiebelProduct = new SiebelProduct();

  siebelOptions: SiebelProduct[] = [];
  
  constructor(private router: Router,
    ) { }

  ngOnInit() {
  }

  saveEntity(){
    this.router.navigateByUrl("/bass/activation-activities/batch-job-information");
    // console.log("file :", this.uploadedFiles[0].name);
    
  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    this.isUpload = true;
}

showDialog() {
  this.displayDialog = true;
}

addDialogInfo() {
  // this.displayDialog = false;
  
  this.siebelOptions.push(this.siebelProduct);

  localStorage.setItem('siebelOption', JSON.stringify(this.siebelOptions));

  console.log("dialog", this.siebelOptions);
  console.log("dialog", this.siebelOptions.length);
  
}

}
