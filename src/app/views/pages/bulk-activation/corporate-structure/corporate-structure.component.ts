import { Component, OnInit } from '@angular/core';

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
  checkboxFlag: boolean;
  displayDialog: boolean = false;
  group: string;
  siebelProducts: any;
  duration: any;
  extraQuota: any;
  constructor() { }

  ngOnInit() {
  }

  saveEntity(){
    console.log("file :", this.uploadedFiles[0].name);
    
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
  this.displayDialog = false;
}

}
