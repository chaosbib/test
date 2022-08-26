import { Table, Column, Model, PrimaryKey, AutoIncrement, NotNull } from 'sequelize-typescript'

@Table({ tableName: "session"})
export class User extends Model {
  
  @PrimaryKey
  @AutoIncrement
  @Column
  sessionId: number;

  @Column
  email: string;

  @Column
  expiration: number;
}