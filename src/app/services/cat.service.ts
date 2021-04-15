import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Breed {
  id: string;
  name: string;
}

export interface BreedImage {
  breedId: string;
  imageId: string;
  imageUrl: string;
}

const mockBreeds: Breed[] = [
  {
    id: 'rblu',
    name: 'Russian Blue',
  },
  {
    id: 'asho',
    name: 'American Shorthair',
  },
];

const mockBreedImages: BreedImage[] = [
  {
    breedId: 'rblu',
    imageId: 'tmH3RG7rD',
    imageUrl: 'https://cdn2.thecatapi.com/images/tmH3RG7rD.jpg',
  },
  {
    breedId: 'asho',
    imageId: 'SCHe-SekW',
    imageUrl: 'https://cdn2.thecatapi.com/images/SCHe-SekW.jpg',
  },
];

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor(private httpClient: HttpClient) {}

  getBreeds() {
    return this.httpClient.get<Breed[]>('https://api.thecatapi.com/v1/breeds');
  }

  getBreedImage(breedId: string) {
    return mockBreedImages.filter(
      (breedImage) => breedImage.breedId === breedId
    );
  }
}
