import { Component, OnInit } from "@angular/core";
import { Client } from "../../models/Client";
import { ClientService } from "../../services/client.service";
import { User } from "../../models/User";

@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.css"]
})
export class AddClientComponent implements OnInit {
  client: User = {
    id: "",
    name: "",
    email: "",
    phone: null
  };

  constructor(private clientService: ClientService) {}

  addNew(event) {
    this.client.phone = event.target.phone.value;
    this.client.name = event.target.name.value;
    this.client.email = event.target.email.value;

    this.clientService.addNew(this.client).subscribe(client => {
      console.log(this.client);
      console.log("Successfully added");
    });
  }

  ngOnInit() {}
}
