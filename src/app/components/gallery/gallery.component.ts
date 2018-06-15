import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  render;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getUsers().subscribe(clients => {
      this.render = clients.items;
    });
  }
}
