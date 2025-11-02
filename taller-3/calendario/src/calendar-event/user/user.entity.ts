import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RefreshToken } from '../../refresh-token/entities/refresh-token.entity';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => RefreshToken, (refreshToken) => refreshToken.user)
  refreshToken!: RefreshToken[];
}
