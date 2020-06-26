import { Component, OnInit, Input } from '@angular/core';
import { Role } from 'src/app/Role';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent implements OnInit {
  roles: Role[];

  constructor(
    private roleService: RoleService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void {
    this.roleService.getRoles().subscribe((roles) => (this.roles = roles));
  }

  addRole(newRole: string): void {
    newRole = newRole.trim();

    if (!newRole) {
      return;
    }

    this.roleService
      .addRole({ name: newRole } as Role)
      .subscribe(() => this.getRoles());
  }

  deleteRole(role: Role): void {
    this.userService.getUsers().subscribe((users) => {
      if (!users.find((user) => user.roleId === role.id)) {
        this.roleService.deleteRole(role).subscribe((deletedRole) => {
          this.roles = this.roles.filter((h) => h !== role);
        });
      }
    });
  }
}
