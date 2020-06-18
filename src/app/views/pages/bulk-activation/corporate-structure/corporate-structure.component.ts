import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiebelProduct } from '../model/siebel-product';
import { CorporateStructureInfo } from '../model/corporate-structure-info';

@Component({
  selector: 'kt-corporate-structure',
  templateUrl: './corporate-structure.component.html',
  styleUrls: ['./corporate-structure.component.scss']
})
export class CorporateStructureComponent implements OnInit {

  
  file: any;
  next: boolean = false;
  isUpload: boolean = false;
  disabled: boolean = true;
  fileName: string;
  
  displayDialog: boolean = false;
  siebelProduct: SiebelProduct = new SiebelProduct();
  corporateStructureInfo: CorporateStructureInfo = new CorporateStructureInfo();

  siebelOptions: SiebelProduct[] = [];
  
  constructor(private router: Router,
    ) { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('siebelOption'))){
      this.siebelOptions = JSON.parse(localStorage.getItem('siebelOption'));
    }

    if(JSON.parse(localStorage.getItem('corporateStructureInfo'))){
      this.corporateStructureInfo = JSON.parse(localStorage.getItem('corporateStructureInfo'));
    }
  }

  saveEntity(){
    this.router.navigateByUrl("/bass/activation-activities/batch-job-information");
    console.log("file :", this.corporateStructureInfo);
    localStorage.setItem('corporateStructureInfo', JSON.stringify(this.corporateStructureInfo));
    
  }

  onUpload(event) {
    for(let file of event.files) {
      // this.fileName = file.name;
        this.corporateStructureInfo.uploadedFiles.push(file);
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
