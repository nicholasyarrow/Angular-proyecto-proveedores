import { Producto } from './../../entities/producto';
import { About } from './../../entities/about';
import { AboutService } from './../../services/about.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  listaAbout: About[] | undefined;
  proveedorElegido: Producto | undefined;

  constructor(private proveedoresService: AboutService) { }

  ngOnInit(): void {
    this.proveedoresService.proveedoresSelect().subscribe(
      (res) => {
        //console.log(res);
        this.listaAbout = JSON.parse(JSON.stringify(res));
      }

    )
  }
  seleccionarItem(itemSeleccionado: About){
    console.log(itemSeleccionado);
    this.proveedorElegido = itemSeleccionado;
  }
}
