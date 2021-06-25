import { Injectable } from '@angular/core';
import { UserDetail } from 'src/app/shared/models/models';
import { SelectItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileSettingsService {
  private user: UserDetail;
  private departments: SelectItem[];
  private countries: SelectItem[];
  private cities: SelectItem[];
  private occupation: SelectItem[];
  private userSource;
  private departmentSource;
  private citiesSource;
  private countriesSource;
  private occupationSource;

  currentUser;
  currentDep;
  currentCities;
  currentCountries;
  currentOccupation;


  constructor() {
    // initiate section

    this.departments = this.initDepartment();
    this.cities = this.initCities();
    this.countries = this.initCountries();
    this.occupation = this.initOccupation();
    this.user = this.initUser();

    // end

    // create subject section
    //to share date between independent components { HomeComponent, UserSettingsComponent }
    this.departmentSource = new BehaviorSubject(this.departments);
    this.citiesSource = new BehaviorSubject(this.cities);
    this.countriesSource = new BehaviorSubject(this.countries);
    this.occupationSource = new BehaviorSubject(this.occupation);
    this.userSource = new BehaviorSubject(this.user);

    // end
    this.currentUser = this.userSource.asObservable();
    this.currentCities = this.citiesSource.asObservable();
    this.currentCountries = this.countriesSource.asObservable();
    this.currentOccupation = this.occupationSource.asObservable();
    this.currentDep = this.departmentSource.asObservable();

  }

  initUser() {
    return this.user = {
      name: "Sally Z.",
      username: "Admin",
      lastAccess: new Date(),
      phoneNumber: '962-555-123',
      mobileNumber: '+962-777-45678',
      email: 'Admin@Eska.com',
      country: this.countries[0].value,
      city: this.cities[0].value,
      address: 'Amman - 5th Circle',
      department: this.departments[0].value,
      occupation: this.occupation[0].value,
      dateOfBirh: new Date(1988, 5, 14),
      POBox: 11180,
      ZIPCode: 5988744,
      img: "../../../../assets/images/user1-128x128.jpg"
    };
  }

  initDepartment() {
    return this.departments = [
      { label: 'الادارة العامة', value: 'الادارة العامة' },
      { label: 'الادارة المالية', value: 'الادارة المالية' },
      { label: 'التدقيق المالي', value: 'التدقيق المالي' }

    ];
  }

  initCountries() {
    return this.countries = [
      { label: 'Jordan', value: 'Jordan' },
      { label: 'UAE', value: 'UAE' },
      { label: 'USA', value: 'USA' }
    ]
  }

  initCities() {
    return this.cities = [
      { label: 'Amman', value: 'amman' },
      { label: 'Irbid', value: 'irbid' },
      { label: 'Zarqa', value: 'zarqa' }
    ]
  }

  initOccupation() {
    return this.occupation = [
      { label: 'Senior Broker', value: 'Senior Broker' },
      { label: 'Adjustment Clerk', value: 'Adjustment Clerk' },
      { label: 'Civil Engineer', value: 'Civil Engineer' },
      { label: 'Accounting Specialist', value: 'Accounting Specialist' }
    ]
  }

  updateUser(user: UserDetail) {
    user.img = this.user.img;
    user.lastAccess = this.user.lastAccess;
    this.userSource.next(user);
  }

  overallIssuance(): any[] {
    return [
      { label: 'General BMS', value: true },
      { label: 'General BMS', value: false },
      { label: 'General BMS', value: false },
      { label: 'General BMS', value: true },
    ];
  }

  policiesPerApplication(): any[] {
    return [
      { label: 'General BMS', value: true },
      { label: 'Life BMS', value: false },
      { label: 'Reinsurance BMS', value: true },
      { label: 'Reinsurance BMS', value: false },

    ];
  }

  policyStatusPerApplication(): any[] {
    return [
      { label: 'General BMS', value: true },
      { label: 'Life BMS', value: false },
      { label: 'Reinsurance BMS', value: true },
      { label: 'Reinsurance BMS', value: false },
      { label: 'General BMS', value: true },
      { label: 'Life BMS', value: false },
      { label: 'Reinsurance BMS', value: true },
      { label: 'Reinsurance BMS', value: false },
      { label: 'General BMS', value: true },
      { label: 'Life BMS', value: false },
      { label: 'Reinsurance BMS', value: true },
      { label: 'Reinsurance BMS', value: false },
    ];
  }

  successfulDealsPremiumPerProduct(): any[] {
    return [
      { label: 'General BMS', value: true },
      { label: 'General BMS', value: false },
      { label: 'General BMS', value: true },
      { label: 'Life BMS', value: false },
      { label: 'Life BMS', value: true },
      { label: 'Life BMS', value: false },
      { label: 'Reinsurance BMS', value: true },
      { label: 'Reinsurance BMS', value: false },
      { label: 'Reinsurance BMS', value: true },
    ];
  }

  PremiumPerInsurer(): any[] {
    return [
      { label: 'General BMS', value: true },
      { label: 'Life BMS', value: false },
      { label: 'Reinsurance BMS', value: true },
    ];
  }

  PremiumPerClass() {
    return [
      { label: 'General BMS', value: true },
      { label: 'Life BMS', value: false },
      { label: 'Reinsurance BMS', value: true },
    ];
  }
}
