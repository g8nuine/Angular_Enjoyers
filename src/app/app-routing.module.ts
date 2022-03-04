import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {KnihaStrankaComponent} from "./kniha-stranka/kniha-stranka.component";
import {VypozickyStrankaComponent} from "./vypozicky-stranka/vypozicky-stranka.component";
import {OsobaStrankaComponent} from "./osoba-stranka/osoba-stranka.component";

const routes: Routes = [
  {
    path: 'kniha',
    component: KnihaStrankaComponent
  },
  {
    path: 'osoba',
    component: OsobaStrankaComponent
  },
  {
    path: 'vypozicky',
    component: VypozickyStrankaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
