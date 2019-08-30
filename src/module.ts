import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { MapToIterable } from './util-classes';
import { MinimalistParallax } from './minimalist-parallax';

@NgModule({
  declarations: [
    MapToIterable,
    MinimalistParallax
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    MapToIterable,
    MinimalistParallax
  ]
})
export class MinimalistParallaxModule {}
