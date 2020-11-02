import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/interfaces/Login';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title: string = "Hola Mundo";
  color: string = "red"
  login: Login = {
    numberoremail: '',
    password: ''
  }


  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  doLogin() {
    console.log(this.login);
    this.authService.login(this.login).subscribe(data => {
      if (data === null) {
        alert("Nelson Mandela")
      } else {
        window.localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['']);

      }
    }, error => {
      alert(error.error.message)
    }
    )
  }

}
