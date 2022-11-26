import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  formReg: FormGroup;
  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    }),
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        //this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
      const toast = await this.toastController.create({
        message: 'Hello User',
        duration: 1500,
        icon: 'globe'
      });
  
      await toast.present();
  }

  onSubmitLogin() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log('response');
        this.router.navigate(['/bien']);
      })
      .catch(error => console.log(error));
  }

  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/bien']);
      })
      .catch(error => console.log(error));
  }

}
