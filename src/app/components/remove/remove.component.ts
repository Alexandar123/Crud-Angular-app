import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Client } from "../../models/Client";
import { Globals } from "../../models/Globals";
declare var $: any;
@Component({
  selector: "app-remove",
  templateUrl: "./remove.component.html",
  styleUrls: ["./remove.component.css"]
})
export class RemoveComponent implements OnInit {
  users: Client[];

  id;
  constructor(
    public clientService: ClientService,
    public router: Router,
    public route: ActivatedRoute,
    public global: Globals
  ) {}
  ngOnInit() {
    this.clientService.getUsers().subscribe(user => {
      this.users = user;
      // console.log(this.users);
    });
  }

  agInit(params: any): void {
    this.id = params.data._id;
    console.log("REMOVE AGINIT " + this.id);
  }

  delete() {
    console.log(this.id);
    this.clientService.delete(this.id).subscribe(user => {
      console.log("Clients remove(delet method): " + user);
      $("#myModal").modal("show");
    });
  }
}
