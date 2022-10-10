import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 110;
  faStar = faStar;
  @Output() ratingClicked: EventEmitter<string>=
  new EventEmitter<string>;

  ngOnChanges(): void {
    this.cropWidth = this.rating * 110/5;
  }

  onClick(){
this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
  }
}
