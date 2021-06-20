...bash
mkdir angular12demo
cd angular12demo
ng new client

cd Client
code .

##BOOTSTRAP

$ npm i bootstrap --save

in angular.json
    "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ], 

$ npm i ajv@^6.9.1
$ npm i @popperjs/core@^2.9.2

$ npm audit fix
$ ng update

##FONTAWESOME

$ npm install @fortawesome/fontawesome-svg-core
$ npm install @fortawesome/free-solid-svg-icons

# See Compatibility table below to choose a correct version
### for Angular12  font v0.9.0

$ npm install @fortawesome/angular-fontawesome@0.9.0

1 - Add FontAwesomeModule to imports in src/app/app.module.ts:

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

2 - Tie the icon to the property in your component src/app/app.component.ts:

import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  faCoffee = faCoffee;
}

##MATERIAL
###not package theme

$ ng add angular-material 

###or with package theme and custom

$ ng add angular/material

$ y + enter



Option if npm i angular-material =>
npm i angular@^1.7.2
npm i angular-animate@^1.7.2
npm i angular-aria@^1.7.2
npm i angular-messages@^1.7.2

npm i 


##NG-BOOTSTRAP

$ npm add @ng-bootstrap/ng-bootstrap --save

###import alternative
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbPaginationModule, NgbAlertModule],
})
export class YourAppModule {
}

##import modules

$ npm install @ng-bootstrap/ng-bootstrap -save

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbModule],
})
export class YourAppModule {
}

##Started Server 

$ ng serve -o