import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

  editedProduct: any;

  constructor(public activeModal: NgbActiveModal) {
  
  } // Inject NgbActiveModal

  editProduct(): void {
    // Implement your logic to add a product
    // Once the product is added, you can close the modal
    this.activeModal.close(this.editedProduct);
  }

}
