import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reg: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.reg = this._fb.group({
      name:['',[Validators.required,Validators.pattern("[a-zA-Z]{3,}[ ]{1}[a-zA-Z]{3,}")]],
      email:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]{3,}[@]{1}[a-zA-Z0-9]{3,}[.]{1}[a-zA-Z]{2,}")]],
      mobile:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
      password:['',[Validators.required,Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]]
    })
   }

   Reg(data){
     console.log(data);
   }
  ngOnInit() {
  }

}
