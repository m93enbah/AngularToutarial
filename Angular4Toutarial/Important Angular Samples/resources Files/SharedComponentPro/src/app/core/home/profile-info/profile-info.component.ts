import { Component, OnInit, OnChanges } from '@angular/core';
import { UserDetail } from 'src/app/shared/models/models';
import { ProfileSettingsService } from '../../services/profile-settings.service';

@Component({
  selector: 'shc-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit, OnChanges {
  profileInfo: UserDetail;
  constructor(private profileService: ProfileSettingsService) { }

  ngOnInit() {
    this.profileService.currentUser.subscribe(user => this.profileInfo = user);
  }

  ngOnChanges() {
    this.profileService.currentUser.subscribe(user => this.profileInfo = user);
  }

}
