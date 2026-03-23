import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { AboutComponent } from './pages/about/about.component';
import { BannerComponent } from './home/banner/banner.component';
import { ProveedoresComponent } from './home/proveedores/proveedores.component';
import { ProductosComponent } from './components/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MainFooterComponent,
    MainHeaderComponent,
    AboutComponent,
    BannerComponent,
    ProveedoresComponent,
    ProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
