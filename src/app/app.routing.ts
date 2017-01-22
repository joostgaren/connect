import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';


@NgModule({
    imports: [RouterModule.forRoot([
        { path: '', redirectTo: 'layout/home', pathMatch: 'full' },
        { path: 'layout', loadChildren: 'app/modules/layout/layout.module#LayoutModule' },
        { path: 'login', loadChildren: 'app/modules/authentication/authentication.module#AuthenticationModule' },
        { path: '**', redirectTo: 'layout/home' }
    ],
        { preloadingStrategy: PreloadAllModules }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
