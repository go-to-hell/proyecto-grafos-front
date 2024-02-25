<template>
    <!-- Global Container -->
    <div class="d-flex align-items-center justify-content-center vh-100 bg-dark">
        <!-- Card Container -->
        <div class="d-flex flex-column m-3 p-3 bg-white shadow rounded-lg">            

            <!-- Left Side -->
            <div class="p-3">
                <!-- SignUp Form -->
                <SignUpForm />

                <!-- Border -->
                <div class="mt-5 border-bottom border-secondary"></div>
                
                <!-- Social Buttons -->
                <p class="py-3 text-center text-muted">
                    Registrate con...
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