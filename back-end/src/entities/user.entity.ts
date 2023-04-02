import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany
} from "typeorm";
import { Contact } from "./contacts.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45, unique:true})
  name: string;

  @Column({ length: 45 })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column({length: 15})
  phone: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @DeleteDateColumn() 
  deletedAt: string;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[]
}

export { User };
