import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  pageTitle = 'Product List !';
  imageWidth = 50;
  imageMargin = 2;
  showImage: boolean = false;
  private _listFilter: string = '';
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  errorMessage = '';
  sub!: Subscription;

  constructor(private productService: ProductService) {}

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        (this.products = products), (this.filteredProducts = this.products);
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(this.listFilter)
    );
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string) {
    this.pageTitle = 'Product list:' + message;
  }
}
