import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() rating:number = 0;
  constructor() { }

  ngOnInit() {
    if(!this.rating){
      this.rating = 0;
    }else{
      this.rating = Math.round(this.rating);
    }
  }

}
