const users = [];
export class UserRepository {
    static findByEmail(email) {
        return users.find(user => user.email === email);
    }
    static save(user) {
        users.push(user);
    }
    static update(user) {
        const index = users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            users[index] = user;
        }
    }
}
