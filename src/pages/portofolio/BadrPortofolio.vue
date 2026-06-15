<script setup>
import { onMounted } from 'vue';
onMounted(() => window.scrollTo({ top: 0 }));

const projects = [
    {
        logo: '/undp-logo.webp',
        logoBg: true,
        title: 'SMILE Indonesia',
        subtitle: 'UNDP Indonesia · Immunization Logistics',
        description: 'SMILE is an electronic immunization logistics monitoring system supporting the Ministry of Health of the Republic of Indonesia for real-time supply chain and cold chain management, with operations supported by UNDP Indonesia.',
        description2: 'Work includes creating backend features for summary reports and Covid-19 reports, and creating frontends for landing pages and dashboard report pages.',
        tech: ['JavaScript', 'NodeJS', 'ReactJS', 'NextJS', 'RabbitMQ', 'Redis', 'ClickHouse', 'Minio', 'Sequelize'],
    },
    {
        logo: '/djppr-logo.png',
        logoBg: true,
        title: 'KPBU 4.0 DJPPR',
        subtitle: 'Direktorat Jenderal Pengelolaan Pembiayaan dan Risiko',
        description: 'Government and Business Entity Cooperation (KPBU) — a platform for cooperation between the government and business entities for public infrastructure provision, with risk distribution between parties.',
        tech: ['JavaScript', 'NodeJS', 'ReactJS', 'NextJS', 'Redis', 'Minio', 'Sequelize', 'PostgreSQL'],
    },
    {
        logo: '/siap-logo.webp',
        logoBg: false,
        title: 'SIAP – Sistem Inovatif Aplikasi Penilaian',
        subtitle: 'Education Assessment Platform',
        description: 'A practical solution to reduce the high cost of creating exam questions across Indonesia. Work includes backend rewrite engineering to the Golang programming language.',
        tech: ['Golang', 'Gin', 'Gorm', 'MySQL'],
    },
    {
        logo: '/indigo-logo.webp',
        logoBg: false,
        title: 'Indigo Website Rebranding & Deployment',
        subtitle: 'Telkom Indonesia Digital Incubator',
        description: 'Telkom Indonesia\'s Indigo Program promotes the digital creative industry through creativity, incubation, and acceleration programs. The website (indigo.id) was revamped to improve appearance and user experience.',
        tech: ['Golang', 'Gin', 'Gorm', 'MySQL'],
    },
    {
        logo: '/hni-logo.webp',
        logoBg: false,
        title: 'HNI POS Web',
        subtitle: 'Frontend Redesign',
        description: 'Developed the frontend appearance with a new modern design for the HNI Point of Sale web application.',
        tech: ['ReactJS', 'NextJS', 'JavaScript'],
    },
    {
        logo: '/auctive-logo.jpg',
        logoBg: false,
        title: 'Auctive',
        subtitle: 'Online Auction System',
        description: 'Auctive is an online auction system including item auctions similar to e-commerce, with a complete auction mechanism. Work includes creating the backend and frontend from scratch.',
        tech: ['JavaScript', 'NodeJS', 'ReactJS', 'NextJS', 'MySQL', 'Sequelize'],
    },
    {
        logo: '/flip-logo.webp',
        logoBg: false,
        title: 'Flip – Digital Product',
        subtitle: 'Fund Transfer & Digital Services',
        description: 'Flip.id expanded its fund transfer service to include digital product features (electricity tokens, PDAM, etc.) and migrated the digital product services to a microservice architecture.',
        tech: ['PHP', 'Yii'],
    },
];
</script>

<template>
    <div class="page-wrap">
        <div class="container-page">
            <!-- Back -->
            <div class="pt-6 pb-2">
                <router-link to="/" class="back-link">← Back to Home</router-link>
            </div>

            <!-- Header -->
            <div class="page-header">
                <div class="company-logo-wrap">
                    <img src="/badr-logo.png" alt="Badr Interactive" class="company-logo" />
                </div>
                <h1 class="text-h3 font-bold gradient-text mt-4">Badr Interactive Portfolio</h1>
                <p class="meta-text">Software Developer · Aug 2020 – Dec 2023</p>
            </div>

            <!-- Projects grid -->
            <div class="projects-grid pb-16">
                <div class="project-card" v-for="project in projects" :key="project.title">
                    <div class="card-header">
                        <div class="project-logo-wrap" :class="{ 'bg-white': project.logoBg }">
                            <img :src="project.logo" :alt="project.title" class="project-logo" />
                        </div>
                        <div>
                            <h3 class="text-h6 font-bold">{{ project.title }}</h3>
                            <p class="card-subtitle">{{ project.subtitle }}</p>
                        </div>
                    </div>
                    <p class="card-desc mt-3">{{ project.description }}</p>
                    <p class="card-desc mt-2" v-if="project.description2">{{ project.description2 }}</p>
                    <div class="flex flex-wrap gap-2 mt-4">
                        <span class="tech-tag" v-for="tech in project.tech" :key="tech">{{ tech }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.page-wrap {
    min-height: 100vh;
}
.back-link {
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
    color: rgba(147, 197, 253, 0.85);
    text-decoration: none;
    transition: color 0.2s;
}
.back-link:hover {
    color: white;
}
.page-header {
    text-align: center;
    padding: 2rem 0 3rem;
}
.company-logo-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 12px;
    padding: 0.75rem 1.25rem;
}
.company-logo {
    height: 40px;
    object-fit: contain;
}
.gradient-text {
    background: linear-gradient(135deg, #ffffff 40%, #93c5fd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
.meta-text {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: rgba(147, 197, 253, 0.7);
}
.projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
}
@media (min-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr 1fr;
    }
}
.project-card {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 14px;
    padding: 1.5rem;
    transition: background 0.2s, transform 0.2s;
}
.project-card:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}
.card-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
}
.project-logo-wrap {
    border-radius: 10px;
    padding: 0.5rem;
    flex-shrink: 0;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
}
.project-logo-wrap.bg-white {
    background: white;
}
.project-logo {
    width: 44px;
    height: 44px;
    object-fit: contain;
}
.card-subtitle {
    font-size: 0.75rem;
    color: rgba(147, 197, 253, 0.65);
    margin-top: 0.2rem;
}
.card-desc {
    font-size: 0.9rem;
    line-height: 1.6;
    color: rgba(219, 234, 254, 0.75);
}
.tech-tag {
    padding: 0.2rem 0.6rem;
    border-radius: 6px;
    font-size: 0.64rem;
    font-weight: 600;
    background: rgba(96, 165, 250, 0.15);
    color: #93c5fd;
    border: 1px solid rgba(96, 165, 250, 0.2);
    text-transform: uppercase;
    letter-spacing: 0.03em;
}
</style>
