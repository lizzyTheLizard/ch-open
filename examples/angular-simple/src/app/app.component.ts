import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-simple';
  claims : object | undefined;

  constructor(private oauthService: OAuthService, 
    private http: HttpClient) { }

  ngOnInit() {
    //Configure auth service
    this.oauthService.configure({
      issuer: 'http://localhost:8080/auth/realms/Test-Applikation',
      redirectUri: window.location.origin,
      clientId: 'angular-test',
      responseType: 'code',
      scope: 'openid profile email',
      useSilentRefresh: true,
      showDebugInformation: true,
    });

    //Get configuration from auth server
    this.oauthService.loadDiscoveryDocument()
      .then(() => {
        //Check if this is a redirect after a login. If so check if the user is now logged in
        this.oauthService.tryLogin().then(() => {
          this.claims = this.oauthService.getIdentityClaims();
        });
      })
      .catch(err => console.log('Login attempt has failed', err));
  }

  login(){
    this.oauthService.initLoginFlow();
  }

  async makeRequest(){
    //Those request do not return someting meaningfull, its just to check if the token is send to the backend
    await this.http.get("http://localhost:4200/api/withToken")
      .toPromise()
      .catch(err => undefined);
    await this.http.get("http://localhost:4200/noToken")
      .toPromise()
      .catch(err => undefined);
  }
}
