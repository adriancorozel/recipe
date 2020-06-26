import { Component, OnInit } from '@angular/core';
import { UserRegistration } from 'src/app/UserRegistration';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  success: boolean;
  error: any;
  userRegistration: UserRegistration = { name: '', email: '', password: '' };
  submitted: boolean = false;

  form = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    Password: new FormControl(''),
  });
  constructor(private service: UserService, private _router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.service.register(this.userRegistration).subscribe(
      (result) => {
        if (result) {
          this._router.navigate(['/'], { replaceUrl: true });
        }
      },
      (error) => {
        Object.keys(error.error).forEach((prop) => {
          const formControl = this.form.get(prop);
          if (formControl) {
            formControl.setErrors({
              serverError: error.error[prop][0],
            });
          }
        });
      }
    );
  }
}
