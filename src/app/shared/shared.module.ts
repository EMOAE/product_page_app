import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonButtonDirective } from '../directives/neon-button.directive';
import { Tilt3dDirective } from '../directives/tilt3d.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [NeonButtonDirective, Tilt3dDirective],
  exports: [CommonModule, NeonButtonDirective, Tilt3dDirective]
})
export class SharedModule {}
