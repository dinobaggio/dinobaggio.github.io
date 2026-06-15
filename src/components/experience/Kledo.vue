<script setup>
const techStack = ['PHP', 'Laravel', 'MySQL', 'ClickHouse', 'Redis'];
</script>

<template>
    <div class="exp-card">
        <div class="flex items-start gap-5 flex-wrap">
            <div class="logo-wrap">
                <div class="kledo-logo" />
            </div>
            <div class="flex-1" style="min-width: 0;">
                <div class="flex flex-wrap items-center gap-2">
                    <h3 class="font-bold text-h6" style="color: #1e293b;">PT. Kledo Berhati Nyaman</h3>
                    <span class="pill-role">Backend Developer</span>
                    <span class="pill-role">Prompt Engineer</span>
                    <span class="pill-date">Mar 2024 – Present</span>
                </div>
                <ul class="mt-4 pl-5 list-disc text-p leading-relaxed" style="color: #475569;">
                    <li>Building financial report features such as accounts receivable/payable aging, profit & loss reports, purchase per product reports, inventory turnover reports, and stock movement reports</li>
                    <li>Integrating Midtrans payment gateway and Kledo Billing system</li>
                    <li>Admin feature adjustments for internal operational needs</li>
                    <li>Bug fixing via Sentry, CI/CD pipeline improvements, and writing Unit Tests</li>
                    <li>Primarily handling finance reports, Midtrans/Billing integration, notification and email systems, testing, and maintenance of the Kledo application</li>
                </ul>
                <div class="flex flex-wrap gap-2 mt-4">
                    <span class="tech-tag" v-for="tech in techStack" :key="tech">{{ tech }}</span>
                </div>
                <div class="mt-4">
                    <router-link to="/kledo-portofolio" class="view-link">View Portfolio →</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.exp-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-left: 4px solid #f97316;
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
.kledo-logo {
    width: 110px;
    height: 40px;
    background-image: url('/kledo-logo.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
.pill-role {
    padding: 0.2rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.8rem;
    font-weight: 600;
    background: #ffedd5;
    color: #c2410c;
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
    color: #c2410c;
    text-decoration: none;
    transition: color 0.2s;
}
.view-link:hover {
    color: #f97316;
}
.tech-tag {
    padding: 0.2rem 0.6rem;
    border-radius: 6px;
    font-size: 0.64rem;
    font-weight: 600;
    background: #ffedd5;
    color: #c2410c;
    text-transform: uppercase;
    letter-spacing: 0.03em;
}
</style>
