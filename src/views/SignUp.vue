<template>
    <!-- Global Container -->
    <div class="flex items-center justify-center min-h-screen bg-red">
        <!-- Card Container -->
        <div class="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">            

            <!-- Left Side -->
            <div class="p-6 md:p-8">
                <!-- SignUp Form -->
                <SignUpForm />

                <!-- Border -->
                <div class="mt-12 border-b border-b-gray-300"></div>
                
                <!-- Social Buttons -->
                <p class="py-6 text-sm font-thin text-center text-gray-400">
                    Registrate con...
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
            </div>
        </div>
    </div>
</template>

<script>
    import { useAuthStore } from "../stores/auth";
    import { useRouter } from 'vue-router';
    import SocialButton from "../components/SocialButton.vue";
    import SignUpForm from "../components/SignUpForm.vue";

    export default {
        components: {
            SocialButton,
            SignUpForm,
        },
    }
</script>