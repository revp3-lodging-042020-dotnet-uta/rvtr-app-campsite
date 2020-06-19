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

  accountInfo: Account[] = [];
  @Input() review: Review;


  constructor(private acctService: AccountService) { }
  ngOnInit(): void {
  }

  //use service to GET Accounts
  loadAccount(): void {
    this.acctService.get().subscribe(response => {

      this.accountInfo = response;

    });
  }








}
