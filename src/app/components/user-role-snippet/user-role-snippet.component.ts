import { Component, OnInit, Input } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-user-role-snippet',
  templateUrl: './user-role-snippet.component.html',
  styleUrls: ['./user-role-snippet.component.css'],
})
export class UserRoleSnippetComponent implements OnInit {
  @Input() roleId: string;
  role: string;

  constructor(private roleService: RoleService) {}

  ngOnInit(): void {
    //this.getRole();
  }

  getRole(): void {
    this.roleService
      .getRole(this.roleId)
      .subscribe((role) => (this.role = role.name));
  }
}
