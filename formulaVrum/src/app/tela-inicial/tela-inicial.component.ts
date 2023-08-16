import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent implements OnInit {
  

  selectedValues: string[] = ['val1','val2'];
  constructor() { }

  ngOnInit(): void {
    console.log("foi")
  }

}
