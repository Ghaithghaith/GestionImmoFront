import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllTemplateAdminComponent} from './backoffice/all-template-admin/all-template-admin.component';
import {BodyAdminComponent} from './backoffice/body-admin/body-admin.component';
import {AllTemplateUserComponent} from './frontoffice/all-template-user/all-template-user.component';
import {BodyUserComponent} from './frontoffice/body-user/body-user.component';
import {ListContratComponent} from './backoffice/list-contrat/list-contrat.component';
import {AjoutContratComponent} from './backoffice/ajout-contrat/ajout-contrat.component';
import {SupprimerContratComponent} from './backoffice/supprimer-contrat/supprimer-contrat.component';
import {ModifierContratComponent} from './backoffice/modifier-contrat/modifier-contrat.component';
import {ListReclamationComponent} from './backoffice/list-reclamation/list-reclamation.component';
import {AjoutReclamationComponent} from './backoffice/ajout-reclamation/ajout-reclamation.component';
import {SupprimerReclamationComponent} from './backoffice/supprimer-reclamation/supprimer-reclamation.component';
import {CountComponent} from './backoffice/count/count.component';
import {AverageComponent} from './backoffice/average/average.component';
import {ExportComponent} from './backoffice/export/export.component';
import {ModifierReclamationComponent} from './backoffice/modifier-reclamation/modifier-reclamation.component';



const routes: Routes = [
  {
    path: 'admin', component: AllTemplateAdminComponent,
    children: [
      {
        path: 'home', component: BodyAdminComponent,
      },
      {
        path: 'listcontrats',
        component: ListContratComponent,
      },
      {
        path: 'addcontrat',
        component: AjoutContratComponent,
      },
      {
        path: 'supprimercontrat/:id',
        component: SupprimerContratComponent,
      },
      {
        path: 'listcontrats/updateContrat/:idContrat', component: ModifierContratComponent,
      },
      {
        path: 'export',
        component: ExportComponent,
      },
      {path: 'listreclamations', component: ListReclamationComponent},
      {path: 'addreclamation', component: AjoutReclamationComponent},
      {path: 'supprimerreclamation/:id', component: SupprimerReclamationComponent},
      {path: 'listreclamations/supprimerreclamation/:id', component: SupprimerReclamationComponent},
      {path: 'listreclamations/updateReclamation/:idReclamation', component: ModifierReclamationComponent},
      {path: 'count', component: CountComponent},
      {path: 'average', component: AverageComponent},
    ]
  },
  {
    path: '', component: AllTemplateUserComponent,
    children: [
      {
        path: '', component: BodyUserComponent,
      }
      ,
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
