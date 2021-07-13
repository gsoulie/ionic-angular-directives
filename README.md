# ionic-angular-directives

## HideHeader

Usage : 

*view.html*

````html
<ion-content scrollEvents="true" [appHideHeader]="search">
  <div #search class="search-overlay ion-align-items-center" slot="fixed">
    <ion-row>
      <ion-col size="2">
        <ion-menu-button color="dark"></ion-menu-button>
      </ion-col>
      <ion-col size="8">
        <ion-input color="dark" type="text" placeholder="Search email"></ion-input>
      </ion-col>
      <ion-col size="2">
        <ion-avatar tappable (click)="openAccount($event)">
          <img src="">
        </ion-avatar>
      </ion-col>
    </ion-row>
  </div>
</div>
````
