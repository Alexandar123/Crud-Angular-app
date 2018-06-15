import { Component, OnInit, ViewChild } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { Client } from "../../models/Client";
import { AgGridNg2 } from "ag-grid-angular";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { EditClientComponent } from "../edit-client/edit-client.component";
import { RemoveComponent } from "../remove/remove.component";
import { Globals } from "../../models/Globals";
import { ClientDetailsComponent } from "../client-details/client-details.component";
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.css"]
})
export class ClientsComponent implements OnInit {
  totalOwed: number;

  getTotal() {
    let total = 0;
    total += 5000;
    this.totalOwed = total;
    console.log(this.totalOwed);
  }
  @ViewChild("agGrid") agGrid: AgGridNg2;
  rowData = [];

  columnDefs = [
    {
      headerName: "ID",
      field: "_id",
      width: 400
    },
    {
      headerName: "Full name",
      field: "name",
      width: 200
    },
    {
      headerName: "Email",
      field: "email",
      width: 400
    },
    {
      headerName: "Remove",
      field: "remove",
      cellRendererFramework: RemoveComponent,
      suppressFilter: true
    },
    {
      headerName: "Details",
      field: "details",
      cellRendererFramework: ClientDetailsComponent,
      suppressFilter: true
    }
  ];

  constructor(
    public clientService: ClientService,
    public global: Globals,
    public router: Router
  ) {}
  id;
  search;
  users: Client[];

  ngOnInit() {
    this.clientService.getUsers().subscribe(res => {
      this.rowData = res.map(element => {
        return {
          _id: element.id,
          name: element.name,
          email: element.email

          //img: element.snippet.thumbnails.default.url
        };
      });
      this.users = res;
    });
    this.getTotal();
  }

  pretrazi(event) {
    this.search = event.target.search.value;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].name == this.search) {
        console.log("Ima poklapanja");
        this.router.navigate(["client-details", this.users[i].id]);
      } else {
        console.log("Nema poklapanja");
        //this.router.navigate(["client-details", this.users[i].id]);
      }
    }
  }

  login() {
    $("#myBtn").click(function() {
      $("#Modal").modal("show");
    });
  }
}
