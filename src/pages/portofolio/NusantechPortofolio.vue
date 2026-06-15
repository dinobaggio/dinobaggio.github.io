<script setup>
import { onMounted } from 'vue';
onMounted(() => window.scrollTo({ top: 0 }));

const projects = [
    {
        logo: '/nusalink-logo.png',
        logoBg: false,
        title: 'Nusalink',
        subtitle: 'Villa & Hotel Booking Application',
        description: 'Nusalink is a booking application specifically for villas and hotels, targeting foreigners who want to find accommodation in Indonesia. Work includes adding features and maintaining the application.',
        tech: ['PHP', 'Laravel', 'JavaScript', 'NodeJS', 'MySQL'],
    },
    {
        logo: '/agc-logo.png',
        logoBg: false,
        title: 'Astra Green Company Online Assessment (AGC)',
        subtitle: 'Astra International · Subsidiary Performance Assessment',
        description: 'An online assessment application to evaluate the performance of each subsidiary owned by Astra International, digitizing the previously Excel-based process into a web-based system accessible online.',
        tech: ['JavaScript', 'NodeJS', 'ReactJS', 'MySQL', 'Sequelize'],
    },
    {
        logo: '/sibaru-logo.svg',
        logoBg: true,
        title: 'SIBARU PUPR',
        subtitle: 'Direktorat Jenderal Perumahan · Housing Assistance Portal',
        description: 'Sistem Informasi Bantuan Perumahan (SIBARU) functions as the main portal for housing assistance management. All aid proposals addressed to KEMENPUPR must be submitted through SIBARU, which is integrated with SIRUSUN, e-RLTH, and PSUN Online.',
        tech: ['JavaScript', 'NodeJS', 'ReactJS', 'NextJS', 'Redis', 'Minio', 'Sequelize', 'PostgreSQL'],
    },
    {
        logo: '/pln-logo.png',
        logoBg: false,
        title: 'PLN Library Web Redesign',
        subtitle: 'PLN · Library Management System',
        description: 'Redesigned and modernized the PLN library application template, updating the old design to a contemporary look using the Senayan Library Management System (SLiMS).',
        tech: ['PHP', 'SLiMS'],
    },
    {
        logo: '/indramayu-logo.jpg',
        logoBg: false,
        title: 'Indramayu Absence',
        subtitle: 'Indramayu District · Employee Attendance System',
        description: 'A web-based application for viewing employee attendance data in Indramayu district, including attendance report recapitulation and salary deduction calculations based on attendance records.',
        tech: ['PHP', 'Laravel', 'PostgreSQL'],
    },
    {
        logo: '/indramayu-logo.jpg',
        logoBg: false,
        title: 'SIMPEG Indramayu',
        subtitle: 'Indramayu District · Employee Management System',
        description: 'SIMPEG Indramayu is a web-based employee management application for Indramayu district government employees.',
        tech: ['PHP', 'Laravel', 'PostgreSQL'],
    },
    {
        logo: '/loak-logo.webp',
        logoBg: true,
        title: 'LOAK',
        subtitle: 'Second-hand Goods Marketplace',
        description: 'LOAK connects people who have second-hand goods (barang bekas) with people who need them, serving both individuals and second-hand goods collectors (pengepul).',
        tech: ['JavaScript', 'NodeJS', 'ReactJS', 'MongoDB'],
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
                    <img src="/nusantech-logo.webp" alt="Nusantech" class="company-logo" />
                </div>
                <h1 class="text-h3 font-bold gradient-text mt-4">Nusantech Portfolio</h1>
                <p class="meta-text">Fullstack Developer · May 2018 – Apr 2020</p>
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
    background: rgba(14, 165, 233, 0.15);
    color: #7dd3fc;
    border: 1px solid rgba(14, 165, 233, 0.2);
    text-transform: uppercase;
    letter-spacing: 0.03em;
}
</style>
