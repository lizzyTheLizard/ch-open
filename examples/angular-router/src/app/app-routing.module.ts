import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './views/admin/admin.component';
import { MainComponent } from './views/main/main.component';
import { Page2Component } from './views/page2/page2.component';
import { TokenConsumerComponent } from './views/token-consumer/token-consumer.component';


const routes: Routes = [  
  { path: 'consume', component: TokenConsumerComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'page2', component: Page2Component },
  { path: '', component: MainComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
