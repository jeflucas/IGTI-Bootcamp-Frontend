import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input()
  rating!: number;

  @Output() onRatingChange = new EventEmitter<number>();

  onClick(i: number){
    this.onRatingChange.emit(i);
  }
}
