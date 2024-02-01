import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; // Import NgbActiveModal

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  newProduct: any = {}; // Assuming you have a newProduct object to bind form inputs

  constructor(public activeModal: NgbActiveModal) {} // Inject NgbActiveModal

  addProduct(): void {
    // Implement your logic to add a product
    // Once the product is added, you can close the modal
    this.activeModal.close(this.newProduct);
  }
}
