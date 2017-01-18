import { AuthenticationModule } from './modules/authentication/authentication.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { LayoutModule } from './modules/layout/layout.module';
import { AuthReducer } from './modules/authentication/state/reducers/auth-reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './modules/authentication/state/effects/auth-effects';
import { AppRoutingModule } from './app.routing';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutModule,
    AuthenticationModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, environment.firebaseAuthConfig),
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    StoreModule.provideStore({ auth: AuthReducer }),
    EffectsModule.run(AuthEffects),
    AppRoutingModule,
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
