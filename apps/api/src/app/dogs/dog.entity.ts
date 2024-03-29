import { Entity, Column } from 'typeorm';

@Entity('dogs')
export class DogEntity {
  @Column({ primary: true, generated: 'uuid' })
  id: string;

  @Column()
  name: string;

  @Column()
  breed: string;

  @Column()
  age: number;

  @Column()
  gender: string;

  @Column()
  photoUrl: string;
}
