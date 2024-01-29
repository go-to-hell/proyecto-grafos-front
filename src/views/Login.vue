<template>
    <!-- Global Container -->
    <div class="flex items-center justify-center min-h-screen bg-red">
        <!-- Card Container -->
        <div class="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
            <!-- Left Side -->
            <div class="p-6 md:p-8">
                <!-- Login Form -->
                <LoginForm />

                <!-- Border -->
                <div class="mt-12 border-b border-b-gray-300"></div>
                
                <!-- Social Buttons -->
                <p class="py-6 text-sm font-thin text-center text-gray-400">
                    O ingresa con...
                </p>

                <!-- Buttons Container -->
                <div class="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-6 md:space-y-0">
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
                <div class="mt-12 border-b border-b-gray-300"></div>
                
                <!-- Social Buttons -->
                <p class="py-3 text-sm font-thin text-center text-gray-400">
                    Si aún no tienes una cuenta puedes registrarte aqui
                </p>
                <div class="flex items-center justify-center">
                    <button
                        @click="signUp"
                        class="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md px-9 bg-black shadow-black-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150"
                        type="submit"
                    >
                        <span>Registrate</span>
                    </button>
                </div>
                
            </div>

            <!-- Right Side -->
            <img src="../assets/graph-art.png" alt="" class="w-[430px] hidden md:block rounded-r-2xl">
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
