import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        users: [],
        currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
        accessToken: localStorage.getItem('accessToken') || null,
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

                if (authResponse && authResponse.access_token) {
                    this.accessToken = authResponse.access_token;
                    this.currentUser = user;
                    localStorage.setItem('accessToken', this.accessToken);
                    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                    return true;
                }
            }

            return false;
        },

        logout() {
            this.currentUser = null;
            this.accessToken = null;
            localStorage.removeItem('accessToken');
            localStorage.removeItem('currentUser');
        }
    },
});