import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CodesPhoneI } from "src/app/shared/interfaces/CodesPhoneI";
import { UserI } from "src/app/shared/interfaces/UserI";
import { AuthService } from "src/app/shared/services/auth.service";
import { CodesService } from "src/app/shared/services/codes.service";
import { PersonService } from "src/app/shared/services/person.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  codesPhone: CodesPhoneI[] = [];
  selectedCode: CodesPhoneI;

  userForm = new FormGroup({
    email: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    favNumber: new FormControl(""),
    select: new FormControl(""),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private codesService: CodesService,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.getPlacesCode();
  }

  doRegister(e) {
    e.preventDefault();

    const user: UserI = {
      email: "",
      username: "",
      favNumber: 0,
      lname: "",
      password: "",
      name: "",
    };

    this.personService.savePerson(user).subscribe(data=>{
      console.log(data);
      alert("Usuario creado existosamente")
    })
    this.goToLogin();
  }

  goToLogin() {
    this.router.navigate(["/login"]);
  }

  getPlacesCode() {
    this.codesService.getCodes().subscribe((data) => {
      this.codesPhone = data.data;
    });
  }

  save() {}
}
