import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName = 'puppie';
  petImage = 'https://www.google.com/search?q=PET&sxsrf=ACYBGNRByF-8gnqat2PtbvwNG-FakXE7hw:1571715263303&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiG79PP967lAhWNFogKHYK1AhoQ_AUIEigB&biw=1920&bih=903#imgrc=yQSdL6_B1n8slM:';
  constructor() { }
  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }
  ngOnInit() {
  }

}
