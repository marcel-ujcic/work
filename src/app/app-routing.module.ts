import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {HomeComponent} from './home/home.component';
import {CardComponent} from './card/card.component';

const routes: Routes = [
    {
      path: 'details',
      component: DetailsComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'card',
      component: CardComponent
    },
    {
      path: 'details',
      component: DetailsComponent
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
