import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthEvent, OAuthService } from 'angular-oauth2-oidc';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-router';
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  user: string | undefined;
  private oauthSubscription: Subscription | undefined

  constructor(private oauthService: OAuthService, private router: Router) {
  }

  async ngOnInit(){
    //Configure auth service
    this.oauthService.configure({
      issuer: 'http://localhost:8080/auth/realms/Test-Applikation',
      redirectUri: window.location.origin + '/',
      silentRefreshRedirectUri: window.location.origin + "/assets/silent-refresh.html",
      clientId: 'angular-test',
      responseType: 'code',
      scope: 'openid profile email',
      useSilentRefresh: true,
      showDebugInformation: true,
      sessionChecksEnabled: true,
    });
    this.oauthSubscription = this.oauthService.events.subscribe(event => this.consumeOauthEvent(event));
    this.oauthService.setupAutomaticSilentRefresh();
    await this.oauthService.loadDiscoveryDocumentAndTryLogin();

    //If not logged in, try a silent refresh to log in 
    //if there is a session at auth server
    //but ingore any errors
    if(!this.oauthService.getIdentityClaims()){
      this.oauthService.silentRefresh()
        .catch(() => console.debug('There seems not to be a session on auth server'));
    }
  }

  ngOnDestroy(): void {
    if(this.oauthSubscription){
      this.oauthSubscription.unsubscribe();
      this.oauthSubscription = undefined;
    }
  }

  private consumeOauthEvent(event: OAuthEvent){
    var claims = this.oauthService.getIdentityClaims();

    if(event.type === 'token_received') {
      //If there is a state, redirect to this URL
      if(this.oauthService.state) {
        const originalUrl = decodeURIComponent(this.oauthService.state);
        console.log('Returned state is', originalUrl);
        this.router.navigateByUrl(originalUrl);
      }

      //Futhermore, just set the "normal" stuff
      console.log('Logged in as', claims)
      this.isLoggedIn = true;
      this.isAdmin = true;
      this.user = undefined;
    }

    if(!claims){
      console.log('Not logged in any more')
      this.isLoggedIn = false;
      this.isAdmin = false;
      this.user = undefined;
    }
  }

  login(){
    console.log('Given state is', this.router.url);
    this.oauthService.initLoginFlow(this.router.url);
  }  

  logout(){
    this.oauthService.logOut();
  }
}
