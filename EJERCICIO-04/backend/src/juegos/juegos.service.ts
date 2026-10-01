import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {
    private juegos = [
        { id: 1, nombre: 'The Legend of Zelda: Breath of the Wild', genero: 'Aventura' },
        { id: 2, nombre: 'Super Mario Odyssey', genero: 'Plataforma' },
        { id: 3, nombre: 'The Witcher 3: Wild Hunt', genero: 'RPG' },
        { id: 4, nombre: 'Overwatch', genero: 'Shooter' },
    ]


findAll(genero?: string) {
  if (!genero) return this.juegos;
  return this.juegos.filter(j => j.genero === genero);
}
}
