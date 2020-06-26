import { NgModule } from '@angular/core';
import { HashCodePipe, AbsPipe } from './hash-code.pipe';

@NgModule({
  imports: [],
  declarations: [HashCodePipe, AbsPipe],
  exports: [HashCodePipe, AbsPipe],
})
export class ApplicationPipesModule {}
