export interface User {
  id: string;
  username: string;
  roleId: string;
}

export interface UserWithDetails extends User {
  email: string;
  name: string;
  isLocked: boolean;
}
