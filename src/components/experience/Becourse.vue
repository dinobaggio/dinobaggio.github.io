<script setup>
const techStack = ['Golang', 'Goose', 'MySQL', 'ReactJS', 'TypeScript', 'Tailwind', 'Vite', 'Cloudflare R2'];
</script>

<template>
    <div class="exp-card">
        <div class="flex items-start gap-5 flex-wrap">
            <div class="logo-wrap">
                <div class="becourse-logo" />
            </div>
            <div class="flex-1" style="min-width: 0;">
                <div class="flex flex-wrap items-center gap-2">
                    <h3 class="font-bold text-h6" style="color: #1e293b;">PT Becourse Rintis Optima</h3>
                    <span class="pill-role">Fullstack Developer</span>
                    <span class="pill-role">Prompt Engineer</span>
                    <span class="pill-date">Apr 2026 – Present</span>
                </div>
                <ul class="mt-4 pl-5 list-disc text-p leading-relaxed" style="color: #475569;">
                    <li>Built a full-stack e-learning & digital marketplace platform (monorepo: Go API + React admin + React user frontend)</li>
                    <li>Implemented authentication (email/OAuth), RBAC (Admin/Instructor/Student), course & e-book management with hierarchical content (Course → Module → Lesson → Quiz)</li>
                    <li>Integrated Midtrans Snap payment gateway with webhook handling, multi-product orders, and Cloudflare R2 file storage with presigned URLs</li>
                    <li>Developed CMS (articles, rich text editor, SEO), product reviews, wishlists, module discussion forums, and user/instructor dashboards</li>
                    <li>Built admin dashboard with full CRUD, support ticket system, admin notifications, error 500 logging, and Docker/Nginx deployment</li>
                </ul>
                <div class="flex flex-wrap gap-2 mt-4">
                    <span class="tech-tag" v-for="tech in techStack" :key="tech">{{ tech }}</span>
                </div>
                <div class="mt-4">
                    <router-link to="/becourse-portofolio" class="view-link">View Portfolio →</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.exp-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-left: 4px solid #14b8a6;
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
.becourse-logo {
    width: 110px;
    height: 40px;
    background-image: url('/logo-becourse.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
.pill-role {
    padding: 0.2rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.8rem;
    font-weight: 600;
    background: #ccfbf1;
    color: #0f766e;
}
.pill-date {
    padding: 0.2rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.8rem;
    background: #f1f5f9;
    color: #64748b;
}
.view-link {
    display: inline-flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 600;
    color: #0f766e;
    text-decoration: none;
    transition: color 0.2s;
}
.view-link:hover {
    color: #14b8a6;
}
.tech-tag {
    padding: 0.2rem 0.6rem;
    border-radius: 6px;
    font-size: 0.64rem;
    font-weight: 600;
    background: #ccfbf1;
    color: #0f766e;
    text-transform: uppercase;
    letter-spacing: 0.03em;
}
@media (max-width: 480px) {
    .exp-card { padding: 1rem; }
    .logo-wrap { width: 100%; min-width: unset; justify-content: flex-start; height: 48px; }
}
</style>
