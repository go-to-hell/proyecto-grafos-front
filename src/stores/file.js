// src/store/modules/file.js
import { defineStore } from 'pinia';
import { useAuthStore } from './auth';

export const useFileStore = defineStore('file', {
    state: () => ({
        files: [],
        graphData: null,
    }),

    actions: {
        async uploadFile(formData) {
            const authStore = useAuthStore();
            const res = await fetch('http://localhost:8081/files', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${authStore.accessToken}`,
                },
                body: formData,
            });

            if (res.ok) {
                const fileResponse = await res.text();
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

        async downloadFile(id, filename) {
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
                const url = window.URL.createObjectURL(fileResponse);
                const link = document.createElement('a');
                link.href = url;
                // Asegurarse de que el archivo tiene la extensión .json
                if (!filename.endsWith('.json')) {
                    filename += '.json';
                }
                link.download = filename;
                link.click();
                window.URL.revokeObjectURL(url);
            } else {
                console.error('Error al descargar el archivo');
                return null;
            }
        },

        async justTheJSON(id) {
            const authStore = useAuthStore();
            console.log(authStore.accessToken)
            const res = await fetch(`http://localhost:8081/files/download/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authStore.accessToken}`,
                },
            });
        
            if (res.ok) {
                const fileResponse = await res.text();
                // Parsea el contenido del archivo a JSON y almacénalo en graphData
                this.graphData = JSON.parse(fileResponse);
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