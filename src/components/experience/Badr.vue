<script setup></script>
<template>
    <div class="flex items-center gap-8 border-b-4 pb-4">
        <!-- <div class="comp2-vektor rounded-md" /> -->
        <div>
            <div class="badr-logo" />
            <div class="flex mt-8">
                <div class="border-r-2 border-yellow-400 pr-2">PT. Badr Interactive</div>
                <div class="border-x-2 border-yellow-400 px-2">Software Developer</div>
                <div class="border-l-2 border-yellow-400 pl-2">Agust 2020 - December 2023</div>
            </div>
            <div class="mt-4">
                <div class="text-h6 pl-4">
                    <ul class="list-disc">
                        <li>Frequently involved in large‐scale projects</li>
                        <li>Mostly involved in backend and frontend development</li>
                        <li>Handling maintenance and feature additions</li>
                        <li>Have experience managing multiple projects simultaneously</li>
                        <li>Have received awards Best Employee 2020 – Badr Interactive 12/2020</li>
                    </ul>
                </div>
                <div class="mt-3">
                    <b>Tech Stack</b>: PHP, Laravel, NodeJS, JavaScript, ExpressJS, Sequelize, ReactJS, VueJS, Golang, Gin, Gorm, Python, NextJS, MySQL, MongoDB, ClickHouse, Redis, RabbitMQ, Minio, Docker
                </div>
                <div class="mt-3" />
                <router-link to="/badr-portofolio" class="text-darkblue cursor-pointer hover:underline">View portofolio >></router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
.badr-logo {
    width: 135px;
    height: 50px;
    background-image: url('/badr-logo.png');
    background-size: cover;
    background-position: center;
}
.comp2-vektor {
  width: 1000px;
  height: 600px;
  background-image: url('/badr-portofolio.png');
  background-size: cover;
  background-position: center;
}
</style>