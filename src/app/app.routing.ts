import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';


@NgModule({
    imports: [RouterModule.forRoot([
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', loadChildren: 'app/modules/home/home.module#HomeModule' },
        { path: 'auth', loadChildren: 'app/modules/authentication/authentication.module#AuthenticationModule' },
    ],
        { preloadingStrategy: PreloadAllModules }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
 