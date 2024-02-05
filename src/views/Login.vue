<template>
<!-- Card Container -->
<div class="container-fluid my-5">
    <div class="row">
        <!-- Left Side (Form) -->
        <div class="col-md-6">
            <div class="p-4 bg-white shadow-lg rounded-lg">
                <!-- Login Form -->
                <LoginForm />

                <!-- Border -->
                <div class="mt-4 border-bottom border-gray-300"></div>
                
                <!-- Social Buttons -->
                <p class="py-3 text-sm font-weight-light text-center text-muted">
                    O ingresa con...
                </p>

                <!-- Buttons Container -->
                <div class="d-flex flex-column my-4 md:flex-row md:mx-3">
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

                <!-- Border -->
                <div class="mt-4 border-bottom border-gray-300"></div>
                
                <!-- Social Buttons -->
                <p class="py-2 text-sm font-weight-light text-center text-muted">
                    Si aún no tienes una cuenta puedes registrarte aquí
                </p>
                <div class="d-flex justify-content-center">
                    <button
                        @click="signUp"
                        class="btn btn-dark d-flex justify-content-center align-items-center p-3 mx-1 font-weight-bold rounded-md bg-black shadow-lg hover-opacity-90 hover-shadow-lg border transition duration-150"
                        type="submit"
                    >
                        <span>Regístrate</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Right Side (Image) -->
        <div class="col-md-6 d-none d-md-block">
            <img src="../assets/graph-art.png" alt="" class="w-100 h-100 object-cover rounded-lg">
        </div>
    </div>
</div>
</template>

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
