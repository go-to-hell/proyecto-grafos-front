<template>
  <div class="d-flex flex-column align-items-start justify-content-start w-100 py-5">
      <button @click="goBack" class="btn btn-secondary position-absolute top-0 start-0 mt-3 ms-3">
          <i class="bi bi-arrow-left"></i>
      </button>


      <h2 class="display-4 fw-bold">Registrarse</h2>

      <p class="text-muted">
      Crea una nueva cuenta para acceder a todas las funciones.
      </p>
  </div>
  <div class="container" style="max-width: 600px;">
      <form @submit.prevent="submitForm">

          <div class="d-flex flex-column">
              <input
              type="text"
              placeholder="Ingresa tu nombre"
              :class="inputClasses"
              v-model="name"
              />

              <input
              type="text"
              placeholder="Ingresa tu apellido"
              :class="inputClasses"
              v-model="lastname"
              />

              <input
              type="email"
              placeholder="Ingresa tu dirección email"
              :class="inputClasses"
              v-model="email"
              />

              <input
              type="password"
              placeholder="Ingresa tu contraseña"
              :class="inputClasses"
              v-model="password"
              />

              <input
              type="password"
              placeholder="Ingresa nuevamente tu contraseña"
              :class="inputClasses"
              v-model="repeatedPassword"
              />
          </div>

          <div class="d-flex flex-column align-items-center justify-content-center mt-3">
              <button :class="buttonClasses" type="submit">
                  <span>Registrarse</span>
              </button>
          </div>
      </form>
  </div>
</template>


<script>
  import { ref, computed } from 'vue';
  import { useAuthStore } from '../stores/auth';
  import { useRouter } from 'vue-router';

  export default {
      setup() {
          const authStore = useAuthStore();
          const router = useRouter();

          const name = ref('');
          const lastname = ref('');
          const email = ref('');
          const password = ref('');
          const repeatedPassword = ref('');

          const inputClasses = computed(() => 'form-control mb-3');
          const buttonClasses = computed(() => 'btn btn-primary w-full md:w-auto d-flex justify-content-center align-items-center p-6 space-x-4 font-weight-bold text-white rounded-md px-9 bg-black shadow-black-100 hover-bg-opacity-90 shadow-sm hover-shadow-lg border transition hover-translate-y-0.5 duration-150');

          const submitForm = () => {
              console.log('Enviando formulario...');
              if (email.value.length > 0 && password.value.length > 0) {
                  if (password.value === repeatedPassword.value) {
                      authStore.addUser({
                          name: name.value,
                          lastname: lastname.value,
                          email: email.value,
                          password: password.value,
                      });
                      // Lógica adicional, como enviar datos al servidor, etc.

                      name.value = '';
                      lastname.value = '';
                      email.value = '';
                      password.value = '';
                      repeatedPassword.value = '';
                      router.push('/');
                  } else {
                      alert('Las contraseñas no coinciden');
                  }
              } else {
                  alert('Por favor, completa todos los campos');
              }
          };

          const goBack = () => {
              router.go(-1);
          };

          return {
              name,
              lastname,
              email,
              password,
              repeatedPassword,
              inputClasses,
              buttonClasses,
              submitForm,
              goBack,
          };
      },
  };
</script>