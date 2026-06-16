<script setup>
function goToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

const startYear = 2018;
const startMonth = 5; // May
const now = new Date();
const years = now.getFullYear() - startYear - (now.getMonth() + 1 < startMonth ? 1 : 0);
</script>

<template>
    <!-- Sticky Navigation -->
    <nav class="sticky top-0 z-50 border-b border-white/10 shadow-lg nav-blur">
        <div class="container mx-auto 2xl:px-36 px-8">
            <div class="flex items-center justify-between h-16">
                <div class="avatar-sm" />
                <div class="flex items-center gap-3 sm:gap-6">
                    <button class="nav-link hidden sm:block" @click="goToElement('experience')">Experience</button>
                    <button class="nav-link hidden sm:block" @click="goToElement('skill')">Skill</button>
                    <button class="nav-link hidden sm:block" @click="goToElement('contact')">Contact</button>
                    <router-link to="/cv" class="nav-cv-btn">CV</router-link>
                    <router-link to="/portfolio-print" class="nav-cv-btn nav-port-btn hidden sm:inline-flex">Portfolio PDF</router-link>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <div class="container-page pt-12 pb-16 sm:pt-20 sm:pb-28">
        <div class="flex flex-col items-center text-center">
            <!-- Avatar with gradient ring -->
            <div class="avatar-ring mb-6">
                <div class="avatar-lg" />
            </div>

            <!-- Name -->
            <h1 class="text-2xl sm:text-h3 md:text-h2 font-bold gradient-text">Dino Baggio</h1>

            <!-- Subtitle -->
            <p class="text-sm sm:text-h6 mt-6 sm:mt-8 font-medium subtitle-line">
                Software Engineer · Fullstack Developer · Prompt Engineer
            </p>

            <!-- Description -->
            <p class="mt-4 sm:mt-6 text-sm sm:text-p leading-relaxed max-w-xl" style="color: rgba(219, 234, 254, 0.8);">
                Software engineer with {{ years }}+ years of experience in web development,
                specializing in backend and frontend development across large-scale projects.
            </p>

            <!-- Role badges -->
            <div class="flex flex-wrap gap-2 mt-4 sm:mt-6 justify-center">
                <span class="role-badge">Backend Developer</span>
                <span class="role-badge">Frontend Developer</span>
                <span class="role-badge">Fast Learner</span>
                <span class="role-badge">Best Employee 2020</span>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center">
                <button @click="goToElement('experience')" class="btn-primary">View Experience</button>
                <button @click="goToElement('contact')" class="btn-outline">Contact Me</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav-blur {
    background-color: rgba(27, 37, 120, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}
.nav-link {
    background: none;
    border: none;
    padding: 0;
    font-family: inherit;
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
    transition: color 0.2s;
}
.nav-link:hover {
    color: white;
}
.avatar-sm {
    border-radius: 9999px;
    width: 36px;
    height: 36px;
    background-image: url('/dino-ava.jpg');
    background-size: cover;
    background-position: center;
}
.avatar-ring {
    padding: 3px;
    border-radius: 9999px;
    background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
}
.avatar-lg {
    border-radius: 9999px;
    width: 140px;
    height: 140px;
    background-image: url('/dino-ava.jpg');
    background-size: cover;
    background-position: center;
}
.gradient-text {
    color: white;
    text-shadow: 0 0 40px rgba(147, 197, 253, 0.35);
}
.role-badge {
    padding: 0.25rem 1rem;
    border-radius: 9999px;
    font-size: 0.8rem;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #bfdbfe;
}
.btn-primary {
    padding: 0.6rem 1.25rem;
    border-radius: 9999px;
    font-size: 0.9rem;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    background: white;
    color: #1b2578;
    border: none;
    transition: all 0.2s;
}
@media (min-width: 640px) {
    .btn-primary { padding: 0.75rem 1.75rem; font-size: 1rem; }
}
.btn-primary:hover {
    background: #dbeafe;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}
.btn-outline {
    padding: 0.6rem 1.25rem;
    border-radius: 9999px;
    font-size: 0.9rem;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.4);
    transition: all 0.2s;
}
@media (min-width: 640px) {
    .btn-outline { padding: 0.75rem 1.75rem; font-size: 1rem; }
}
.btn-outline:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.7);
    transform: translateY(-2px);
}
.nav-cv-btn {
    padding: 0.35rem 1rem;
    border-radius: 9999px;
    font-size: 0.85rem;
    font-weight: 700;
    color: #1b2578;
    background: white;
    text-decoration: none;
    transition: all 0.2s;
}
.nav-cv-btn:hover {
    background: #dbeafe;
}
.subtitle-line {
    background: linear-gradient(90deg, #93c5fd 0%, #93c5fd 55%, #fdba74 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
.nav-port-btn {
    background: rgba(255,255,255,0.15);
    color: white;
    border: 1px solid rgba(255,255,255,0.3);
}
.nav-port-btn:hover {
    background: rgba(255,255,255,0.25);
}
</style>
