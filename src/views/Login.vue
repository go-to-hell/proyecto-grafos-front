<template>
    <section class="vh-100">
        <div class="h-100">
            <div class="row h-100 m-0">
                <!-- Left Side (Form) -->
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 d-flex justify-content-start align-items-center">
                    <div class="bg-white rounded-lg p-4">
                        <!-- Login Form -->
                        <LoginForm />
    
                        <!-- Social Buttons -->
                        <p class="py-3 text-center text-muted">
                            O ingresa con...
                        </p>
    
                        <!-- Buttons Container -->
                        <div class="d-flex justify-content-center my-4">
                            <SocialButton
                                image-src="facebook.png"
                                image-alt="Facebook Logo"
                                button-text="Facebook"
                            />
    
                            <SocialButton
                                image-src="google.png"
                                image-alt="Google Logo"
                                button-text="Google"
                            />
                        </div>
    
                        <p class="py-2 text-center text-muted">
                            Si aún no tienes una cuenta puedes registrarte aquí
                        </p>
                        <div class="d-flex justify-content-center">
                            <button
                                @click="signUp"
                                class="btn btn-primary p-3 mx-1 font-weight-bold"
                                type="submit"
                            >
                                <span>Regístrate</span>
                            </button>
                        </div>
                    </div>
                </div>
    
                <!-- Right Side (Custom Design) -->
                <div class="col-md-4 col-lg-6 col-xl-7 p-0 d-flex justify-content-center align-items-center">
                    <div class="h-100 w-100 bg-black text-white text-center">
                        <!-- stars -->
                        <div class="space-art">
                            <div class="centered-text">Proyecto Grafos</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
    .space-art {
        position: relative;
        background-color: #000;
        height: 100%;
        width: 100%;
        overflow: hidden;
        background: #000 url('https://www.transparenttextures.com/patterns/stardust.png');
        animation: space 120s linear infinite;
    }

    .space-art::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('https://www.transparenttextures.com/patterns/stardust.png');
        opacity: 0.5;
        mix-blend-mode: screen;
        animation: space 120s linear infinite;
    }

    .space-art::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,1) 100%);
        opacity: 0.7;
        mix-blend-mode: overlay;
    }

    .centered-text {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2em;
        color: #fff;
        font-weight: bold;
    }

    @keyframes space {
        from { background-position: 0 0; }
        to { background-position: 10000px 5000px; }
    }
</style>

<script>
    import { useAuthStore } from "../stores/auth";
    import { useRouter } from 'vue-router';
    import SocialButton from "../components/SocialButton.vue";
    import LoginForm from "../components/LoginForm.vue";

    export default {
        components: {
            LoginForm,
            SocialButton,
        },

        setup() {
            const authStore = useAuthStore();
            const router = useRouter();

            const signUp = () => {
                router.push('/signup');
            };

            return {
                authStore, signUp
            };
        },
    };
</script>