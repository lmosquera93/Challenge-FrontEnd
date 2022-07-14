import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms'
import { Travels } from 'src/app/models/travels';
import { TravelsService } from 'src/app/services/travels.service';


@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {


  id: number;
  form: FormGroup;
  @ViewChild('closeAddExpenseModal')
  closeAddExpenseModal!: ElementRef;
  filterPost = '';


  constructor(private formBuilder: FormBuilder, private travelsService: TravelsService) { 
    this.form = this.formBuilder.group({
      id: 0,
      date:['',[Validators.required]],
      cityID: 0,
      vehicleID: 0
    });
  }

  ngOnInit() {
    this.travelsService.listTravels();
  }

  eliminarTravel(id: number) {
    this.travelsService.eliminarTravel(id).subscribe(data =>{
      this.ngOnInit();
    })
  }
  

  createTravel() {
    const travel: Travels = {
      date: this.form.get('date').value,
      cityID: this.form.get('cityID').value,
      vehicleID: this.form.get('vehicleID').value,
    }

    this.travelsService.createTravel(travel).subscribe( data => {
      console.log("Guardado");
      this.form.reset();
      this.ngOnInit();
    })
  }

  updateTravel(travel: Travels) {
    this.id = travel.id;

    this.form.patchValue({
      date: travel.date,
      cityID: travel.cityID,
      vehicleID: travel.vehicleID
    })
  }

  confirmUpdateTravel(){
    const travel: Travels = {
      date: this.form.get('date').value,
      cityID: this.form.get('cityID').value,
      vehicleID: this.form.get('vehicleID').value,
    }

    this.travelsService.updateTravel(this.id, travel).subscribe(data => {
      this.form.reset();
      this.travelsService.listTravels();
    })
  }


}
