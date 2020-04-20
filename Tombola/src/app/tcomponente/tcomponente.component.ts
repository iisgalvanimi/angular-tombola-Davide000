import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tcomponente',
  templateUrl: './tcomponente.component.html',
  styleUrls: ['./tcomponente.component.css']
})
export class TcomponenteComponent implements OnInit {
  @Input() numeriEstratti : string[];
  @Input() ultimoNumero : string;
  constructor() { }

  ngOnInit(): void {
  }

}
