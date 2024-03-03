<template>
  <div class="profile-page container mt-5">
    <div class="row g-5 justify-content-center">
      <div class="col-md-6 mb-5" v-for="(participant, index) in participants.slice(0, 2)" :key="index">
        <div class="card">
          <img class="card-img-top mx-auto mt-3 img-fluid" :src="participant.photoPath" alt="Foto de perfil" @error="handleImageError">
          <div class="card-body profile-container">
            <h1 class="card-title">{{ participant.name }}</h1>
            <p class="card-text">Email: {{ participant.email }}</p>
            <p class="card-text">Edad: {{ participant.about }}</p>
            <p class="card-text">Carrera: {{ participant.about2 }}</p>
            <p class="card-text">Semestre: {{ participant.about3 }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-5" v-for="(participant, index) in participants.slice(2)" :key="index">
        <div class="card">
          <img class="card-img-top mx-auto mt-3 img-fluid" :src="participant.photoPath" alt="Foto de perfil" @error="handleImageError">
          <div class="card-body profile-container">
            <h1 class="card-title">{{ participant.name }}</h1>
            <p class="card-text">Email: {{ participant.email }}</p>
            <p class="card-text">Edad: {{ participant.about }}</p>
            <p class="card-text">Carrera: {{ participant.about2 }}</p>
            <p class="card-text">Semestre: {{ participant.about3 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OscarCampohermoso_photo from "../assets/OscarCampohermoso.jpg";
import AlejandroCarrasco_photo from "../assets/AlejandroCarrasco.jpg";
import OscarMenacho_photo from "../assets/OscarMenacho.jpg";
import SebastianOrias_photo from "../assets/SebastianOrias.jpg";

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
  },
};
</script>
