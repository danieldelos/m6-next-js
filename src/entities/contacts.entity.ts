import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  contactName: string;

  @Column({ length: 45 })
  contactEmail: string;

  @Column({ length: 15 })
  contactPhone: string;

  @CreateDateColumn()
  createAt: string;

  @ManyToOne(()=> User, {cascade: true, onDelete: "CASCADE"})
  user: User

}

export { Contact };
