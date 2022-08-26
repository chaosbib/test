import { Table, Column, Model, PrimaryKey, AutoIncrement, NotNull } from 'sequelize-typescript'

@Table({ tableName: `user-${process.env.ENVIRONMENT}`})
export class User extends Model {
  
  @PrimaryKey
  @AutoIncrement
  @Column
  userId: number;

  @Column
  email: string;

  @Column
  firstName: string;

  @Column
  lastName: string;
}