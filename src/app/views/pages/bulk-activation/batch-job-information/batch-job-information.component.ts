import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiebelProduct } from '../model/siebel-product';

@Component({
  selector: 'kt-batch-job-information',
  templateUrl: './batch-job-information.component.html',
  styleUrls: ['./batch-job-information.component.scss']
})
export class BatchJobInformationComponent implements OnInit {

  runMode: any;
  firstRun: any;
  comments:any;
  showOptionsDialog: boolean = false;

  siebelOptions: SiebelProduct[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('siebelOption'))){
      this.siebelOptions = JSON.parse(localStorage.getItem('siebelOption'));
    }

    console.log("siebelOptions :",  this.siebelOptions);
    
  }

  saveEntity(){
    // this.router.navigateByUrl("/bass/activation-activities/batch-job-information");
    console.log("form :", this.runMode, this.firstRun, this.comments);
    
  }

  showOption(){
    this.showOptionsDialog = true;
  }

  deleteOption(option, i){
    console.log(option, i);
    console.log("indix", i);

    this.siebelOptions.splice(i, 1);
    localStorage.setItem("siebelOption", JSON.stringify(this.siebelOptions));

    
  }
}
