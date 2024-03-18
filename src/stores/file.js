// src/store/modules/file.js
import { defineStore } from 'pinia';
import { useAuthStore } from './auth';

export const useFileStore = defineStore('file', {
    state: () => ({
        files: [],
    }),

    actions: {
        async uploadFile(file) {
            const authStore = useAuthStore();
            const res = await fetch('http://localhost:8081/files', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${authStore.accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: file,
            });

            if (res.ok) {
                const fileResponse = await res.json();
                this.files.push(fileResponse);
                return fileResponse;
            } else {
                console.error('Error al subir el archivo');
                return null;
            }
        },

        async updateFile(fileId, file) {
            const authStore = useAuthStore();
            const formData = new FormData();
            formData.append('file', file);
            const res = await fetch(`http://localhost:8081/files/${fileId}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${authStore.accessToken}`,
                },
                body: formData,
            });

            if (res.ok) {
                const fileResponse = await res.json();
                this.files = this.files.map(f => f.id === fileId ? fileResponse : f);
                return fileResponse;
            } else {
                console.error('Error al actualizar el archivo');
                return null;
            }
        },

        async deleteFile(fileId) {
            const authStore = useAuthStore();
            const res = await fetch(`http://localhost:8081/files/${fileId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${authStore.accessToken}`,
                },
            });

            if (res.ok) {
                this.files = this.files.filter(f => f.id !== fileId);
                return true;
            } else {
                console.error('Error al borrar el archivo');
                return false;
            }
        },

        async downloadFile(id) {
            const authStore = useAuthStore();
            console.log(authStore.accessToken)
            const res = await fetch(`http://localhost:8081/files/download/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authStore.accessToken}`,
                },
            });

            if (res.ok) {
                const fileResponse = await res.blob();
                return fileResponse;
            } else {
                console.error('Error al descargar el archivo');
                return null;
            }
        },

        async listFiles() {
            const authStore = useAuthStore();
            const res = await fetch('http://localhost:8081/files/list', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authStore.accessToken}`,
                },
            });

            if (res.ok) {
                const files = await res.json();
                this.files = files;
                return files;
            } else {
                console.error('Error al listar los archivos');
                return null;
            }
        },
    },
});