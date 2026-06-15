<script setup>
import Kledo from './experience/Kledo.vue';
import Badr from './experience/Badr.vue'
import Nusantech from './experience/Nusantech.vue';
import Seneakershoot from './experience/Seneakershoot.vue';
import Kominfo from './experience/Kominfo.vue';
</script>

<template>
    <div class="section">
        <div id="experience" class="container-page py-16">
            <div class="text-center mb-12">
                <div class="text-h3 font-bold" style="color: #1e293b;">Experience</div>
                <div class="accent-line" />
            </div>
            <div class="flex flex-col gap-5">
                <Kledo />
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
    background-color: #f8fafc;
    color: black;
}
.accent-line {
    width: 56px;
    height: 4px;
    border-radius: 2px;
    margin: 0.75rem auto 0;
    background: linear-gradient(to right, #1b2578, #60a5fa);
}
</style>
