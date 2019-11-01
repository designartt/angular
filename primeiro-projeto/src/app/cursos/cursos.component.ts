import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[] = ['Java', 'C#', 'Angular'];

  constructor() {
    this.nomePortal = 'http://google.com.br';
  }

  ngOnInit() {
  }

}
