import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { OAuthEvent, OAuthService } from 'angular-oauth2-oidc';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-token-consumer',
  templateUrl: './token-consumer.component.html',
  styleUrls: ['./token-consumer.component.css']
})
export class TokenConsumerComponent implements OnInit, OnDestroy {
  private oauthSubscription: Subscription | undefined

  constructor(private oauthService: OAuthService) { }

  async ngOnInit() {
    this.oauthSubscription = this.oauthService.events.subscribe(event => this.consumeOauthEvent(event));
  }

  ngOnDestroy(): void {
    if(this.oauthSubscription){
      this.oauthSubscription.unsubscribe();
      this.oauthSubscription = undefined;
    }
  }

  private async consumeOauthEvent(event: any){
    //Wait unitl discovery document fully loaded
    if(event.type !== "discovery_document_loaded" || !event.info?.discoveryDocument){
      return;
    }
    console.log(event['info'])

    if(this.oauthSubscription){
      this.oauthSubscription.unsubscribe();
      this.oauthSubscription = undefined;
    }

    try {
      console.log('try login');
      var res = await this.oauthService.tryLogin({
        onTokenReceived: (info) => {
            console.log('state', info.state);
        }
      });
      console.log('finished try login', res);
    } catch (err) {
      console.log('Failed login attempt', err);
      return;
    }
  }
}
