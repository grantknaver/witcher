import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesModule, Page1Component } from './pages/pages.module';

const routes: Routes = [
  {
    path: '',
    component: Page1Component
  }
  // {
  //   path: 'page2',
  //   component: Page2Component
  // },
  // {
  //   path: 'page3',
  //   component: Page3Component
  // },
  // {
  //   path: 'page4',
  //   component: Page4Component
  // },
  // {
  //   path: 'page5',
  //   component: Page5Component
  // },
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes),
    PagesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
