import { User } from '../models/user';

const users: User[] = [];

export class UserRepository {
  static findByEmail(email: string): User | undefined {
    return users.find(user => user.email === email);
  }

  static save(user: User): void {
    users.push(user);
  }

  static update(user: User): void {
    const index = users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      users[index] = user;
    }
  }
}
