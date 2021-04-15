import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-specie',
  templateUrl: './cat-specie.component.html',
  styleUrls: ['./cat-specie.component.scss'],
})
export class CatSpecieComponent {
  @Input() speciesName: string = '';
}
