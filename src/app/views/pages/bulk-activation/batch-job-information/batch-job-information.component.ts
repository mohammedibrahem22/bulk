import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-batch-job-information',
  templateUrl: './batch-job-information.component.html',
  styleUrls: ['./batch-job-information.component.scss']
})
export class BatchJobInformationComponent implements OnInit {

  runMode: any;
  firstRun: any;
  comments:any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  saveEntity(){
    // this.router.navigateByUrl("/bass/activation-activities/batch-job-information");
    console.log("form :", this.runMode, this.firstRun, this.comments);
    
  }
}
