import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe'; // <-- Add this

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
