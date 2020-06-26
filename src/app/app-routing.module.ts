import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RolesComponent } from './components/roles/roles.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { LandingComponent } from './components/landing/landing.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthCallbackSignoutComponent } from './components/auth-callback-signout/auth-callback-signout.component';
import { RegisterComponent } from './components/register/register.component';
import { SilentRefreshComponent } from './components/silent-refresh/silent-refresh.component';
import { ViewRecipeComponent } from './components/view-recipe/view-recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
  { path: 'viewrecipe', component: ViewRecipeComponent , canActivate: [AuthGuardService]},
  {
    path: 'user/:id',
    component: UserDetailsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'roles',
    component: RolesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'signin-callback',
    component: AuthCallbackComponent,
  },
  {
    path: 'signout-callback',
    component: AuthCallbackSignoutComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'silent-signin-callback',
    component: SilentRefreshComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
