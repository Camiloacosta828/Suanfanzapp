import { Component, OnInit } from '@angular/core';
import {  AgregarUsuario } from 'src/app/shared/interfaces/AgregarContacto';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-agg-user',
  templateUrl: './agg-user.component.html',
  styleUrls: ['./agg-user.component.scss']
})
export class AggUserComponent implements OnInit {
  
  agregarUser: AgregarUsuario = {
    numberOemail: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  cerrar(){
    document.getElementById("content").style.display = "none"
  }

  aggContact(){
    console.log(this.agregarUser);
    this.authService.login(this.agregarUser).subscribe(data => {
      if (data === null) {
        alert("Nelson Mandela")
      } else {
        console.log(this.agregarUser + "Holi");
      }
    }, error => {
      alert(error.error.message)
    }
    )
  }

}
