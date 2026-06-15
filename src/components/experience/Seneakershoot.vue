<script setup>
const techStack = ['Flutter', 'Dart'];
</script>

<template>
    <div class="exp-card">
        <div class="flex items-start gap-5 flex-wrap">
            <div class="logo-wrap">
                <div class="sneakershoot-logo" />
            </div>
            <div class="flex-1" style="min-width: 0;">
                <div class="flex flex-wrap items-center gap-2">
                    <h3 class="font-bold text-h6" style="color: #1e293b;">Sneakershoot</h3>
                    <span class="pill-role">Flutter Developer</span>
                    <span class="pill-date">Jun 2020 – Aug 2020</span>
                </div>
                <ul class="mt-4 pl-5 list-disc text-p leading-relaxed" style="color: #475569;">
                    <li>Engaged in hybrid mobile development using Flutter</li>
                    <li>Adding features and maintaining applications</li>
                </ul>
                <div class="flex flex-wrap gap-2 mt-4">
                    <span class="tech-tag" v-for="tech in techStack" :key="tech">{{ tech }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.exp-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-left: 4px solid #8b5cf6;
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
.sneakershoot-logo {
    width: 110px;
    height: 36px;
    background-image: url('/sneakershoot-logo.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
.pill-role {
    padding: 0.2rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.8rem;
    font-weight: 600;
    background: #ede9fe;
    color: #5b21b6;
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
    background: #ede9fe;
    color: #5b21b6;
    text-transform: uppercase;
    letter-spacing: 0.03em;
}
@media (max-width: 480px) {
    .exp-card { padding: 1rem; }
    .logo-wrap { width: 100%; min-width: unset; justify-content: flex-start; height: 48px; }
}
</style>
