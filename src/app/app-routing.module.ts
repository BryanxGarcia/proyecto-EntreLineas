import { HomeComponent } from './pages/home/home.component';

import{NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes=[
    {path:'', component: HomeComponent},
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    { path: 'userhome', loadChildren: () => import('./pages/userhome/userhome.module').then(m => m.UserhomeModule) },
    { path: 'searchresult', loadChildren: () => import('./pages/searchresult/searchresult.module').then(m => m.SearchresultModule) },
    { path: 'description', loadChildren: () => import('./pages/description/description.module').then(m => m.DescriptionModule) },
    { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
    { path: 'library', loadChildren: () => import('./pages/library/library.module').then(m => m.LibraryModule) },
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}