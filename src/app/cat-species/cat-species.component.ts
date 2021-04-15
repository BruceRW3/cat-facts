import { Component } from '@angular/core';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-cat-species',
  templateUrl: './cat-species.component.html',
  styleUrls: ['./cat-species.component.scss'],
})
export class CatSpeciesComponent {
  breeds$ = this.catService.getBreeds();
  constructor(private catService: CatService) {}
}
