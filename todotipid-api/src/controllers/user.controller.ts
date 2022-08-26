import { UserService } from '../service/user.service';

export class UserController {

	private userService: UserService;

	constructor() {
		this.userService = new UserService();
	}

	// async getUsers() {
	// 	return await this.userService.getUsers();
	// }

	// async createUser(user: any) {
	// 	return await this.userService.createUser(user);
	// }

	// async updateUser(user: any) {
	// 	return await this.userService.updateUser(user);
	// }

	// async deleteTask(userId: any) {
	// 	return await this.userService.deleteUser(userId);
	// }

	async login(token: string) {
		return await this.userService.login(token);
	}
}