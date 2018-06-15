import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import { Client } from "../models/Client";
import { User } from "../models/User";

@Injectable()
export class ClientService {
  clients: any[];
  constructor(public http: HttpClient) {}

  getUsers() {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users");
  }
  getUserById(id) {
    return this.http.get<any>(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
  }
  delete(id: string) {
    return this.http.delete<any>(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
  }
  updateUser(user) {
    return this.http.put(
      "https://jsonplaceholder.typicode.com/users/" + user.id,
      user
    );
  }
  addNew(user: User) {
    return this.http.post("https://jsonplaceholder.typicode.com/users/", user);
  }
  newClient(client: Client) {
    this.clients.push(client);
  }
  novia() {}
}
