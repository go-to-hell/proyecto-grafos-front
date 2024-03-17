<template>
  <div>
    <!-- NavBar -->
    <NavBar />

    <!-- Carousel wrapper -->
    <div id="carouselBasicExample" class="carousel slide carousel-fade d-none d-md-block" data-bs-ride="carousel" data-bs-carousel-init>
      <!-- Indicators -->
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          type="button"
          :data-bs-target="'#carouselBasicExample'"
          :data-bs-slide-to="index"
          :class="{ 'active': currentSlide === index }"
          :aria-label="'Slide ' + (index + 1)"
          @click="currentSlide = index"
        ></button>
      </div>

      <!-- Inner -->
      <div class="carousel-inner">
        <!-- Single item -->
        <div class="carousel-item active">
          <div class="image-container">
            <img src="../assets/g2.png" class="d-block w-100" alt="Sunset Over the City"/>
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>¿Qué es un Grafo?</h5>
            <p>Los grafos son estructuras discretas que constan de vértices y aristas que conectan entre sí esos vértices. Por lo tanto, un grafo G consta de dos partes: 1) Un conjunto V = V(G) cuyos elementos se denominan vértices, puntos o nodos de G.</p>
          </div>
        </div>

        <!-- Single item -->
        <div class="carousel-item">
          <div class="image-container">
            <img src="../assets/g1.png" class="d-block w-100" alt="Canyon at Nigh"/>
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>¿Qué es un Algoritmo?</h5>
            <p>Se llaman algoritmos al conjunto de instrucciones sistemáticas y previamente definidas que se utilizan para realizar una determinada tarea. Estas instrucciones están ordenadas y acotadas a manera de pasos a seguir para alcanzar un objetivo.</p>
          </div>
        </div>
      </div>
      <!-- Inner -->

      <!-- Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselBasicExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselBasicExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- Carousel wrapper -->

    <div class="container">


      <div class="container mt-4">
        <h2>Información extra </h2>
        <div class="row">
            <div class="col-12 col-md-4">
                <div class="card mt-4">
                    <img src="../assets/Grafos.jpg" class="card-img-top" alt="Grafos">
                    <div class="card-body">
                        <h5 class="card-title">¿Qué es un Grafo?</h5>
                        <p class="card-text">Los grafos son estructuras discretas que constan de vértices y aristas que conectan entre sí esos vértices. Por lo tanto, un grafo G consta de dos partes: 1) Un conjunto V = V(G) cuyos elementos se denominan vértices, puntos o nodos de G.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card mt-4">
                    <img src="../assets/Algoritmo.jpg" class="card-img-top" alt="Algoritmos">
                    <div class="card-body">
                        <h5 class="card-title">¿Qué es un Algoritmo?</h5>
                        <p class="card-text">Se llaman algoritmos al conjunto de instrucciones sistemáticas y previamente definidas que se utilizan para realizar una determinada tarea. Estas instrucciones están ordenadas y acotadas a manera de pasos a seguir para alcanzar un objetivo.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="card mt-4">
                    <img src="../assets/AyG.png" class="card-img-top" alt="AyG">
                    <div class="card-body">
                        <h5 class="card-title">Relación entre Grafos y Algoritmos</h5>
                        <p class="card-text">Los algoritmos de grafos son un conjunto de instrucciones que recorren (visitan los nodos de) un grafo. Algunos algoritmos son usados para hallar un nodo específico o el camino entre dos nodos dados. Los grafos son estructuras de datos muy útiles que se usan para modelar varios problemas. Estos algoritmos tienen aplicaciones directas en sitios de redes sociales, modelado de máquinas de estado y más.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


      <!-- Enlaces de videos de YouTube -->
      <div class="mt-4">
        <h2>Videos Informativos</h2>
        <div class="row justify-content-center mt-4">
          <div class="col-12 col-md-3 col-sm-5 mb-4">
            <div class="embed-responsive embed-responsive-16by9" style="border-radius: 15px; overflow: hidden;">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/F5Xjpg0-NhM?si=J5ayrGHhmRa1Fm5T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          <div class="col-12 col-md-3 col-sm-5 mb-4">
            <div class="embed-responsive embed-responsive-16by9" style="border-radius: 15px; overflow: hidden;">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/23pdz9VtIBo?si=p_O2MEQQXTjwhwj1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          <div class="col-12 col-md-3 col-sm-5 mb-4">
            <div class="embed-responsive embed-responsive-16by9" style="border-radius: 15px; overflow: hidden;">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/vnNFiNVy9KM?si=Rp4qmMZN3axEe-21" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      

      <!-- Enlaces a papers de Internet -->
      <div class="md-4">
        <h2>Papers Informativos</h2>
        <div class="row">
          <div class="col-md-4 mb-6">
            <a href="http://www.cs.uns.edu.ar/~prf/teaching/AyC17/downloads/Teoria/Grafos-4x1.pdf" target="_blank">
              <div class="paper">
                <img src="../assets/paper1.png" alt="Paper 1" class="img-fluid">
              </div>
            </a>
          </div>
          <div class="col-md-4 mb-4">
            <a href="https://repositorio.cmmedu.uchile.cl/Instructional%20design%20(of%20materiales%20or%20pedagogical%20models)./Herramientas%20para%20la%20formaci%C3%B3n%20de%20profesores%20de%20matem%C3%A1tica/01%20-%20GRAFOS%20Fundamentos%20y%20algoritmos.pdf" target="_blank">
              <div class="paper">
                <img src="../assets/paper2.png" alt="Paper 2" class="img-fluid">
              </div>
            </a>
          </div>
          <div class="col-md-4 mb-4">
            <a href="https://www.dm.uba.ar/materias/investigacion_operativa/2011/2/capit_2.pdf" target="_blank">
              <div class="paper">
                <img src="../assets/paper3.png" alt="Paper 3" class="img-fluid">
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import NavBar from '../components/NavBar.vue';
// import UserlistService from "../services/userlistService";

export default {
  components: {
    NavBar,
  },
  
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const goMembers = () => {
      router.push("/members");
    };


    return {
      authStore,
      goMembers,
      currentSlide: 0,
      slides: [0, 1]
      // openSettings,
    };
  },

  // mounted() {
  //   const userlistService = new UserlistService();
  //   console.log("Dashboard mounted, Listing users");
  //   const usr_list = userlistService.getUsers();
  //   console.log(usr_list);
  // },
};
</script>

<style scoped>
  .nav-item:hover {
    background-color: lightslategray;
    transition: 0.5s;
  }

  .rounded-buttons {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  /* Estilo para el carrusel de imágenes */
  #imageCarousel img {
    height: 250px;
    width: auto;
    object-fit: cover;
  }

  #imageCarousel h2,
  #imageCarousel p {
    color: black; /* Cambiado a negro */
  }
  
  /* Estilo para las flechas del carrusel */
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: invert(0.5) sepia(0%) saturate(0%) hue-rotate(259deg) brightness(107%) contrast(107%);
  }

  .carousel-control-prev,
  .carousel-control-next {
    background-color: transparent;
    border: none;
    width: 50px; /* Ajusta el tamaño de las flechas */
    height: 50px; /* Ajusta el tamaño de las flechas */
    position: absolute;
    top: 50%; /* Centra verticalmente */
    transform: translateY(-50%); /* Centra verticalmente */
  }

  .carousel-control-prev {
    left: 0; /* Ubica a la izquierda */
  }

  .carousel-control-next {
    right: 0; /* Ubica a la derecha */
  }
  /* Estilo para las secciones de videos y papers */
  .video-section,
    .paper-section {
      padding: 20px; /* Añade espacio interno */
      margin-top: 40px; /* Ajusta el tamaño del margen en la parte superior */
      background-color: #f8f9fa; /* Fondo de color claro para resaltar */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra más suave */
      border-radius: 10px; /* Borde redondeado */
      border: 2px solid #007bff; /* Borde más grueso y de color azul */
    }

  /* Estilo para los enlaces de los videos */
  .video-section a,
  .paper-section a {
    display: block; /* Convertir enlaces en bloques para ocupar todo el espacio del contenedor */
    margin-bottom: 20px; /* Añade más espacio entre enlaces */
    padding: 10px; /* Añade espacio interno al enlace */
    border: 2px solid #007bff; /* Borde más grueso y de color azul */
    border-radius: 5px; /* Borde redondeado */
    transition: border-color 0.3s; /* Transición suave para el color del borde */
  }

  /* Cambiar el color del borde al pasar el ratón sobre los enlaces */
  .video-section a:hover,
  .paper-section a:hover {
    border-color: #0056b3; /* Borde de color azul más oscuro al pasar el ratón */
  }

  .image-container {
    width: 100%;
    position: relative;
    display: inline-block;
  }
  
  .image-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7); /* Adjust the last value to change the transparency */
    backdrop-filter: blur(5px); /* Adjust the value to change the blur intensity */
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  .card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
  }

  .paper {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
  }
  
  .paper:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
</style>
