import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Role } from '../Role';
import { ROLES } from '../mock-roles';
import { USERS } from '../mock-users';
import { User } from '../User';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {};
  }

  genId<T extends Role | User>(table: T[]): number {
    return; //table.length > 0 ? Math.max(...table.map((t) => t.id)) + 1 : 1;
  }
}
