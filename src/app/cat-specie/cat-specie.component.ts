import { Component, Input, OnInit } from '@angular/core';
import { Breed } from '../services/cat.service';

@Component({
  selector: 'app-cat-specie',
  templateUrl: './cat-specie.component.html',
  styleUrls: ['./cat-specie.component.scss'],
})
export class CatSpecieComponent {
  @Input() breed: Breed | null = null;
}
