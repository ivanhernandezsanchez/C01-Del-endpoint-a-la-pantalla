import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
    private mascotas = [
        { id: 1, nombre: 'Rex', especie: 'Perro' },
        { id: 2, nombre: 'Luna', especie: 'Gato' },
        { id: 3, nombre: 'Simba', especie: 'León' }
    ];

    findOne(id: number) {
        return this.mascotas.find(m => m.id === id);
    }
}
