import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {

  patientName : string;
  medicine : string;
  dosage : string;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.applyParamsValuesFromQueryString();
  }

  private applyParamsValuesFromQueryString(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.patientName = params['patientname'];
      this.medicine = params['medicine'];
      this.dosage = params['dosage'];
    });
  } 

}
