import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Component Imports
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { ClientDetailsComponent } from "./components/client-details/client-details.component";
import { AddClientComponent } from "./components/add-client/add-client.component";
import { EditClientComponent } from "./components/edit-client/edit-client.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
// Service Imports
import { ClientService } from "./services/client.service";
import { HttpModule } from "@angular/http";

import { AgGridModule } from "ag-grid-angular";
import { HttpClient } from "@angular/common/http";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { RemoveComponent } from "./components/remove/remove.component";
import { Globals } from "./models/Globals";
import { DetailsComponent } from "./components/details/details.component";

const appRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "add-client", component: AddClientComponent },
  { path: "clients/:id", component: ClientDetailsComponent },
  { path: "client-details/:id", component: DetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    GalleryComponent,
    RemoveComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    AgGridModule.withComponents([]),
    AngularFontAwesomeModule,
    FormsModule
  ],
  entryComponents: [EditClientComponent, RemoveComponent],
  providers: [ClientService, HttpClient, Globals],
  bootstrap: [AppComponent]
})
export class AppModule {}
