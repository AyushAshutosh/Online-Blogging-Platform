import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration/registration.component';

export const routes: Routes = [
    {path:'create-post', component: CreatePostComponent},
    {path:'view-all', component: ViewAllComponent},
    {path:'view-post/:id', component: ViewPostComponent},
    {path:'login', component: LoginComponent },
    {path:'register', component: RegistrationComponent },
    {path: '',redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {  }

