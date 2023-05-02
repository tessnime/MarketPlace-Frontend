import { Component,OnInit } from '@angular/core';
import { ClaimreviewserviceService } from '../sevice/claimreviewservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'Models/Review';
import { Product } from 'Models/Product';
import { User } from 'Models/User';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss','../../../../assets/front-template/css/vendor.css','../../../../assets/front-template/css/utility.css','../../../../assets/front-template/css/app.css']
})
export class ReviewComponent implements OnInit{

  id:number=0;
  review!:Review[];
  review1!:Review[];
  product:Product=new Product;
  user:User=new User;
  isTabCollapsed = false;
  filteredReviews: Review[] = [];

  ngOnInit(): void {
    this.claimService.getUserSession().subscribe(data=>{this.user=data;
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.claimService.getProductById(this.id).subscribe(data=>{this.product=data
    this.getallreview();
  })
  })
  }

  deleteReview(idr:number)
  {
    this.claimService.deleteReview(idr).subscribe(data=>{this.refresh();});
  }


  getFloor(integer: number): number {
    return Math.floor(integer);
  }
  countArray(n: number): number[] {
    return Array.from({length: n}, (_, index) => index + 1);
  }

  rate:number=0;

  setRate(rt:number)
  {
    alert(rt);
    this.rate=rt;
  }

  getallreview(){this.claimService.getAllReviews().subscribe(
    (data) => {
      this.review = data;
      for(let i=0;i<this.review.length;i++) {
        if (this.review[i].product.id != this.id) {
          this.review.splice(i, 1);
        }
      }
      this.filteredReviews = this.review.sort((a, b) => b.rating - a.rating);
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );}
  constructor(private claimService:ClaimreviewserviceService,private router:Router,private route: ActivatedRoute) { }


  gotoHome()
  {
    this.router.navigate(["/buyer"]);
  }
  gotoCart()
  {
    this.router.navigate(["/buyer/cart"]);
  }
  review2:Review=new Review;

  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
    window.scroll(0,0);
  }


  addReview()
  {
    this.claimService.addReview(this.review2,this.id,this.rate).subscribe(data=>{this.refresh();});

  }

  toggleRating() {
    this.isTabCollapsed = !this.isTabCollapsed;
  }

  sortReviewsAscending() {
    this.filteredReviews = this.review.sort((a, b) => a.rating - b.rating);
  }

  sortReviewsDescending() {
    this.filteredReviews = this.review.sort((a, b) => b.rating - a.rating);
  }


  onSortChange(event: Event) {
    const sortOrder = (event.target as HTMLSelectElement).value;
    if (sortOrder === 'asc') {
      this.sortReviewsAscending();
    } else {
      this.sortReviewsDescending();
    }
  }


}
