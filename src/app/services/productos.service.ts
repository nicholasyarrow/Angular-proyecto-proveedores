import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  productosAboutSelect(idcategoria: any){
    const ruta = ": https://servicios.campus.pe/servicioclientes.php?idcategoria=" + idcategoria;
    return this.http.get(ruta);
  }
}
