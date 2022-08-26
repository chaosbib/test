import { connect } from "../config/db";
import { User } from "../model/user.model"

export class UserRepository {

  private db: any = {};
  private userRepository: any;

  constructor() {
    this.db = connect();
    this.userRepository = this.db.sequelize.getRepository(User);
  }

  // async getUsers() {
  //   try {
  //     const users = await this.userRepository.findAll({
  //       where: {
  //         email: 'chaosbib@gmail.com'
  //       }
  //     });
  //     console.log('users:::', users);
  //     return users;
  //   } catch (err) {
  //     console.error(err);
  //     return [];
  //   }
  // }

  async getUser(email: string) {
    try {
      return await this.userRepository.findAll({
        where: {
          email: email
        }
      })
    } catch (error) {
      console.error(error);
      return []
    }
  }

  // async createUser(user: User) {
  //   let data = {};
  //   try {
  //     data = await this.userRepository.create(user);
  //   } catch(err) {
  //     console.error('Error::' + err);
  //   }
  //   return data;
  // }

  // async updateUser(user: any) {
  //   let data = {};
  //   try {
  //     data = await this.userRepository.update({...user}, {
  //       where: {
  //         userId: user.userId
  //       }
  //     });
  //   } catch(err) {
  //     console.error('Error::' + err);
  //   }
  //   return data;
  // }

  // async deleteUser(userId: string) {
  //   let data = {};
  //   try {
  //     data = await this.userRepository.destroy({
  //       where: {
  //         userId: userId
  //       }
  //     });
  //   } catch(err) {
  //     console.error('Error::' + err);
  //   }
  //   return data;
  // }
}