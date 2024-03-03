<template>
    <button :class="buttonClasses">
        <i :class="iconClasses" aria-hidden="true"></i>
        
        <span :class="textClasses">{{ buttonText }}</span>
    </button>
</template>

<script>
    import { computed } from 'vue';

    export default {
        props: {
            icon: {
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

            const iconClasses = computed(() => `bi ${props.icon} me-1`);

            return {
                buttonClasses,
                textClasses,
                iconClasses,
            };
        },
    };
</script>
