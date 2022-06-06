import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Detail } from '../detail.module';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-detail-edit',
  templateUrl: './detail-edit.component.html',
  styleUrls: ['./detail-edit.component.css']
})
export class DetailEditComponent implements OnInit {

  constructor(private detailServ: DetailsService,
              private router: Router,
              private route: ActivatedRoute) { }
              
  @ViewChild('f') form: NgForm;
  detail: Detail;

  ngOnInit(): void {
    this.detailServ.getDetail(this.route.snapshot.params['id']).subscribe({
      next: (response: Detail) => {
        this.detail = response;
      }
    });
  }

  onSubmit(){
    this.detail.info = this.form.value.info;
    this.detail.price = this.form.value.price;
    this.detail.kilometers = this.form.value.kilometers;
    this.detail.amount = this.form.value.amount;

    this.detailServ.updateDetail(this.detail.id, this.detail).subscribe({
      next: (response: Detail) => {
        this.router.navigate(['details']);
        this.detailServ.detailChange.next(true);
      }
    });
  }

}
