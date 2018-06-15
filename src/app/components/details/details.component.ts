import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { Client } from "../../models/Client";
import { ActivatedRoute } from "@angular/router";
declare var $: any;
@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  id;
  user: Client;

  constructor(
    public clientService: ClientService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log("Details id " + this.id);
    this.getUser();
  }

  getUser() {
    this.clientService.getUserById(this.id).subscribe(user => {
      this.user = user;
      console.log(this.user.name);
    });
  }
  delete() {
    this.clientService.delete(this.id).subscribe(user => {
      console.log("OBrisano");
      $("#removeModal").modal("show");
    });
  }
  edit() {
    this.clientService.updateUser(this.user).subscribe(user => {
      console.log("Editing user");
      $("#editModal").modal("show");
    });
  }
}
