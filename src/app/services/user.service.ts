import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../user";

const API_URL = "http://localhost:3000/";
const httpOptions =  {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {
    return this.http.get(API_URL + "users" );
  }

  postUser(user: User): Observable<any> {
    return this.http.post(API_URL + "users", {
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      age: user.age,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
