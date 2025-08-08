import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
@NgModule({
  declarations: [HeaderComponent, SearchBarComponent, FooterComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent, SearchBarComponent, FooterComponent],
})
export class CoreModule {}
