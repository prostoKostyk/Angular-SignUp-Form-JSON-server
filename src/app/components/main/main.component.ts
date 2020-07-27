import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { match } from "src/app/validators/match.validator";
import { User } from "src/app/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  form: FormGroup;
  newUser: User;
  allUsers = [];
  isModalOpen = false;
  formWidth = 349;
  constructor(private router: Router, public userService: UserService) {
    this.form = new FormGroup({
      "firstname": new FormControl("", [Validators.required]),
      "lastname": new FormControl("", [Validators.required]),
      "age": new FormControl("", [Validators.required, Validators.min(10), Validators.max(100)]),
      "email": new FormControl("", [Validators.required, Validators.email]),
      "gender": new FormControl("Male"),
      PasswordsForm: new FormGroup({
        "password": new FormControl("", [Validators.required, Validators.min(8)]),
        "passwordConfirm": new FormControl("", [Validators.required, Validators.min(8)])
      }, match("password", "passwordConfirm"))
    });
  }

  ngOnInit() {
  }

  changeGender(gen: string) {
    this.form.controls.gender.setValue(gen);
  }

  closeModal() {
    this.isModalOpen = false;
    this.clearForm();
  }

  signup(firstname, lastname, gender, age, email, password): void {
    this.isModalOpen = true;
    this.newUser = new User(firstname, lastname, gender, age, email, password);
    // Получение ранее добавленных пользователей перед добавлением нового
    this.userService.getUsers().subscribe(
      users => {
        this.allUsers = users;
        // Добавление нового пользователя
        this.userService.postUser(this.newUser).subscribe(
          userData => {
            this.newUser = userData;
          }
        );
      }
    );
  }

  clearForm(): void {
    this.form.reset();
    this.changeGender("Male");
  }

}
