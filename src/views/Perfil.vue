<template>
  <div class="profile-page container mt-5">
    <!-- Botón para volver al Dashboard -->
    <button @click="goDashboard" class="btn btn-primary mb-3">Volver al Dashboard</button>

    <!-- Carrusel de participantes -->
    <div id="participantsCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(participant, index) in participants" :key="index" :class="{ 'carousel-item': true, 'active': index === 0 }">
          <div class="row g-5 justify-content-center">
            <div class="col-md-6 mb-5">
              <div class="card">
                <img class="card-img-top mx-auto mt-3 fixed-size-img rounded" :src="participant.photoPath" alt="Foto de perfil" @error="handleImageError">
                <div class="card-body profile-container">
                  <h1 class="card-title">{{ participant.name }}</h1>
                  <p class="card-text">Email: {{ participant.email }}</p>
                  <p class="card-text">{{ participant.about }}</p>
                  <p class="card-text">{{ participant.about2 }}</p>
                  <p class="card-text">{{ participant.about3 }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#participantsCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#participantsCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
// Importa las dependencias necesarias
import OscarCampohermoso_photo from "../assets/OscarCampohermoso.jpg";
import AlejandroCarrasco_photo from "../assets/AlejandroCarrasco.jpg";
import OscarMenacho_photo from "../assets/OscarMenacho.jpg";
import SebastianOrias_photo from "../assets/SebastianOrias.jpg";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      participants: [
        {
          name: 'Oscar Campohermoso',
          email: 'oscar.campohermoso@ucb.edu.bo',
          about: 'Edad: 21',
          about2: 'Ingeniería en Sistemas',
          about3: '7° Semestre',
          photoPath: OscarCampohermoso_photo,
        },
        {
          name: 'Alejandro Carrasco',
          email: 'alejandro.carrasco@ucb.edu.bo',
          about: 'Edad: 21 años',
          about2: 'Carrera: Ingeniería en Sistemas',
          about3: '7° semestre',
          photoPath: AlejandroCarrasco_photo,
        },
        {
          name: 'Oscar Menacho',
          email: 'oscar.menacho@ucb.edu.bo',
          about: 'Edad: 22 años',
          about2: 'Carrera: Ingeniería en Sistemas',
          about3: '6°semestre',
          photoPath: OscarMenacho_photo,
        },
        {
          name: 'Sebastian Orias',
          email: 'sebastian.orias@ucb.edu.bo',
          about: 'Edad: 22 años',
          about2: 'Carrera: Ingeniería en Sistemas',
          about3: '6°semestre',
          photoPath: SebastianOrias_photo,
        },
      ],
    };
  },
  methods: {
    handleImageError(event) {
      console.error('Error loading image:', event.target.src);
    },

    // Método para ir al Dashboard
    goDashboard() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.fixed-size-img {
  width: 200px; /* Ajusta el tamaño deseado */
  height: 200px; /* Ajusta el tamaño deseado */
  object-fit: cover; /* O ajusta según tu preferencia */
}
</style>
