import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "./validators/my.validators";

type cityMap = {
  [key: string]: string;
} & {
  ru: string;
  ua: string;
  by: string;
};

@Component({
  selector: 'app-block-form',
  templateUrl: './block-form.component.html',
  styleUrls: ['./block-form.component.scss']
})
export class BlockFormComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  cityMap: cityMap = {
    ru: "Москва",
    ua: "Киев",
    by: 'Минск',
  };
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required,MyValidators.restrictedEmails], MyValidators.uniqEmail),
      password: new FormControl(null, [Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl("ua"),
        city: new FormControl("" )
      }),
      skills: new FormArray([])
    });
    this.city = this.form.get('address')!.get('country')?.value;
  }

  submit() {
    console.log(this.form)
  }

  set city(value: string) {
    this.form.patchValue({
      address: {
        city: this.cityMap[value]
      }
    })
  }

  addSkill() {
    const control = new FormControl('');
    //Первый способ каста
    (<FormArray>this.form.get('skills'))!.push(control)
  }
}
