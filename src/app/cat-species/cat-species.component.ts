import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-species',
  templateUrl: './cat-species.component.html',
  styleUrls: ['./cat-species.component.scss'],
})
export class CatSpeciesComponent {
  species = [
    'Himalayan',
    'Siamese',
    'Russian Blue',
    'Maine Coon',
    'Savannah',
    'Scottish Fold',
  ];
}
