import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactInformation } from '../model/contact-information';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-activation-activities',
  templateUrl: './activation-activities.component.html',
  styleUrls: ['./activation-activities.component.scss']
})
export class ActivationActivitiesComponent implements OnInit {

  contactInfoForm: FormGroup;
  contactInformation: ContactInformation;
  checkboxFlag: boolean;
  uploadedFiles: any[] = [];
  file: any;
  next: boolean = false;
  isUpload: boolean = false;

  constructor(private contactInfoFB: FormBuilder,
             private router: Router,

  ) { }

  ngOnInit() {
    this.contactInformation = new ContactInformation();
    this.createForm();
    console.log("form", this.contactInfoForm);
    
  }

  saveEntity(){
    this.router.navigateByUrl("/bass/activation-activities/corporate-structure-information");
    // this.router.navigate(['/bass/activation-activities/corporate-structure-information']);
    this.next = true
  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    this.isUpload = true;
}
  createForm() {
		this.contactInfoForm = this.contactInfoFB.group({
			companyName: ['', Validators.required],
			firstName: ['', Validators.required],
			lastName: ['', Validators.email],
			houseNumber: [''],
			street: [''],
      city: [''],
      country: ['', Validators.required],
      contactPhoneNumber: ['', Validators.required],
      searchCode: ['', Validators.required],
      trade: ['', Validators.required],
      jobDescription: ['', Validators.required],
      customerRateplan: ['', Validators.required],
      nationality: ['', Validators.required],
      idDocument: ['', Validators.required],
      idDocumentNumber: ['', Validators.required],
      salesChannel: ['', Validators.required],
      language: ['', Validators.required],
      customerReason: ['', Validators.required],
      roamingDeposit: ['', Validators.required],
      depositReferenceNumber: ['', Validators.required],
      customerGroup: ['', Validators.required],
      birthDate: ['', Validators.required],
      area: ['', Validators.required],
      contractResponsible: ['', Validators.required],
      billCycle: ['', Validators.required],
      creditLimit: ['', Validators.required],
      paymentResponsible: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      drivingLicense: ['', Validators.required],
      ratePain: ['', Validators.required],
      handset: ['', Validators.required],
      oldOperator: ['', Validators.required],
      preferredChannel: ['', Validators.required],
      salesForceId: ['', Validators.required],
      contractReason: ['', Validators.required],
      intemationalDeposit: ['', Validators.required],
      depositReceiptDate: ['', Validators.required],
		});
	}
}
