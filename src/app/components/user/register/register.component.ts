import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
// import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    // this.registerForm = this.formBuilder.group({
    //     firstName: ['', Validators.required],
    //     lastName: ['', Validators.required],
    //     username: ['', Validators.required],
    //     password: ['', [Validators.required, Validators.minLength(6)]]
    // });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    let body = {
      "firstname": this.registerForm.controls.firstName.value,
      "lastname": this.registerForm.controls.lastName.value,
      "username": this.registerForm.controls.username.value,
      "password": this.registerForm.controls.password.value,
      "confirmPassword": this.registerForm.controls.password.value,
      "gender": "Male"
    };

this.productService.registerUser(body).subscribe();

    // this.userService.register(this.registerForm.value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             this.alertService.success('Registration successful', true);
    //             this.router.navigate(['/login']);
    //         },
    //         error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         });
  }
}
