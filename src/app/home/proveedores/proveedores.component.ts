import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/entities/proveedor';
import { Pregunta2Service } from 'src/app/services/pregunta2.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  listaPr: Proveedor[] | undefined;
  constructor(private prService: Pregunta2Service) { }

  ngOnInit(): void {
    this.prService.prSelect().subscribe(
      (res) => {
        //console.log(res);
        this.listaPr = JSON.parse(JSON.stringify(res));
      }
    )
  }
}
