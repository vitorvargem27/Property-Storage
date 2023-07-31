import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule, NgFor, MatCardModule,MatIconModule, MatDividerModule, MatButtonModule,],
})

export class HomeComponent {

  nome: string[] = ['Vitor'];
  imoveis: string[] = ['Casa Magnífica', 'Apartamento Padrão', 'Casa de Campo', 'Flat Minimalista', 'Sala Comercial', 'Cobertura Duplex'];
}
