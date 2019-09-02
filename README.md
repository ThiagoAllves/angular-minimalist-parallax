# angular-minimalist-parallax
 If you need more subtlety or just want to get out of the old background-attachment: fixed, get to know the angular-minimalist-parallax


## Installation

1. Use npm to install the component

  ```bash
  npm i angular-minimalist-parallax --save
  ```

1. Add the angular-minimalist-parallax component to your app.

  Include the following on your `src/app/app.module.ts`.
  ```javascript
  import { MinimalistParallaxModule } from 'angular-minimalist-parallax';

  @NgModule({
    declarations: [
      MyApp,
      ...
    ],
    imports: [
      IonicModule.forRoot(MyApp),
      MinimalistParallaxModule
    ],
    ...
  })
  ```


## Usage

add the  `minimalist-parallax` attribute  to the `<ion-content>` in your template:
```html
<ion-content minimalist-parallax>
 <div class="over">
  <div class="bg"  [ngStyle]="{'background-image': 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), url('+image+')'}">
    <!-- <div class="child">
      <h2>{{ text optional }}</h2>  
    </div> -->
  </div>
 </div>
</ion-content>


```
## Demo

![Animated](Minimalist-Paralax.gif)

## Donate


[Help us develop and improve our plugins -->](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RECXAQV6G6W5N&source=url)

