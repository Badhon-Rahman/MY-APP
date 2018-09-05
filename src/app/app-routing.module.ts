import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegesterComponent} from './regester/regester.component';

const routes: Routes =[
    {
        path: '',
        component: HomeComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
        path: 'regester',
        component: RegesterComponent
    }                    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}