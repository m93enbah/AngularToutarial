import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormControlName } from '@angular/forms';
import { UserDetail } from 'src/app/shared/models/models';
import { ProfileSettingsService } from '../services/profile-settings.service';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'shc-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  userForm: FormGroup;
  departments: SelectItem[];
  countries: SelectItem[];
  cities: SelectItem[];
  occupations: SelectItem[];
  profileInfo: UserDetail;

  overallIssuance: any[];
  policiesPerApplication: any[];
  policyStatusPerApplication: any[];
  successfulDealsPremiumPerProduct: any[];
  PremiumPerInsurer: any[];
  PremiumPerClass: any[];

  constructor(private profileService: ProfileSettingsService) { }

  ngOnInit() {
    this.overallIssuance = this.profileService.overallIssuance();
    this.policiesPerApplication = this.profileService.policiesPerApplication();
    this.policyStatusPerApplication = this.profileService.policyStatusPerApplication();
    this.successfulDealsPremiumPerProduct = this.profileService.successfulDealsPremiumPerProduct();
    this.PremiumPerInsurer = this.profileService.PremiumPerInsurer();
    this.PremiumPerClass = this.profileService.PremiumPerClass();

    this.profileService.currentUser.subscribe(user => this.profileInfo = user);

    this.profileService.currentDep.subscribe(dep => this.departments = dep);
    this.profileService.currentCountries.subscribe(count => this.countries = count);
    this.profileService.currentCities.subscribe(cities => this.cities = cities);
    this.profileService.currentOccupation.subscribe(occup => this.occupations = occup);
    this.initUserForm();
  }

  onBasicUpload(event) {
    if ((<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files[0]) {
      const file = (<HTMLInputElement>event.target).files[0];

      const reader = new FileReader();

      reader.onload = e => this.profileInfo.img = reader.result.toString();

      reader.readAsDataURL(file);
    }
  }

  initUserForm() {
    this.userForm = new FormGroup({
      name: new FormControl(this.profileInfo.name),
      username: new FormControl(this.profileInfo.username),
      email: new FormControl(this.profileInfo.email),

      country: new FormControl(this.profileInfo.country),
      city: new FormControl(this.profileInfo.city),
      address: new FormControl(this.profileInfo.address),

      occupation: new FormControl(this.profileInfo.occupation),
      dateOfBirth: new FormControl(this.profileInfo.dateOfBirh),
      mobileNumber: new FormControl(this.profileInfo.mobileNumber),

      phoneNumber: new FormControl(this.profileInfo.phoneNumber),
      ZIPCode: new FormControl(this.profileInfo.ZIPCode),
      POBox: new FormControl(this.profileInfo.POBox),
      department: new FormControl(this.profileInfo.department)
    });
  }

  onUpdate(value: any) {
    this.profileService.updateUser(value);
    console.log(value);
  }

}
