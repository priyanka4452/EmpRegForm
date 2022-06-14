import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  empRegForm! : FormGroup;
  result: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    // using Form Group
    // this.empRegForm = new FormGroup({
    //   'id' : new FormControl(),
    //   'name' : new FormControl(),
    //   'department' : new FormControl(),
    //   'gender' : new FormControl(),
    //   'DOB' : new FormControl(),
    //   'email' : new FormControl(),
    //   'phone' : new FormControl(),
    //   'address' :new FormControl()
    // })

    // Form Builder
    this.empRegForm = this.fb.group({
      'id' : new FormControl(),
      'name' : new FormControl(),
      'department' : new FormControl(),
      'gender' : new FormControl(),
      'DOB' : new FormControl(),
      'email' : new FormControl(),
      'phone' : new FormControl(),
      'address' :new FormControl()
    })
  }
  addEmp(){
    console.log(JSON.stringify(this.empRegForm.value));
  }
}
