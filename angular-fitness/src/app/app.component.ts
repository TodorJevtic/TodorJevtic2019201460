import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from './auth/profile/profile.component';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-avio';
  profileOpened: boolean = false;

  constructor(public userService: UserService, private dialog: MatDialog) { }

  openProfile(userId: number) {
    if(this.userService.currentUser !== UserService.dummyUserList[0]){
      this.profileOpened = true;
      const profileDialog = this.dialog.open(ProfileComponent, {
        disableClose: true,
        width: "30vw",
        data: { user: this.userService.getUserById(userId) }
      });
  
      profileDialog.afterClosed().subscribe(result => {
        this.profileOpened = false;
      })
    }else{
      alert('There is no logged user');
    }
    
  }
  userLogout(){
    if(this.userService.currentUser == this.userService.defaultUser){
      alert('There is no logged user');
    }else
    this.userService.currentUser = this.userService.defaultUser;
  }
}
