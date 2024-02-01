import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModal from ng-bootstrap
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; // Import NgbActiveModal from ng-bootstrap
import { ProductService, Product } from '../../services/product.service';
import { ProductAddComponent } from '../../modals/product-add/product-add.component';
import { ProductEditComponent } from '../../modals/product-edit/product-edit.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private modalService: NgbModal
  ) {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = this.productService.getProducts();
  }

  openAddProductModal(): void {
    const modalRef = this.modalService.open(ProductAddComponent);
    modalRef.result.then((newProduct: Product) => {
      if (newProduct) {
        this.productService.addProduct(newProduct);
        this.loadProducts();
      }
    });
  }

  openEditProductModal(productId: number): void {
    const productToEdit = this.products.find(p => p.id === productId);
    const modalRef = this.modalService.open(ProductEditComponent);
    modalRef.componentInstance.editedProduct = { ...productToEdit }; // Pass a copy to avoid editing original product directly
    modalRef.result.then((updatedProduct: Product) => {
      if (updatedProduct) {
        this.productService.updateProduct(updatedProduct);
        this.loadProducts();
      }
    });
  }

  deleteProduct(productId: number | undefined): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId);
      this.loadProducts();
    }
  }
}
