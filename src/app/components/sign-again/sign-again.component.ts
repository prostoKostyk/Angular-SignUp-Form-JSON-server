import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { User } from "src/app/user";

@Component({
  selector: "app-sign-again",
  templateUrl: "./sign-again.component.html",
  styleUrls: ["./sign-again.component.css"]
})
export class SignAgainComponent implements OnInit {
  @Input() newUser: User;
  @Input() allUsers = [];
  constructor() { }
  @Output() childEvent = new EventEmitter<object>();
  signUpAgain(): void {
    this.childEvent.emit();
  }

  ngOnInit() {
  }

}
