<script setup>
import Badr from './experience/Badr.vue'
import Nusantech from './experience/Nusantech.vue';
import Seneakershoot from './experience/Seneakershoot.vue';
import Kominfo from './experience/Kominfo.vue';
</script>

<template>
    <div class="section">
        <div id="experience" class="container-page">
            <div class="text-h3 text-center font-bold">Experience</div>
            <div class="mt-12">
                <Badr />
                <Nusantech />
                <Seneakershoot />
                <Kominfo />
            </div>
        </div>
    </div>
</template>

<style scoped>
.section {
    background-color: white;
    color: black;
}
</style>