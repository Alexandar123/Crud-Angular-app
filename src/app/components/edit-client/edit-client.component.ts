import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { Globals } from "../../models/Globals";
import { Client } from "../../models/Client";
declare var $: any;
@Component({
  selector: "app-edit-client",
  templateUrl: "./edit-client.component.html",
  styleUrls: ["./edit-client.component.css"]
})
export class EditClientComponent implements OnInit {
  users: Client[];
  id;
  user: any;
  isEditing: boolean = false;
  constructor(public clientService: ClientService, public global: Globals) {}

  ngOnInit() {
    this.global.editUser = this.user;
  }
  agInit(params: any): void {
    this.id = params.data._id;
    this.user = params.data;

    //console.log(this.id);
  }

  edit() {
    /*this.clientService.updateUser(this.user).subscribe(user => {
      //console.log(this.user);
      $("#myModal").modal("show");
    });*/
    $("#eModal").modal("show");
    //console.log(this.user); log object
  }
}
