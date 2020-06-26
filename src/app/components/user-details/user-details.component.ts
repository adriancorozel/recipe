import { Component, OnInit, Input } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';
import { UserWithDetails } from 'src/app/User';
import { Role } from 'src/app/Role';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: UserWithDetails;
  role: Role;
  newRole: Role;
  availableRoles: Role[];

  constructor(
    private roleService: RoleService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getRoles();
  }

  getRole(id: string): void {
    this.roleService.getRole(id).subscribe((role) => {
      this.role = role;
      this.newRole = role;
    });
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserWithDetails(id).subscribe((user) => {
      this.user = user;
      this.getRole(user.roleId);
    });
  }

  getRoles(): void {
    this.roleService
      .getRoles()
      .subscribe((roles) => (this.availableRoles = roles));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.userService.updateUser(this.user).subscribe(() => this.goBack());
  }
}
