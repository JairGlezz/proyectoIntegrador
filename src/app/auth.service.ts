import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  isLoggedIn(): boolean {
    // Implementa la lógica para verificar si el usuario está autenticado
    // Por ejemplo, podrías verificar si hay un token válido en el almacenamiento local
    const token = localStorage.getItem('token'); // Suponiendo que usas localStorage para almacenar el token
    return !!token; // Devuelve true si hay un token, de lo contrario false
  }
}
