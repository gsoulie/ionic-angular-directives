# ionic-angular-directives

* [hide-header.directive.ts](#hide-header-directive)      
* [animated-fab.directive.ts](#animated-fab-directive)     

## hide-header directive

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

*view.scss*
````css
.search-overlay {
  margin: 20px;
  width: 90%;

  ion-row {
    background: white;
    margin-top: 40px;
    box-shadow: 0px 2px 3px 0px rgb(0 0 0 / 15%);
    border-radius: 8px;
  }
}
````

## animated-fab directive

Usage : 

*view.html*
````html
<ion-content scrollEvents="true" [appAnimatedFab]="fab">
  <!-- some stuff here -->
  
  <ion-fab
    vertical="bottom"
    horizontal="end"
    slot="fixed">
    <ion-fab-button #fab color="light">
      <ion-icon name="pencil-outline" color="primary"></ion-icon>
      <span>Compose</span>
    </ion-fab-button>
  </ion-fab>
</div>
````

*view.scss*
````css
ion-fab-button {
  width: 140px;
  height: 48px;
  --border-radius: 20px;
  --box-shadow: 5px 12px 30px -8px rgba(0, 0, 0, 0.53);

  ion-icon {
    font-size: 20px;
  }
}

// accéder aux propriétés shadow part (voir doc fab button)
ion-fab-button::part(native) {
  color: var(--ion-color-primary);

}
````
