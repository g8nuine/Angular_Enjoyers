import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {KnihaStrankaComponent} from "./kniha-stranka/kniha-stranka.component";

const routes: Routes = [
  {
    path: 'kniha',
    component: KnihaStrankaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
