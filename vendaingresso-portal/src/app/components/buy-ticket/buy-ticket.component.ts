import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';


@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ]
})
export class BuyTicketComponent implements OnInit {  
  formaPagamento = 'cc';
    firstFormGroup = this._formBuilder.group({
      nameForm: ['', Validators.required],
      rgForm: ['', Validators.required],
      dtNascForm: ['', Validators.required],
      emailForm: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
    });
    constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

}
