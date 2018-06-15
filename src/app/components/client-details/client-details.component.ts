import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Globals } from "../../models/Globals";
import { Client } from "../../models/Client";
import { DetailsComponent } from "../details/details.component";

@Component({
  selector: "app-client-details",
  templateUrl: "./client-details.component.html",
  styleUrls: ["./client-details.component.css"]
})
export class ClientDetailsComponent implements OnInit {
  id: number;
  users: any[];
  user: Client;

  constructor(
    public clientService: ClientService,
    public router: Router,
    public route: ActivatedRoute,
    public global: Globals
  ) {}

  ngOnInit() {
    this.clientService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  agInit(params: any): void {
    this.id = params.data._id; //daje undefined kada kliknem na jednog usera
  }

  details() {
    console.log("DETAILS " + this.id);
    this.clientService.getUserById(this.id).subscribe(user => {
      this.user = user;
      this.router.navigate(["client-details", this.id]);
      console.log("CLIENT-DETAILS " + this.user.name);
    });
  }
}
