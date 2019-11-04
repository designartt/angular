import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string  = 'http://google.com.br';
cursoAngular: boolean = true;
urlImamge = 'https://droneshowla.com/wp-content/uploads/facebook-400x200.png';

valorAtual: string = '';
valorSalvo: string = '';

nome: string = 'abc';

isMouseOver: boolean = false;

pessoa: any = {
  nome: 'def',
  idade: 20
}

nomeDoCurso: string = 'Angular';

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado() {
    alert('Botão Clicado!!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }









  constructor() { }

  ngOnInit() {
  }

}
