import { UserRepository } from '../repository/user.repository';
import jwt_decode from 'jwt-decode';
import { JwtDecoded } from '../model/JwtDecoded';

export class UserService {

  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  // async getUsers() {
  //   return await this.userRepository.getUsers();
  // }

  // async createUser(user: any) {
  //   return await this.userRepository.createUser(user);
  // }

  // async updateUser(user: any) {
  //   return await this.userRepository.updateUser(user);
  // }

  // async deleteUser(userId: any) {
  //   return await this.userRepository.deleteUser(userId);
  // }

  async login(token: string) {
    const jwtDecoded: JwtDecoded = jwt_decode(token);
    console.log(jwtDecoded);
    return this.userRepository.getUser(jwtDecoded.email);
  }
}