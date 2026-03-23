import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Pregunta2Service {

  constructor(private http:HttpClient) { }
  
  prSelect(){
    const ruta = "https://servicios.campus.pe/proveedores.php";
    return this.http.get(ruta);
  }
}
