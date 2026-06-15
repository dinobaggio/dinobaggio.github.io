<script setup>
const techStack = ['PHP', 'Laravel', 'NodeJS', 'ExpressJS', 'Sequelize', 'ReactJS', 'JavaScript', 'MySQL', 'PostgreSQL', 'MongoDB'];
</script>

<template>
    <div class="exp-card">
        <div class="flex items-start gap-5 flex-wrap">
            <div class="logo-wrap">
                <div class="nusantech-logo" />
            </div>
            <div class="flex-1" style="min-width: 0;">
                <div class="flex flex-wrap items-center gap-2">
                    <h3 class="font-bold text-h6" style="color: #1e293b;">Nusantech</h3>
                    <span class="pill-role">Fullstack Developer</span>
                    <span class="pill-date">May 2018 – Apr 2020</span>
                </div>
                <ul class="mt-4 pl-5 list-disc text-p leading-relaxed" style="color: #475569;">
                    <li>Configuration server with nginx, apache, and domain web configuration</li>
                    <li>Develop from scratch backend and frontend web development</li>
                    <li>Mostly handled government projects</li>
                    <li>Maintenance and feature additions for existing and legacy projects</li>
                </ul>
                <div class="flex flex-wrap gap-2 mt-4">
                    <span class="tech-tag" v-for="tech in techStack" :key="tech">{{ tech }}</span>
                </div>
                <div class="mt-4">
                    <router-link to="/nusantech-portofolio" class="view-link">View Portfolio →</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.exp-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-left: 4px solid #0ea5e9;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    transition: box-shadow 0.2s, transform 0.2s;
}
.exp-card:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
}
.logo-wrap {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    height: 60px;
    flex-shrink: 0;
}
.nusantech-logo {
    width: 110px;
    height: 36px;
    background-image: url('/nusantech-logo.webp');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
.pill-role {
    padding: 0.2rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.8rem;
    font-weight: 600;
    background: #e0f2fe;
    color: #0369a1;
}
.pill-date {
    padding: 0.2rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.8rem;
    background: #f1f5f9;
    color: #64748b;
}
.tech-tag {
    padding: 0.2rem 0.6rem;
    border-radius: 6px;
    font-size: 0.64rem;
    font-weight: 600;
    background: #e0f2fe;
    color: #0369a1;
    text-transform: uppercase;
    letter-spacing: 0.03em;
}
.view-link {
    display: inline-flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 600;
    color: #0369a1;
    text-decoration: none;
    transition: color 0.2s;
}
.view-link:hover {
    color: #0ea5e9;
}
@media (max-width: 480px) {
    .exp-card { padding: 1rem; }
    .logo-wrap { width: 100%; min-width: unset; justify-content: flex-start; height: 48px; }
}
</style>
