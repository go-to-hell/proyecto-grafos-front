<template>
    <button :class="buttonClasses">
        <img :src="getImageSrc()" :alt="imageAlt" class="w-9">
        <span :class="textClasses">{{ buttonText }}</span>
    </button>
</template>

<script>
    import { computed } from 'vue';
    
    export default {
        props: {
            imageSrc: {
                type: String,
                required: true,
            },
            imageAlt: {
                type: String,
                required: true,
            },
            buttonText: {
                type: String,
                required: true,
            },
        },
        
        setup(props) {
            const buttonClasses = computed(() =>
                'd-flex align-items-center justify-content-center py-2 mx-3 border border-secondary rounded shadow-sm'
            );

            const textClasses = computed(() => 'fw-light');

            const getImageSrc = () => {
                // Concatena el prefijo del path con la propiedad imageSrc
                return `/src/assets/${props.imageSrc}`;
            };

            return {
                buttonClasses,
                textClasses,
                getImageSrc,
            };
        }
    };
</script>
