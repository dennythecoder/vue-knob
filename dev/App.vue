<template>
    <div style="height:40vw;width:40vw;margin:auto;">
        <vue-knob v-model="myVal" color="#f33"></vue-knob>
    </div>
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