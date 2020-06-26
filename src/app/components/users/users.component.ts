import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/app/Role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  availableRoles: Role[];

  constructor(
    private userService: UserService,
    private roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.getRoles();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  getRoles(): void {
    this.roleService
      .getRoles()
      .subscribe((roles) => (this.availableRoles = roles));
  }

  addUser(newUsername: string, newUserRoleId: string): void {
    newUsername = newUsername.trim();

    if (!newUsername || !newUserRoleId) {
      return;
    }

    this.userService
      .addUser({ username: newUsername, roleId: newUserRoleId } as User)
      .subscribe((user) => this.users.push(user));
  }
}
