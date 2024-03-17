// src/store/modules/form.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        users: [],
        currentUser: null,
    }),

    getters: {
        isLoggedIn() {
            return this.currentUser !== null;
        },
    },

    actions: {
        async addUser(user) {
            this.users.push(user);

            const res = await fetch('http://localhost:8081/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (res.ok) {
                console.log('Usuario creado');
            } else {
                console.error('Error al crear el usuario');
            }
        },
        async checkUser(user) {
            const res = await fetch('http://localhost:8081/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (res.ok) {
                const authResponse = await res.json();

                // Comprobar que authResponse tiene un token de acceso
                if (authResponse && authResponse.access_token) {
                    this.accessToken = authResponse.access_token;
                    this.refreshToken = authResponse.refresh_token;
                    this.currentUser = user; // Establecer currentUser cuando el usuario se loguea
                    return true;
                }
            }

            return false;
        },

        logout() {
            // Lógica para cerrar sesión, por ejemplo, reiniciar currentUser a null
            this.currentUser = null;
        }
    },
});
