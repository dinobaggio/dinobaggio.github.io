<script setup>
import { onMounted } from 'vue';
onMounted(() => window.scrollTo({ top: 0 }));

function printPage() {
    window.print();
}

const becourseCategories = [
    {
        title: 'Authentication & User Management',
        badge: null,
        items: [
            { area: 'Auth System', work: 'Email/password registration with email verification, Google OAuth login, JWT-based authentication, and password reset via email.' },
            { area: 'RBAC', work: 'Role-Based Access Control with three roles: Admin, Instructor, and Student. Role/permission management via admin dashboard.' },
            { area: 'User Profile', work: 'Profile editing, avatar upload, bio, skills, and phone number management.' },
        ],
    },
    {
        title: 'Product Management',
        badge: null,
        items: [
            { area: 'Courses', work: 'CRUD for courses with hierarchical content: Course → Module → Lesson → Quiz. Each lesson supports video (URL), rich text, downloadable file attachments, and multiple-choice quizzes. Settings include level, release date, cover image, and pricing with original (strike-through) price.' },
            { area: 'E-Books', work: 'CRUD for digital books with ISBN/EISBN tracking, download tokens with expiry time, and secured download flow.' },
        ],
    },
    {
        title: 'Learning Experience',
        badge: null,
        items: [
            { area: 'Progress Tracking', work: 'Per-lesson completion tracking with automatic course completion percentage calculation and progress snapshot storage.' },
            { area: 'Quiz System', work: 'Multiple-choice quizzes per lesson: attempt tracking, auto-scoring, answer correction, and quiz result history.' },
            { area: 'Module Discussion', work: 'Students can post questions within course modules. Nested comments (depth-tracked) with instructor responses and recent activity feed.' },
        ],
    },
    {
        title: 'Payments & Orders',
        badge: null,
        items: [
            { area: 'Order System', work: 'Multi-product order creation and tracking with unique order codes. Statuses: pending, paid, failed, expired, cancelled.' },
            { area: 'Midtrans Integration', work: 'Snap token generation for payment UI, webhook for async payment status updates, fraud detection, transaction type/method tracking, and settlement confirmation.' },
        ],
    },
    {
        title: 'CMS & Content Features',
        badge: null,
        items: [
            { area: 'Articles & Blog', work: 'CRUD with Quill rich text editor, hierarchical categories (parent/child), featured flag, sort order, view count, publish/draft status, SEO meta tags, and slug URLs.' },
            { area: 'Reviews & Social', work: '1–5 star product reviews with average rating, nested product comments, and wishlist (add/remove for courses and e-books).' },
            { area: 'SEO & Sitemap', work: 'Dynamic Open Graph meta tags for articles, e-books, and courses. Auto-generated XML sitemap and clean slug-based URLs.' },
        ],
    },
    {
        title: 'Admin Dashboard & Support',
        badge: null,
        items: [
            { area: 'Admin Panel', work: 'Full CRUD management for users (with role assignment), courses, modules, lessons, e-books, articles, orders, payments, instructors, and support tickets.' },
            { area: 'Support Tickets', work: 'Users submit tickets with title and description. Bi-directional comments (user ↔ admin), admin-only threads, nested comments, and status tracking (pending/resolved).' },
            { area: 'Notifications & Logging', work: 'Admin notifications for new user registrations, paid orders, and new support tickets (read/unread). Error 500 logging with status code, response data, and admin access for debugging.' },
        ],
    },
    {
        title: 'Infrastructure & Deployment',
        badge: null,
        items: [
            { area: 'File Storage', work: 'Cloudflare R2 (S3-compatible) for object storage. Presigned URLs for secure file serving. Download tokens with expiry for course lessons and e-books.' },
            { area: 'Deployment', work: 'Docker + docker-compose for dev and production environments. Nginx configuration for production. Environment via .env (database, JWT, R2, SMTP, Midtrans, Google OAuth). Make commands for migrations, seeding, and development.' },
        ],
    },
];

const kledoCategories = [
    {
        title: 'Reporting (Finance Reports)',
        badge: 'Largest Portion',
        items: [
            { area: 'Accounts Receivable / Payable Aging', work: 'Due date filters, 1–2 week columns, weekly/monthly period grouping, contact & tag filters, query optimization (without indexing), landscape PDF/Excel export, dynamic actual_status for partial payments, multi-currency print/export.' },
            { area: 'Profit & Loss', work: 'Delta & delta_percent per period, show/hide charts, COGS percentage, show_columns toggle, optional delta in export/PDF, landscape PDF print, display zero-value rows.' },
            { area: 'Sales Detail / per Product-Category-Period', work: 'Date & payment account columns, shipping costs & deductions, tag/customer/warehouse/salesperson filters, charts & widgets, company details, qty × price before tax.' },
            { area: 'Purchase per Product', work: 'Vendor name, discount per product (with percentage), return quantity, total & average after tax, "Amount" field on PO per product.' },
            { area: 'Inventory Turnover', work: 'Detail endpoint, expanded display, qty-based & storage duration formula, avg_storage_qty calculation, value optimization.' },
            { area: 'Stock Movement & Warehouse Stock Summary', work: 'Hide zero-qty filter (opening/closing), unit of measure, product photo on print, warehouse transfer column.' },
            { area: 'New Reports', work: 'Return per product (sales & purchase), credit/debit memo, Serial Number Stock per Warehouse + Serial Number History (+ export), Daily Input Activity, sales detail by serial number.' },
            { area: 'Others', work: 'General journal (reference >1000 chars, date sort), contact ledger, executive summary (ROI), payment settlement report (COA & account name).' },
        ],
    },
    {
        title: 'Midtrans & Billing',
        badge: null,
        items: [
            { area: 'Midtrans Log Processing', work: 'Process & sync logs for GH, CRM, and HR apps; auto-reconcile; save tags on invoice creation.' },
            { area: 'Invoice Bug Fixes', work: 'Negative value anomalies, idempotent callback handling, transaction recorded but invoice not created, amount discrepancy, app_id determination.' },
            { area: 'Billing Stats', work: 'Total First Payment (Finance & HR), billing creator agent info, admin detail in billing transaction view.' },
            { area: 'Invoice Share', work: 'Admin statistics + charts, CS filter/detail (IC), clickable company links, daily/monthly totals.' },
        ],
    },
    {
        title: 'Notifications & Email',
        badge: null,
        items: [
            { area: 'Price Change Notifications', work: 'Admin push form, send specific content, multi-attachment support, fix per app_id (HR/GH), debugging 60% discount notification.' },
            { area: 'Due Date Reminder Email', work: 'Refactor to job pattern, website URL validation, fix emails not sent (zero-value case), fix Sentry errors.' },
            { area: 'Low Stock Email', work: 'Email delay configuration, refactor to job pattern.' },
            { area: 'NPS', work: 'Score logging, summary view, avg score notification, pop-up recommendation mute feature.' },
            { area: 'WhatsApp', work: 'Send via official WA channel, auto balance top-up, validation & billing for free top-up, customize contact numbers.' },
        ],
    },
    {
        title: 'Features & Admin',
        badge: null,
        items: [
            { area: 'CRM Subscription', work: 'Large multi-week project: admin billing CRM page, channel count per user, upgrade/renew/addon flow.' },
            { area: 'Audit Log', work: 'User settings/role/approval history, DB backup log, PAT, POS/Slack/Discord/webhook connect log.' },
            { area: 'Kledo Web Popover', work: 'Products (regular/bundle), returns, contacts, journals, accounts, warehouses, fixed assets popover integration.' },
            { area: 'Price Rules', work: 'Excel/CSV/PDF export, bulk delete, SKU search, import fix for duplicates, file generation error fix.' },
            { area: 'Password & Security Policy', work: 'Last password change tracking, force password change, outdated email detection, admin data masking.' },
            { area: 'Salesperson History', work: 'New table to preserve salesperson data on delete (create/update/delete events), dynamic display in detail view and graph.' },
            { area: 'Fixed Assets', work: 'Tag filter, non-paginated mass export, asset deletion feature, account category detail view.' },
            { area: 'Others', work: 'Required tag on stock adjustments, item column in expense list, bulk delete recurring invoices, lock product conversion formula, disable approval email setting.' },
        ],
    },
    {
        title: 'Routine Maintenance',
        badge: null,
        items: [
            { area: 'Sentry', work: 'Regular error fixes: undefined array key, ambiguous column, negative sort, and other production errors.' },
            { area: 'Pipeline / CI-CD', work: 'Stabilize failing tests, resolve show_columns override conflicts, fix risky test cases.' },
            { area: 'Unit Tests', work: 'Accompanying almost every new feature and bug fix using TransactionDataGeneratorTrait and NewBaseTestCase patterns.' },
        ],
    },
];

const badrProjects = [
    {
        logo: '/undp-logo.webp',
        logoBg: true,
        title: 'SMILE Indonesia',
        subtitle: 'UNDP Indonesia · Immunization Logistics',
        description: 'An electronic immunization logistics monitoring system supporting the Ministry of Health of Indonesia for real-time supply chain and cold chain management. Work includes creating backend features for summary reports and Covid-19 reports, and creating frontends for landing pages and dashboard report pages.',
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
        description: "Telkom Indonesia's Indigo Program promotes the digital creative industry through creativity, incubation, and acceleration programs. The website (indigo.id) was revamped to improve appearance and user experience.",
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
        description: 'An online auction system including item auctions similar to e-commerce, with a complete auction mechanism. Work includes creating the backend and frontend from scratch.',
        tech: ['JavaScript', 'NodeJS', 'ReactJS', 'NextJS', 'MySQL', 'Sequelize'],
    },
    {
        logo: '/flip-logo.webp',
        logoBg: false,
        title: 'Flip – Digital Product',
        subtitle: 'Fund Transfer & Digital Services',
        description: 'Flip.id expanded its fund transfer service to include digital product features (electricity tokens, PDAM, etc.) and migrated digital product services to a microservice architecture.',
        tech: ['PHP', 'Yii'],
    },
];

const nusantechProjects = [
    {
        logo: '/nusalink-logo.png',
        logoBg: false,
        title: 'Nusalink',
        subtitle: 'Villa & Hotel Booking Application',
        description: 'A booking application specifically for villas and hotels, targeting foreigners who want to find accommodation in Indonesia. Work includes adding features and maintaining the application.',
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
        description: 'The main portal for housing assistance management at Direktorat Jenderal Perumahan. All aid proposals addressed to KEMENPUPR must be submitted through SIBARU, integrated with SIRUSUN, e-RLTH, and PSUN Online.',
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
        description: 'A web-based employee management application for Indramayu district government employees.',
        tech: ['PHP', 'Laravel', 'PostgreSQL'],
    },
    {
        logo: '/loak-logo.webp',
        logoBg: true,
        title: 'LOAK',
        subtitle: 'Second-hand Goods Marketplace',
        description: 'Connects people who have second-hand goods (barang bekas) with people who need them, serving both individuals and second-hand goods collectors (pengepul).',
        tech: ['JavaScript', 'NodeJS', 'ReactJS', 'MongoDB'],
    },
];

const sneakershootProjects = [
    {
        logo: '/sneakershoot-logo.png',
        logoBg: false,
        title: 'Sneakershoot App',
        subtitle: 'Hybrid Mobile Application',
        description: 'Engaged in hybrid mobile development using Flutter for the Sneakershoot application. Work involves adding new features and maintaining the existing application to ensure performance and stability.',
        tech: ['Flutter', 'Dart'],
    },
];

const kominfoProjects = [
    {
        logo: '/kominfo-logo.png',
        logoBg: false,
        title: 'PDSI Internal & External Applications',
        subtitle: 'Kementerian Komunikasi dan Informatika',
        description: 'Placed on PDSI Kementerian Kominfo. Primarily involved in full-stack application development for both internal and external PDSI applications, including creating new features, application maintenance, and improvements.',
        tech: ['PHP', 'Laravel', 'Yii', 'Yii2'],
    },
];
</script>

<template>
    <!-- Top Bar (screen only) -->
    <div class="top-bar no-print">
        <router-link to="/" class="back-link">← Back to Home</router-link>
        <button @click="printPage" class="print-btn">
            <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print / Save PDF
        </button>
    </div>

    <!-- Portfolio Document -->
    <div class="page-bg">
        <div class="portfolio-doc">

            <!-- Document Header -->
            <div class="doc-header">
                <div class="header-left">
                    <img src="/dino-ava.jpg" alt="Dino Baggio" class="avatar-img" />
                    <div>
                        <h1 class="doc-name">Dino Baggio</h1>
                        <p class="doc-sub">Software Engineer · Fullstack Developer · Prompt Engineer</p>
                        <p class="doc-sub" style="margin-top:2px; font-size:0.72rem; opacity:0.7;">
                            dbaggio111@gmail.com &nbsp;·&nbsp; https://dinobaggio.github.io &nbsp;·&nbsp; linkedin.com/in/dino-baggio-877686143
                        </p>
                    </div>
                </div>
                <div class="portfolio-badge">Portfolio</div>
            </div>

            <!-- ════ KLEDO ════ -->
            <div class="company-section">
                <div class="company-header kledo-header">
                    <div class="company-logo-wrap">
                        <img src="/kledo-logo.png" alt="Kledo" class="company-logo kledo-logo" />
                    </div>
                    <div>
                        <div class="company-name">PT. Kledo Berhati Nyaman</div>
                        <div class="company-meta">Backend Developer · Prompt Engineer &nbsp;·&nbsp; Mar 2024 – Present</div>
                    </div>
                    <div class="project-count">{{ kledoCategories.length }} Categories</div>
                </div>

                <!-- Summary -->
                <div class="kledo-summary">
                    Primary focus on the <strong>Finance Reporting module</strong> — the largest workload — covering accounts receivable/payable aging, profit & loss, sales detail, purchase per product, inventory turnover, stock movement, and several new reports. Complemented by <strong>Midtrans & Billing integration</strong>, <strong>notification & email systems</strong>, a major <strong>CRM Subscription</strong> project, and consistent maintenance (Sentry, CI/CD, unit tests).
                </div>

                <div class="becourse-tech-row">
                    <span class="becourse-tech-label" style="color: #c2410c;">Tech Stack:</span>
                    <span class="becourse-tech-val">PHP · Laravel · MySQL · ClickHouse · Redis</span>
                </div>

                <!-- Category tables -->
                <div class="kledo-categories">
                    <div class="kledo-cat" v-for="cat in kledoCategories" :key="cat.title">
                        <div class="kledo-cat-header">
                            <span class="kledo-cat-title">{{ cat.title }}</span>
                            <span v-if="cat.badge" class="kledo-cat-badge">{{ cat.badge }}</span>
                        </div>
                        <div class="kledo-row" v-for="item in cat.items" :key="item.area">
                            <div class="kledo-area">{{ item.area }}</div>
                            <div class="kledo-desc">{{ item.work }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ════ BECOURSE ════ -->
            <div class="company-section print-page-start">
                <div class="company-header becourse-header">
                    <div class="company-logo-wrap white-bg-logo">
                        <img src="/logo-becourse.png" alt="Becourse" class="company-logo becourse-logo" />
                    </div>
                    <div>
                        <div class="company-name">PT Becourse Rintis Optima</div>
                        <div class="company-meta">Fullstack Developer · Prompt Engineer &nbsp;·&nbsp; Apr 2026 – Present</div>
                    </div>
                    <div class="project-count">{{ becourseCategories.length }} Categories</div>
                </div>

                <div class="becourse-summary">
                    Full-stack e-learning & digital product marketplace platform built as a <strong>monorepo</strong> — Go REST API backend, React + TypeScript user frontend, and React + TypeScript admin dashboard. Covers the entire product lifecycle: user auth, course/e-book management, learning progress, Midtrans payments, CMS, admin panel, and Cloudflare R2 file storage.
                </div>

                <div class="becourse-tech-row">
                    <span class="becourse-tech-label">Tech Stack:</span>
                    <span class="becourse-tech-val">Go · MySQL (Goose migrations) · React 19 · TypeScript · Vite · Tailwind CSS 4 · Redux Toolkit · Cloudflare R2 · Midtrans · JWT · Google OAuth</span>
                </div>

                <div class="kledo-categories" style="margin-top: 0.5rem;">
                    <div class="kledo-cat becourse-cat" v-for="cat in becourseCategories" :key="cat.title">
                        <div class="kledo-cat-header becourse-cat-header">
                            <span class="kledo-cat-title becourse-cat-title">{{ cat.title }}</span>
                        </div>
                        <div class="kledo-row" v-for="item in cat.items" :key="item.area">
                            <div class="kledo-area becourse-area">{{ item.area }}</div>
                            <div class="kledo-desc">{{ item.work }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ════ BADR ════ -->
            <div class="company-section print-page-start">
                <div class="company-header badr-header">
                    <div class="company-logo-wrap">
                        <img src="/badr-logo.png" alt="Badr Interactive" class="company-logo" />
                    </div>
                    <div>
                        <div class="company-name">PT. Badr Interactive</div>
                        <div class="company-meta">Software Developer &nbsp;·&nbsp; Aug 2020 – Dec 2023</div>
                    </div>
                    <div class="project-count">{{ badrProjects.length }} Projects</div>
                </div>
                <div class="projects-grid">
                    <div class="project-card" v-for="project in badrProjects" :key="project.title">
                        <div class="card-top">
                            <div class="proj-logo-wrap" :class="{ 'white-bg': project.logoBg }">
                                <img :src="project.logo" :alt="project.title" class="proj-logo" />
                            </div>
                            <div class="card-titles">
                                <div class="proj-title">{{ project.title }}</div>
                                <div class="proj-subtitle">{{ project.subtitle }}</div>
                            </div>
                        </div>
                        <p class="proj-desc">{{ project.description }}</p>
                        <div class="tech-row">
                            <span class="tech-label">Tech:</span>
                            <div class="tech-tags">
                                <span class="tag badr-tag" v-for="t in project.tech" :key="t">{{ t }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ════ NUSANTECH ════ -->
            <div class="company-section print-page-start">
                <div class="company-header nusa-header">
                    <div class="company-logo-wrap white-bg-logo">
                        <img src="/nusantech-logo.webp" alt="Nusantech" class="company-logo nusa-logo" />
                    </div>
                    <div>
                        <div class="company-name">Nusantech</div>
                        <div class="company-meta">Fullstack Developer &nbsp;·&nbsp; May 2018 – Apr 2020</div>
                    </div>
                    <div class="project-count">{{ nusantechProjects.length }} Projects</div>
                </div>
                <div class="projects-grid">
                    <div class="project-card" v-for="project in nusantechProjects" :key="project.title">
                        <div class="card-top">
                            <div class="proj-logo-wrap" :class="{ 'white-bg': project.logoBg }">
                                <img :src="project.logo" :alt="project.title" class="proj-logo" />
                            </div>
                            <div class="card-titles">
                                <div class="proj-title">{{ project.title }}</div>
                                <div class="proj-subtitle">{{ project.subtitle }}</div>
                            </div>
                        </div>
                        <p class="proj-desc">{{ project.description }}</p>
                        <div class="tech-row">
                            <span class="tech-label">Tech:</span>
                            <div class="tech-tags">
                                <span class="tag nusa-tag" v-for="t in project.tech" :key="t">{{ t }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ════ SNEAKERSHOOT & KOMINFO (share page 3) ════ -->
            <div class="company-section print-page-start">
                <div class="company-header sneak-header">
                    <div class="company-logo-wrap">
                        <img src="/sneakershoot-logo.png" alt="Sneakershoot" class="company-logo" />
                    </div>
                    <div>
                        <div class="company-name">Sneakershoot</div>
                        <div class="company-meta">Flutter Developer &nbsp;·&nbsp; Jun 2020 – Aug 2020</div>
                    </div>
                    <div class="project-count">{{ sneakershootProjects.length }} Project</div>
                </div>
                <div class="projects-grid grid-single">
                    <div class="project-card" v-for="project in sneakershootProjects" :key="project.title">
                        <div class="card-top">
                            <div class="proj-logo-wrap" :class="{ 'white-bg': project.logoBg }">
                                <img :src="project.logo" :alt="project.title" class="proj-logo" />
                            </div>
                            <div class="card-titles">
                                <div class="proj-title">{{ project.title }}</div>
                                <div class="proj-subtitle">{{ project.subtitle }}</div>
                            </div>
                        </div>
                        <p class="proj-desc">{{ project.description }}</p>
                        <div class="tech-row">
                            <span class="tech-label">Tech:</span>
                            <div class="tech-tags">
                                <span class="tag sneak-tag" v-for="t in project.tech" :key="t">{{ t }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ════ KOMINFO (continues page 3) ════ -->
            <div class="company-section">
                <div class="company-header kominfo-header">
                    <div class="company-logo-wrap">
                        <img src="/kominfo-logo.png" alt="Kominfo" class="company-logo kominfo-logo" />
                    </div>
                    <div>
                        <div class="company-name">Kominfo (PDSI Kementerian Kominfo)</div>
                        <div class="company-meta">Fullstack Developer &nbsp;·&nbsp; Mar 2019 – May 2019</div>
                    </div>
                    <div class="project-count">{{ kominfoProjects.length }} Project</div>
                </div>
                <div class="projects-grid grid-single">
                    <div class="project-card" v-for="project in kominfoProjects" :key="project.title">
                        <div class="card-top">
                            <div class="proj-logo-wrap" :class="{ 'white-bg': project.logoBg }">
                                <img :src="project.logo" :alt="project.title" class="proj-logo kominfo-proj-logo" />
                            </div>
                            <div class="card-titles">
                                <div class="proj-title">{{ project.title }}</div>
                                <div class="proj-subtitle">{{ project.subtitle }}</div>
                            </div>
                        </div>
                        <p class="proj-desc">{{ project.description }}</p>
                        <div class="tech-row">
                            <span class="tech-label">Tech:</span>
                            <div class="tech-tags">
                                <span class="tag kominfo-tag" v-for="t in project.tech" :key="t">{{ t }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<!-- Global print overrides -->
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
        margin: 12mm 14mm;
    }
}
</style>

<style scoped>
/* ── Screen ── */
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

/* ── Document ── */
.portfolio-doc {
    background: white;
    max-width: 900px;
    margin: 0 auto;
    box-shadow: 0 8px 40px rgba(0,0,0,0.18);
    border-radius: 6px;
    overflow: hidden;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #1e293b;
}

/* ── Document Header ── */
.doc-header {
    background: linear-gradient(135deg, #1b2578, #2D4181);
    color: white;
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
}
.header-left {
    display: flex;
    align-items: center;
    gap: 1.25rem;
}
.avatar-img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(255,255,255,0.35);
    flex-shrink: 0;
}
.doc-name {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.02em;
}
.doc-sub {
    font-size: 0.8rem;
    color: #93c5fd;
    margin: 0.15rem 0 0;
}
.portfolio-badge {
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 0.4rem 1rem;
    border: 2px solid rgba(255,255,255,0.4);
    border-radius: 9999px;
    color: rgba(255,255,255,0.85);
    white-space: nowrap;
    flex-shrink: 0;
}

/* ── Company Section ── */
.company-section {
    padding: 0 0 1.5rem;
    border-top: 8px solid #f1f5f9;
}

.company-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 2rem;
    flex-wrap: wrap;
}
.becourse-header{ background: #f0fdfa; border-bottom: 1px solid #99f6e4; }
.kledo-header  { background: #fff7ed; border-bottom: 1px solid #fed7aa; }
.badr-header   { background: #eff6ff; border-bottom: 1px solid #dbeafe; }
.nusa-header   { background: #f0fdf4; border-bottom: 1px solid #bbf7d0; }
.sneak-header  { background: #faf5ff; border-bottom: 1px solid #e9d5ff; }
.kominfo-header{ background: #f0fdf4; border-bottom: 1px solid #bbf7d0; }

.company-logo-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 0.75rem;
    border-radius: 8px;
    background: rgba(0,0,0,0.05);
    flex-shrink: 0;
}
.white-bg-logo { background: white; border: 1px solid #e2e8f0; }
.company-logo  { height: 32px; object-fit: contain; }
.becourse-logo { height: 28px; }
.nusa-logo     { height: 24px; }
.kledo-logo    { height: 28px; }
.kominfo-logo  { height: 44px; }

.company-name {
    font-weight: 700;
    font-size: 0.95rem;
    color: #1e293b;
}
.company-meta {
    font-size: 0.75rem;
    color: #64748b;
    margin-top: 0.1rem;
}
.project-count {
    margin-left: auto;
    font-size: 0.7rem;
    font-weight: 700;
    color: #94a3b8;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}

/* ── Projects Grid ── */
.projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: #e2e8f0;
    margin: 1rem 1.5rem 0;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
}
.grid-single {
    grid-template-columns: 1fr;
}

.project-card {
    background: white;
    padding: 1rem 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transition: background 0.15s;
}
.project-card:hover { background: #fafbff; }

.card-top {
    display: flex;
    align-items: flex-start;
    gap: 0.625rem;
}
.proj-logo-wrap {
    width: 40px;
    height: 40px;
    border-radius: 7px;
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: 3px;
}
.proj-logo-wrap.white-bg { background: white; }
.proj-logo {
    width: 32px;
    height: 32px;
    object-fit: contain;
}
.kominfo-proj-logo {
    width: 28px;
    height: 28px;
}
.card-titles { flex: 1; min-width: 0; }
.proj-title {
    font-weight: 700;
    font-size: 0.82rem;
    color: #1e293b;
    line-height: 1.3;
}
.proj-subtitle {
    font-size: 0.68rem;
    color: #94a3b8;
    margin-top: 0.1rem;
    line-height: 1.3;
}
.proj-desc {
    font-size: 0.77rem;
    color: #475569;
    line-height: 1.55;
    margin: 0;
    flex: 1;
}
.tech-row {
    display: flex;
    align-items: flex-start;
    gap: 0.35rem;
    flex-wrap: wrap;
    margin-top: auto;
}
.tech-label {
    font-size: 0.67rem;
    font-weight: 700;
    color: #94a3b8;
    margin-top: 2px;
    white-space: nowrap;
}
.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
}
.tag {
    font-size: 0.6rem;
    font-weight: 700;
    padding: 1px 5px;
    border-radius: 4px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
}
.kledo-tag   { background: #ffedd5; color: #c2410c; }

/* ── Kledo category table layout ── */
.becourse-summary {
    margin: 0.75rem 1.5rem 0;
    padding: 0.625rem 0.875rem;
    background: #f0fdfa;
    border-left: 3px solid #14b8a6;
    border-radius: 4px;
    font-size: 0.75rem;
    line-height: 1.6;
    color: #134e4a;
}
.becourse-summary strong { color: #0f766e; }
.becourse-tech-row {
    margin: 0.4rem 1.5rem 0;
    font-size: 0.72rem;
    color: #64748b;
}
.becourse-tech-label { font-weight: 700; color: #1e293b; margin-right: 0.3rem; }
.becourse-tech-val { color: #475569; }
.becourse-cat .kledo-cat-header { background: #f0fdfa; border-bottom: 1px solid #99f6e4; }
.becourse-cat-title { color: #0f766e !important; }
.becourse-area { color: #0d4f3d !important; background: #f0fdfa !important; }

.kledo-summary {
    margin: 0.75rem 1.5rem 0;
    padding: 0.625rem 0.875rem;
    background: #fff7ed;
    border-left: 3px solid #f97316;
    border-radius: 4px;
    font-size: 0.75rem;
    line-height: 1.6;
    color: #44403c;
}
.kledo-summary strong { color: #c2410c; }
.kledo-categories {
    margin: 0.75rem 1.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
}
.kledo-cat {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    overflow: hidden;
}
.kledo-cat-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.75rem;
    background: #fff7ed;
    border-bottom: 1px solid #fed7aa;
}
.kledo-cat-title {
    font-size: 0.75rem;
    font-weight: 700;
    color: #c2410c;
}
.kledo-cat-badge {
    font-size: 0.55rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.1rem 0.4rem;
    border-radius: 9999px;
    background: #f97316;
    color: white;
}
.kledo-row {
    display: grid;
    grid-template-columns: 175px 1fr;
    border-bottom: 1px solid #f1f5f9;
}
.kledo-row:last-child { border-bottom: none; }
.kledo-area {
    padding: 0.4rem 0.75rem;
    font-size: 0.7rem;
    font-weight: 600;
    color: #92400e;
    background: #fffbf7;
    border-right: 1px solid #f1f5f9;
}
.kledo-desc {
    padding: 0.4rem 0.75rem;
    font-size: 0.7rem;
    color: #475569;
    line-height: 1.5;
}
.badr-tag    { background: #e0e7ff; color: #3730a3; }
.nusa-tag    { background: #dcfce7; color: #166534; }
.sneak-tag   { background: #ede9fe; color: #5b21b6; }
.kominfo-tag { background: #dcfce7; color: #166534; }

/* ── Mobile ── */
@media (max-width: 640px) {
    .top-bar { padding: 0.75rem 1rem; }
    .print-btn { padding: 0.5rem 1rem; font-size: 0.8rem; }
    .doc-header { padding: 1rem; gap: 0.75rem; flex-wrap: wrap; }
    .avatar-img { width: 52px; height: 52px; }
    .doc-name { font-size: 1.1rem; }
    .company-header { padding: 0.75rem 1rem; }
    .projects-grid { grid-template-columns: 1fr; margin: 0.75rem 0.75rem 0; }
    .kledo-summary, .becourse-summary { margin: 0.5rem 0.75rem 0; }
    .becourse-tech-row { margin: 0.4rem 0.75rem 0; }
    .kledo-categories { margin: 0.5rem 0.75rem 0.5rem; }
    .kledo-row { grid-template-columns: 1fr; }
    .kledo-area { border-right: none; border-bottom: 1px solid #f1f5f9; }
    .becourse-area { border-right: none !important; border-bottom: 1px solid #e2e8f0 !important; }
}

/* ── Print ── */
@media print {
    .no-print { display: none !important; }
    .page-bg {
        background: white !important;
        padding: 0 !important;
        min-height: unset;
    }
    .portfolio-doc {
        max-width: 100% !important;
        margin: 0 !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        font-size: 8.5pt !important;
    }
    .doc-header {
        padding: 1rem 1.5rem !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    .company-header {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        padding: 0.6rem 1.5rem !important;
    }
    .company-section {
        border-top: none !important;
    }
    .print-page-start {
        break-before: page;
    }
    .projects-grid {
        margin: 0.75rem 1.25rem 0 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    .project-card { break-inside: avoid; }
    .becourse-summary {
        margin: 0.5rem 1.25rem 0 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    .becourse-cat .kledo-cat-header {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    .becourse-area {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    .kledo-summary {
        margin: 0.5rem 1.25rem 0 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    .kledo-categories { margin: 0.5rem 1.25rem 0.5rem !important; }
    .kledo-cat { break-inside: avoid; }
    .kledo-cat-header {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    .kledo-area {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    .tag {
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
}
</style>
