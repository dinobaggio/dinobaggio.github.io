<script setup>
const skills = [
    { name: 'JavaScript', src: '/javascript-logo.png', bg: 'white' },
    { name: 'NodeJS', src: '/nodejs-logo.png', bg: 'white' },
    { name: 'ExpressJS', src: '/expressjs-logo.png', bg: 'white' },
    { name: 'ReactJS', src: '/react-logo.png', bg: 'white' },
    { name: 'VueJS', src: '/vuejs-logo.png', bg: 'white' },
    { name: 'Vite', src: '/vite.svg', bg: 'white' },
    { name: 'PHP', src: '/php-logo.png', bg: 'white' },
    { name: 'Laravel', src: '/laravel-logo.png', bg: 'white' },
    { name: 'Go Golang', src: '/golang-logo.png', bg: 'white' },
    { name: 'GIN', src: '/gin-logo.png', bg: 'white' },
    { name: 'Goose', src: '/goose-logo.png', bg: 'white' },
    { name: 'Flutter', src: '/flutter-logo.png', bg: 'white' },
];
</script>

<template>
    <div class="section">
        <div id="skill" class="container-page py-10 sm:py-16">
            <div class="text-center mb-12">
                <div class="text-h5 sm:text-h3 font-bold">Skills</div>
                <div class="accent-line" />
            </div>
            <div class="skills-grid">
                <div class="skill-card" v-for="skill in skills" :key="skill.name">
                    <div class="icon-wrap">
                        <img :src="skill.src" :alt="skill.name" :title="skill.name" class="skill-icon" />
                    </div>
                    <span class="skill-name">{{ skill.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.section {
    padding: 0;
}
.accent-line {
    width: 56px;
    height: 4px;
    border-radius: 2px;
    margin: 0.75rem auto 0;
    background: linear-gradient(to right, #93c5fd, #e0e7ff);
}
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1rem;
    max-width: 860px;
    margin: 0 auto;
}
.skill-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
    padding: 1.25rem 0.75rem;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.12);
    cursor: default;
    transition: background 0.2s, transform 0.2s;
}
.skill-card:hover {
    background: rgba(255, 255, 255, 0.14);
    transform: translateY(-3px);
}
.icon-wrap {
    width: 52px;
    height: 52px;
    background: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
}
.skill-icon {
    width: 44px;
    height: 44px;
    object-fit: contain;
}
.skill-name {
    font-size: 0.75rem;
    font-weight: 500;
    text-align: center;
    color: #bfdbfe;
}
</style>
