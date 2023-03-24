import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  contactName: string;

  @Column({ length: 45 })
  contactEmail: string;

  @Column({ length: 15 })
  contactPhone: string;

  @CreateDateColumn()
  createAt: string;
}

export { Contact };
