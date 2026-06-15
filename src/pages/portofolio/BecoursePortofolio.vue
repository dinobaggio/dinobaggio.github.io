<script setup>
import { onMounted } from 'vue';
onMounted(() => window.scrollTo({ top: 0 }));

const categories = [
    {
        title: 'Authentication & User Management',
        badge: null,
        intro: null,
        color: 'teal',
        items: [
            { area: 'Auth System', work: 'Email/password registration with email verification, Google OAuth login, JWT-based authentication, and password reset via email.' },
            { area: 'RBAC', work: 'Role-Based Access Control with three roles: Admin, Instructor, and Student. Role and permission management via admin dashboard.' },
            { area: 'User Profile', work: 'Profile editing, avatar upload, bio, skills, and phone number management.' },
        ],
    },
    {
        title: 'Product Management',
        badge: null,
        intro: 'Core commerce layer — courses and e-books as the two main product types.',
        color: 'blue',
        items: [
            { area: 'Courses', work: 'CRUD with hierarchical content: Course → Module → Lesson → Quiz. Each lesson supports video (URL-based), rich text content, downloadable file attachments, and multiple-choice quizzes. Settings include level (Beginner/Intermediate/Advanced), release date, cover image, and pricing with original (strike-through) price.' },
            { area: 'E-Books', work: 'CRUD with ISBN/EISBN tracking, download tokens with configurable expiry time, and a secured download flow.' },
        ],
    },
    {
        title: 'Learning Experience',
        badge: null,
        intro: 'Features for enrolled students to consume content, track progress, and interact.',
        color: 'purple',
        items: [
            { area: 'Progress Tracking', work: 'Per-lesson completion tracking with automatic course completion percentage calculation and progress snapshot storage for enrolled students.' },
            { area: 'Quiz System', work: 'Multiple-choice quizzes per lesson: attempt tracking, automatic score calculation, answer correction, and full quiz result history.' },
            { area: 'Module Discussion', work: 'Students can post questions within course modules. Nested comments with depth tracking, instructor responses, recent activity feed, and filter by course/module.' },
        ],
    },
    {
        title: 'Payments & Orders',
        badge: null,
        intro: null,
        color: 'green',
        items: [
            { area: 'Order System', work: 'Multi-product order creation and tracking with unique order codes. Order statuses: pending, paid, failed, expired, cancelled. Full order history per user.' },
            { area: 'Midtrans Integration', work: 'Snap token generation for the payment UI, webhook handler for async payment status updates, fraud detection, transaction type and method tracking, and settlement confirmation.' },
        ],
    },
    {
        title: 'CMS & Content Features',
        badge: null,
        intro: null,
        color: 'orange',
        items: [
            { area: 'Articles & Blog', work: 'CRUD with Quill 2 rich text editor, hierarchical categories (parent/child), featured flag, sort order, view count tracking, publish/draft status, SEO meta title/description, and slug-based URLs.' },
            { area: 'Reviews & Social', work: '1–5 star product reviews with average rating and review count. Nested product comments. Wishlist (add/remove) for both courses and e-books with ownership status display.' },
            { area: 'SEO & Sitemap', work: 'Dynamic Open Graph meta tags for articles, e-books, and courses. Auto-generated XML sitemap at /sitemap.xml. Clean, SEO-friendly slug URLs across all content.' },
        ],
    },
    {
        title: 'Admin Dashboard & Support',
        badge: null,
        intro: null,
        color: 'red',
        items: [
            { area: 'Admin Panel', work: 'Full CRUD management for users (with role assignment), courses, modules, lessons, e-books, articles, article categories, orders, payments, instructors, and support tickets.' },
            { area: 'Support Tickets', work: 'Users submit tickets with title and description. Bi-directional comments (user ↔ admin), admin-only comment threads, nested comments with depth tracking, status tracking (pending/resolved).' },
            { area: 'Notifications', work: 'Admin notification center for new user registrations, paid orders, and new support tickets. Read/unread status with bulk mark-all-as-read.' },
            { area: 'Error Logging', work: 'Server-side error 500 logging with status code, response data, and admin access for debugging production issues.' },
        ],
    },
    {
        title: 'Infrastructure & Deployment',
        badge: null,
        intro: null,
        color: 'gray',
        items: [
            { area: 'File Storage', work: 'Cloudflare R2 (S3-compatible) for all object storage. Presigned URLs for secure file serving. Time-limited download tokens for course lesson files and e-books. Direct image upload from within the rich text editor.' },
            { area: 'Deployment', work: 'Docker + docker-compose for both dev and production environments. Nginx reverse proxy configuration. Environment managed via .env (database, JWT, R2, SMTP, Midtrans, Google OAuth). Makefile commands for migrations (Goose), seeding, and local development.' },
        ],
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
                    <img src="/logo-becourse.png" alt="Becourse" class="company-logo" />
                </div>
                <h1 class="text-h3 font-bold gradient-text mt-4">Becourse Portfolio</h1>
                <p class="meta-text">Fullstack Developer · Prompt Engineer &nbsp;·&nbsp; Apr 2026 – Present</p>
            </div>

            <!-- Summary -->
            <div class="summary-card">
                <p>
                    <strong>BECourse</strong> is a full-stack e-learning and digital product marketplace built as a <strong>monorepo</strong> with three applications — a Go REST API backend, a React + TypeScript user-facing frontend, and a React + TypeScript admin dashboard. The platform covers the complete product lifecycle: user authentication & roles, course and e-book management with rich content types, learning progress & quizzes, Midtrans payment integration, a full CMS, instructor management, admin dashboard, support tickets, and Cloudflare R2 file storage — with Docker + Nginx deployment.
                </p>
                <div class="tech-row">
                    <span class="tech-label">Tech Stack:</span>
                    <span>Go · MySQL (Goose) · React 19 · TypeScript · Vite · Tailwind CSS 4 · Redux Toolkit · Radix UI · Quill 2 · Cloudflare R2 · Midtrans · JWT · Google OAuth · Docker · Nginx</span>
                </div>
            </div>

            <!-- Category Sections -->
            <div class="pb-16">
                <div
                    class="category-section"
                    v-for="cat in categories"
                    :key="cat.title"
                    :class="'border-' + cat.color"
                >
                    <div class="cat-header" :class="'header-' + cat.color">
                        <h2 class="cat-title">{{ cat.title }}</h2>
                        <span v-if="cat.badge" class="cat-badge">{{ cat.badge }}</span>
                    </div>
                    <p v-if="cat.intro" class="cat-intro">{{ cat.intro }}</p>
                    <div class="work-table">
                        <div class="work-row" v-for="item in cat.items" :key="item.area">
                            <div class="work-area" :class="'area-' + cat.color">{{ item.area }}</div>
                            <div class="work-desc">{{ item.work }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.page-wrap { min-height: 100vh; }

.back-link {
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
    color: rgba(147, 197, 253, 0.85);
    text-decoration: none;
    transition: color 0.2s;
}
.back-link:hover { color: white; }

.page-header {
    text-align: center;
    padding: 2rem 0 2rem;
}
.company-logo-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 12px;
    padding: 0.75rem 1.5rem;
}
.company-logo { height: 36px; object-fit: contain; }
.gradient-text {
    background: linear-gradient(135deg, #ffffff 40%, #5eead4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
.meta-text {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: rgba(94, 234, 212, 0.75);
}

/* Summary */
.summary-card {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 4px solid #14b8a6;
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    line-height: 1.7;
    color: rgba(219, 234, 254, 0.8);
}
.summary-card strong { color: #5eead4; }
.tech-row {
    margin-top: 0.75rem;
    font-size: 0.82rem;
    color: rgba(148, 163, 184, 0.8);
}
.tech-label {
    font-weight: 700;
    color: #5eead4;
    margin-right: 0.4rem;
}

/* Category Section */
.category-section {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 14px;
    margin-bottom: 1.25rem;
    overflow: hidden;
}
.border-teal   { border-left: 4px solid #14b8a6; }
.border-blue   { border-left: 4px solid #3b82f6; }
.border-purple { border-left: 4px solid #a855f7; }
.border-green  { border-left: 4px solid #22c55e; }
.border-orange { border-left: 4px solid #f97316; }
.border-red    { border-left: 4px solid #ef4444; }
.border-gray   { border-left: 4px solid #94a3b8; }

.cat-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1.25rem;
    background: rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.cat-title {
    font-size: 1rem;
    font-weight: 700;
    color: white;
    margin: 0;
}
.cat-badge {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.2rem 0.6rem;
    border-radius: 9999px;
    background: #14b8a6;
    color: white;
}
.cat-intro {
    padding: 0.625rem 1.25rem 0;
    font-size: 0.82rem;
    color: rgba(147, 197, 253, 0.65);
    font-style: italic;
}

/* Work table */
.work-table { padding: 0.5rem 0; }
.work-row {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: background 0.15s;
}
.work-row:last-child { border-bottom: none; }
.work-row:hover { background: rgba(255, 255, 255, 0.04); }
.work-area {
    padding: 0.625rem 1.25rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: #5eead4;
    border-right: 1px solid rgba(255, 255, 255, 0.07);
    display: flex;
    align-items: flex-start;
}
.work-desc {
    padding: 0.625rem 1.25rem;
    font-size: 0.8rem;
    color: rgba(219, 234, 254, 0.75);
    line-height: 1.6;
}

@media (max-width: 640px) {
    .work-row { grid-template-columns: 1fr; }
    .work-area { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
}
</style>
