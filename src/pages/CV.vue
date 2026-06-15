<script setup>
import { onMounted } from 'vue';
onMounted(() => window.scrollTo({ top: 0 }));

function printCV() {
    window.print();
}

const startYear = 2018;
const startMonth = 5; // May
const now = new Date();
const years = now.getFullYear() - startYear - (now.getMonth() + 1 < startMonth ? 1 : 0);

const experiences = [
    {
        company: 'PT. Kledo Berhati Nyaman',
        role: 'Backend Developer · Prompt Engineer',
        period: 'Mar 2024 – Present',
        points: [
            'Building financial report features such as accounts receivable/payable aging, profit & loss reports, purchase per product reports, inventory turnover reports, and stock movement reports',
            'Integrating Midtrans payment gateway and Kledo Billing system',
            'Admin feature adjustments for internal operational needs',
            'Bug fixing via Sentry, CI/CD pipeline improvements, and writing Unit Tests',
            'Primarily handling finance reports, Midtrans/Billing integration, notification and email systems, testing, and maintenance of the Kledo application',
        ],
        tech: ['PHP', 'Laravel', 'MySQL', 'ClickHouse', 'Redis'],
        portfolio: null,
    },
    {
        company: 'PT. Badr Interactive',
        role: 'Software Developer',
        period: 'Aug 2020 – Dec 2023',
        points: [
            'Frequently involved in large-scale projects',
            'Mostly involved in backend and frontend development',
            'Handling maintenance and feature additions',
            'Experience managing multiple projects simultaneously',
            'Received Best Employee 2020 award – Badr Interactive (Dec 2020)',
        ],
        tech: ['PHP', 'Laravel', 'NodeJS', 'ExpressJS', 'ReactJS', 'VueJS', 'Golang', 'Gin', 'Python', 'NextJS', 'MySQL', 'MongoDB', 'ClickHouse', 'Redis', 'RabbitMQ', 'Docker'],
        portfolio: '#/badr-portofolio',
    },
    {
        company: 'Nusantech',
        role: 'Fullstack Developer',
        period: 'May 2018 – Apr 2020',
        points: [
            'Configuration server with nginx, apache, and domain web configuration',
            'Develop from scratch backend and frontend web development',
            'Mostly handled government projects',
            'Maintenance and feature additions for existing and legacy projects',
        ],
        tech: ['PHP', 'Laravel', 'NodeJS', 'ExpressJS', 'Sequelize', 'ReactJS', 'JavaScript', 'MySQL', 'PostgreSQL', 'MongoDB'],
        portfolio: '#/nusantech-portofolio',
    },
    {
        company: 'Sneakershoot',
        role: 'Flutter Developer',
        period: 'Jun 2020 – Aug 2020',
        points: [
            'Engaged in hybrid mobile development using Flutter',
            'Adding features and maintaining applications',
        ],
        tech: ['Flutter', 'Dart'],
        portfolio: null,
    },
    {
        company: 'Kominfo (PDSI Kementerian Kominfo)',
        role: 'Fullstack Developer',
        period: 'Mar 2019 – May 2019',
        points: [
            'Placed on PDSI Kementerian Kominfo',
            'Primarily involved in full-stack application development for both internal and external PDSI applications, along with application maintenance and feature additions',
        ],
        tech: ['PHP', 'Laravel', 'Yii', 'Yii2'],
        portfolio: null,
    },
];

const skillGroups = [
    { label: 'Frontend', skills: 'ReactJS, VueJS, NextJS, JavaScript' },
    { label: 'Backend', skills: 'NodeJS, ExpressJS, PHP, Laravel, Golang, Gin, Python' },
    { label: 'Mobile', skills: 'Flutter, Dart' },
    { label: 'Database', skills: 'MySQL, PostgreSQL, MongoDB, ClickHouse' },
    { label: 'Tools & Infra', skills: 'Redis, RabbitMQ, Minio, Docker, Nginx, Apache' },
    { label: 'ORM / Migration', skills: 'Sequelize, Gorm, Goose' },
];

const aiTools = [
    { name: 'Cursor', src: '/cursor-logo.png' },
    { name: 'Claude', src: '/claude-logo.png' },
    { name: 'GitHub Copilot', src: '/github-copilot-logo.png' },
];
</script>

<template>
    <!-- Top Bar (screen only) -->
    <div class="top-bar no-print">
        <router-link to="/" class="back-link">← Back to Home</router-link>
        <button @click="printCV" class="print-btn">
            <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print / Save PDF
        </button>
    </div>

    <!-- CV Document -->
    <div class="page-bg">
        <div class="cv-doc">
            <!-- CV Header -->
            <div class="cv-header">
                <div class="avatar-wrap">
                    <img src="/dino-ava.jpg" alt="Dino Baggio" class="avatar-img" />
                </div>
                <div class="header-info">
                    <h1 class="cv-name">Dino Baggio</h1>
                    <p class="cv-title">Software Engineer · Fullstack Developer · Prompt Engineer</p>
                    <div class="contact-row">
                        <a href="mailto:dbaggio111@gmail.com" class="contact-item">
                            <svg class="ci" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            dbaggio111@gmail.com
                        </a>
                        <a href="https://github.com/dinobaggio" target="_blank" class="contact-item">
                            <svg class="ci" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            github.com/dinobaggio
                        </a>
                        <a href="https://www.linkedin.com/in/dino-baggio-877686143/" target="_blank" class="contact-item">
                            <svg class="ci" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            linkedin.com/in/dino-baggio-877686143
                        </a>
                    </div>
                </div>
            </div>

            <!-- Body -->
            <div class="cv-body">
                <!-- Summary -->
                <section class="cv-section">
                    <h2 class="section-title">Professional Summary</h2>
                    <p class="summary-text">
                        Software engineer with {{ years }}+ years of experience in web development, specializing in backend and frontend development across large-scale projects. Experienced in building and maintaining complex applications using a wide range of technologies including Node.js, PHP/Laravel, Go, and React/Vue. Awarded Best Employee 2020 at PT. Badr Interactive. Fast learner with a strong work ethic, capable of managing multiple projects simultaneously.
                    </p>
                </section>

                <!-- Experience -->
                <section class="cv-section">
                    <h2 class="section-title">Work Experience</h2>
                    <div class="exp-list">
                        <div class="exp-item" v-for="exp in experiences" :key="exp.company">
                            <div class="exp-meta">
                                <div>
                                    <span class="exp-company">{{ exp.company }}</span>
                                    <span class="exp-role">{{ exp.role }}</span>
                                </div>
                                <span class="exp-period">{{ exp.period }}</span>
                            </div>
                            <ul class="exp-bullets">
                                <li v-for="point in exp.points" :key="point">{{ point }}</li>
                            </ul>
                            <div class="exp-tech">
                                <span class="tech-label">Tech Stack:</span>
                                {{ exp.tech.join(', ') }}
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Skills -->
                <section class="cv-section">
                    <h2 class="section-title">Technical Skills</h2>
                    <div class="skills-table">
                        <div class="skill-row" v-for="group in skillGroups" :key="group.label">
                            <span class="skill-cat">{{ group.label }}</span>
                            <span class="skill-vals">{{ group.skills }}</span>
                        </div>
                    </div>
                </section>

                <!-- AI Coding Assistant -->
                <section class="cv-section">
                    <h2 class="section-title">AI Coding Assistant</h2>
                    <div class="ai-grid">
                        <div class="ai-card" v-for="tool in aiTools" :key="tool.name">
                            <div class="ai-icon-wrap">
                                <img :src="tool.src" :alt="tool.name" class="ai-icon" />
                            </div>
                            <span class="ai-name">{{ tool.name }}</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<!-- Global overrides for print -->
<style>
@media print {
    body {
        background: white !important;
        color: black !important;
        margin: 0 !important;
        padding: 0 !important;
    }
    * {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    @page {
        size: A4;
        margin: 0;
    }
}
</style>

<style scoped>
/* ── Screen wrapper ── */
.page-bg {
    background: #e2e8f0;
    min-height: 100vh;
    padding: 2rem 1rem 4rem;
}

.top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem 2rem;
    background: rgba(27, 37, 120, 0.9);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: sticky;
    top: 0;
    z-index: 50;
}
.back-link {
    color: rgba(147, 197, 253, 0.85);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.2s;
}
.back-link:hover { color: white; }
.print-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.5rem;
    border-radius: 9999px;
    background: white;
    color: #1b2578;
    font-size: 0.9rem;
    font-weight: 700;
    font-family: inherit;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
}
.print-btn:hover {
    background: #dbeafe;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.icon { width: 18px; height: 18px; }

/* ── CV Document ── */
.cv-doc {
    background: white;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);
    border-radius: 6px;
    overflow: hidden;
    font-size: 0.9rem;
    line-height: 1.5;
    color: #1e293b;
}

/* ── Header ── */
.cv-header {
    background: linear-gradient(135deg, #1b2578, #2D4181);
    color: white;
    padding: 2rem 2.5rem;
    display: flex;
    align-items: center;
    gap: 1.75rem;
}
.avatar-img {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(255,255,255,0.4);
    flex-shrink: 0;
}
.header-info { flex: 1; }
.cv-name {
    font-size: 1.9rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.02em;
}
.cv-title {
    font-size: 0.95rem;
    color: #93c5fd;
    margin: 0.2rem 0 0.8rem;
    font-weight: 500;
}
.contact-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.25rem;
}
.contact-item {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    font-size: 0.78rem;
    transition: color 0.2s;
}
.contact-item:hover { color: white; }
.ci { width: 13px; height: 13px; flex-shrink: 0; }

/* ── Body ── */
.cv-body { padding: 1.75rem 2.5rem 2.5rem; }

.cv-section { margin-bottom: 1.75rem; }
.cv-section:last-child { margin-bottom: 0; }

.section-title {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #1b2578;
    border-bottom: 2px solid #1b2578;
    padding-bottom: 0.3rem;
    margin-bottom: 0.875rem;
}

.summary-text {
    color: #475569;
    line-height: 1.65;
    font-size: 0.875rem;
}

/* ── Experience ── */
.exp-list { display: flex; flex-direction: column; gap: 1.25rem; }
.exp-item {
    padding-left: 0.875rem;
    border-left: 3px solid #e0e7ff;
}
.exp-meta {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-bottom: 0.4rem;
}
.exp-company {
    font-weight: 700;
    font-size: 0.9rem;
    color: #1e293b;
}
.exp-role {
    font-size: 0.8rem;
    color: #1b2578;
    font-weight: 600;
    margin-left: 0.5rem;
}
.exp-period {
    font-size: 0.75rem;
    color: #94a3b8;
    white-space: nowrap;
}
.exp-bullets {
    margin: 0 0 0.4rem 1rem;
    padding: 0;
    list-style: disc;
    color: #475569;
    font-size: 0.82rem;
    line-height: 1.55;
}
.exp-bullets li { margin-bottom: 0.15rem; }
.exp-tech {
    font-size: 0.75rem;
    color: #64748b;
}
.tech-label {
    font-weight: 700;
    color: #1e293b;
}

/* ── Skills ── */
.skills-table { display: flex; flex-direction: column; gap: 0.4rem; }
.skill-row {
    display: grid;
    grid-template-columns: 130px 1fr;
    gap: 0.5rem;
    font-size: 0.82rem;
}
.skill-cat {
    font-weight: 700;
    color: #1e293b;
}
.skill-vals { color: #475569; }

/* ── AI Coding Assistant ── */
.ai-grid {
    display: flex;
    gap: 0.75rem;
}
.ai-card {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.875rem;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background: #f8fafc;
}
.ai-icon-wrap {
    width: 28px;
    height: 28px;
    background: white;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e2e8f0;
    flex-shrink: 0;
}
.ai-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
}
.ai-name {
    font-size: 0.82rem;
    font-weight: 600;
    color: #1e293b;
}

/* ── Print styles ── */
@media print {
    .no-print { display: none !important; }
    .page-bg {
        background: white !important;
        padding: 0 !important;
        min-height: unset;
    }
    .cv-doc {
        max-width: 100% !important;
        margin: 0 !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        font-size: 9.5pt !important;
    }
    .cv-header {
        padding: 1.5rem 2rem !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    .avatar-img { width: 80px !important; height: 80px !important; }
    .cv-name { font-size: 1.5rem !important; }
    .cv-body { padding: 1.25rem 2rem 2rem !important; }
    .cv-section { margin-bottom: 1.25rem !important; }
    .exp-item { break-inside: avoid; }
}
</style>
