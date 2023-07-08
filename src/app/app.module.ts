import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateAdminComponent } from './backoffice/all-template-admin/all-template-admin.component';
import { FooterAdminComponent } from './backoffice/footer-admin/footer-admin.component';
import { BodyAdminComponent } from './backoffice/body-admin/body-admin.component';
import { SidebarAdminComponent } from './backoffice/sidebar-admin/sidebar-admin.component';
import { HeaderAdminComponent } from './backoffice/header-admin/header-admin.component';
import { BodyUserComponent } from './frontoffice/body-user/body-user.component';
import { HeaderUserComponent } from './frontoffice/header-user/header-user.component';
import { FooterUserComponent } from './frontoffice/footer-user/footer-user.component';
import { AllTemplateUserComponent } from './frontoffice/all-template-user/all-template-user.component';
import { ListContratComponent } from './backoffice/list-contrat/list-contrat.component';
import {HttpClientModule} from '@angular/common/http';
import {AjoutContratComponent} from './backoffice/ajout-contrat/ajout-contrat.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SupprimerContratComponent } from './backoffice/supprimer-contrat/supprimer-contrat.component';
import { ModifierContratComponent } from './backoffice/modifier-contrat/modifier-contrat.component';
import { ListReclamationComponent } from './backoffice/list-reclamation/list-reclamation.component';
import { AjoutReclamationComponent } from './backoffice/ajout-reclamation/ajout-reclamation.component';
import { ModifierReclamationComponent } from './backoffice/modifier-reclamation/modifier-reclamation.component';
import { SupprimerReclamationComponent } from './backoffice/supprimer-reclamation/supprimer-reclamation.component';
import { CountComponent } from './backoffice/count/count.component';
import { CountreclamationComponent } from './backoffice/countreclamation/countreclamation.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { AverageComponent } from './backoffice/average/average.component';
import { ExportComponent } from './backoffice/export/export.component';



@NgModule({
  declarations: [
    AppComponent,
    AllTemplateAdminComponent,
    FooterAdminComponent,
    BodyAdminComponent,
    SidebarAdminComponent,
    HeaderAdminComponent,
    BodyUserComponent,
    HeaderUserComponent,
    FooterUserComponent,
    AllTemplateUserComponent,
    ListContratComponent,
    AjoutContratComponent,
    SupprimerContratComponent,
    ModifierContratComponent,
    ListReclamationComponent,
    AjoutReclamationComponent,
    ModifierReclamationComponent,
    SupprimerReclamationComponent,
    CountComponent,
    CountreclamationComponent,
    AverageComponent,
    ExportComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
