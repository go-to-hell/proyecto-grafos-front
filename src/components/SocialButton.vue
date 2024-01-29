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
                'flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2'
            );

            const textClasses = computed(() => 'font-thin');

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
