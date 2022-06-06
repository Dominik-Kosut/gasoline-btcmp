import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CarsService } from '../cars/cars.service';
import { Detail } from '../details/detail.module';
import { DetailsService } from '../details/details.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private detailServ: DetailsService,
              private carServ: CarsService,
              private router: Router) { }
              
  @ViewChild('f') form: NgForm;

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form);
  
    this.detailServ.addNewDetail(
      this.carServ.getCarId(),
      new Detail(0, this.form.value.info, this.form.value.price, this.form.value.kilometers, this.form.value.amount) 
      ).subscribe({
        next: () => {
        this.form.reset();
        this.router.navigate(['/details']);
        this.detailServ.detailChange.next(true);
        }
      });
    }

}
