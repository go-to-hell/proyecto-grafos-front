// src/store/modules/form.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        users: [
            { name: 'Admin', lastname: 'Admin', email: 'admin@gmail.com', password: 'admin' },
            { name: 'John', lastname: 'Doe', email: 'johndoe@gmail.com', password: '123456' },
            { name: 'Jane', lastname: 'Doe', email: 'janedoe@gmail.com', password: 'password' },
        ],
        currentUser: null,
    }),

    actions: {
        addUser(user) {
            this.users.push(user);
        },
        checkUser(user) {
            const foundUser = this.users.find(
                (u) => u.email === user.email && u.password === user.password
            );

            if (foundUser) {
                this.currentUser = foundUser;
                return true;
            }

            return false;
        },

        logout() {
            // Lógica para cerrar sesión, por ejemplo, reiniciar currentUser a null
            this.currentUser = null;
        }
    },
});
