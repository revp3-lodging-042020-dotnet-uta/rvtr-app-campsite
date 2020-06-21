import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/data/review.model';
import { AccountService } from 'src/app/services/account/account.service';
import { Account } from 'src/app/data/account.model';

@Component({
  selector: 'uic-lodging-review',
  templateUrl: './lodging-review.component.html',
  styleUrls: ['./lodging-review.component.scss']
})
export class LodgingReviewComponent implements OnInit {

  accountInfo: Account;
  @Input() review: Review;
  @Input() displayComment = false;

  constructor(private acctService: AccountService) { }

  ngOnInit(): void {
  }

  loadAccountInfo(): void {
    this.acctService.get(this.review.accountId).subscribe(response => {
      if (response.length > 0) {
        this.accountInfo = response[0];
      }
    });
  }
}
