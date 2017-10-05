<template>
    <div><vue-knob v-model="myVal" color="#f33"></vue-knob></div>
</template>
<script>
    import VueKnob from '../src/index'
    export default {
        components: {VueKnob},
        data () {
            return {
                myVal:5
            }
        }
    }
</script>