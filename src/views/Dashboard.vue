<template>
  <div>
    <!-- NavBar -->
    <nav class="navbar sticky-top navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold mx-4 mx-md-5" href="#">GRAFOS</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            <li class="nav-item me-md-3">
              <router-link to="/dashboard" class="nav-link active" aria-current="page">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <button class="nav-link w-100" @click="goEditor">Crear</button>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2 bg-body-tertiary"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>


    <!-- Rounded Buttons -->
    <div class="rounded-buttons">
      <button @click="openHelp" class="btn btn-primary rounded m-1">
        <i class="bi bi-question-lg"></i>
      </button>
      <router-link to="/perfil" class="btn btn-primary rounded m-1">
        <i class="bi bi-exclamation-lg"></i>
      </router-link>
    </div>

    <!-- Help Center Modal -->
    <div class="modal fade" tabindex="-1" ref="helpCenterModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Centro de Ayuda</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>¡Hola! 😄 ¡Bienvenido al increíble mundo de los grafos! 🌐✨ Aquí te dejamos una guía rápida para que domines esta herramienta como un pro:</p>
            <!-- Contenido del Centro de Ayuda... (se omite para abreviar) -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Perfil Modal -->
    <div class="modal fade" tabindex="-1" ref="perfilModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Perfil</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- Contenido del perfil aquí -->
            <p>¡Bienvenido a tu perfil!</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>

      <!-- Texto debajo del carrusel -->
      <div class="bg-white p-5">
      <h2>Información sobre Grafos y Algoritmos</h2>
    </div>
    <!-- Carrusel de Imágenes -->
    <div id="imageCarousel" class="carousel slide mt-4" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-flex">
            <img src="../assets/Grafos.jpg" class="d-block w-25" alt="Grafos">
            <div class="ms-3">
              <h2>¿Qué es un Grafo?</h2>
              <p>Los grafos son estructuras discretas que constan de vértices y aristas que conectan entre sí esos vértices. Por lo tanto, un grafo G consta de dos partes: 1) Un conjunto V = V(G) cuyos elementos se denominan vértices, puntos o nodos de G.</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex">
            <img src="../assets/Algoritmo.jpg" class="d-block w-25" alt="Algoritmos">
            <div class="ms-3">
              <h2>¿Qué es un Algoritmo?</h2>
              <p>Se llaman algoritmos al conjunto de instrucciones sistemáticas y previamente definidas que se utilizan para realizar una determinada tarea. Estas instrucciones están ordenadas y acotadas a manera de pasos a seguir para alcanzar un objetivo.</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex">
            <img src="../assets/AyG.png" class="d-block w-25" alt="AyG">
            <div class="ms-3">
              <h2>Relación entre Grafos y Algoritmos</h2>
              <p>Los algoritmos de grafos son un conjunto de instrucciones que recorren (visitan los nodos de) un grafo. Algunos algoritmos son usados para hallar un nodo específico o el camino entre dos nodos dados. Los grafos son estructuras de datos muy útiles que se usan para modelar varios problemas. Estos algoritmos tienen aplicaciones directas en sitios de redes sociales, modelado de máquinas de estado y más.</p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>

    

    <!-- Enlaces de videos de YouTube -->
    <div class="mt-5">
      <h2>Información extra </h2>
      <h2>Videos Informativos</h2>
      <div class="row">
        <div class="col-md-4 mb-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/F5Xjpg0-NhM?si=J5ayrGHhmRa1Fm5T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="col-md-4 mb-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/23pdz9VtIBo?si=p_O2MEQQXTjwhwj1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="col-md-4 mb-4">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vnNFiNVy9KM?si=Rp4qmMZN3axEe-21" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>

    <!-- Enlaces a papers de Internet -->
    <div class="md-4">
      <h2>Papers Informativos</h2>
      <div class="row">
        <div class="col-md-4 mb-6">
          <a href="http://www.cs.uns.edu.ar/~prf/teaching/AyC17/downloads/Teoria/Grafos-4x1.pdf" target="_blank"><img src="../assets/paper1.png" alt="Paper 1" class="img-fluid"></a>
        </div>
        <div class="col-md-4 mb-4">
          <a href="https://repositorio.cmmedu.uchile.cl/Instructional%20design%20(of%20materiales%20or%20pedagogical%20models)./Herramientas%20para%20la%20formaci%C3%B3n%20de%20profesores%20de%20matem%C3%A1tica/01%20-%20GRAFOS%20Fundamentos%20y%20algoritmos.pdf" target="_blank"><img src="../assets/paper2.png" alt="Paper 2" class="img-fluid"></a>
        </div>
        <div class="col-md-4 mb-4">
          <a href="https://www.dm.uba.ar/materias/investigacion_operativa/2011/2/capit_2.pdf" target="_blank"><img src="../assets/paper3.png" alt="Paper 3" class="img-fluid"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const goEditor = () => {
      router.push("/editor");
    };

    const openHelp = () => {
      helpCenterModal.value.toggle();
    };

    return {
      goEditor,
      openHelp
    };
  }
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
</style>
