<script setup>
const techStack = ['PHP', 'Laravel', 'Yii', 'Yii2'];
</script>

<template>
    <div class="exp-card">
        <div class="flex items-start gap-5 flex-wrap">
            <div class="logo-wrap">
                <div class="kominfo-logo" />
            </div>
            <div class="flex-1" style="min-width: 0;">
                <div class="flex flex-wrap items-center gap-2">
                    <h3 class="font-bold text-h6" style="color: #1e293b;">Kominfo</h3>
                    <span class="pill-role">Fullstack Developer</span>
                    <span class="pill-date">Mar 2019 – May 2019</span>
                </div>
                <ul class="mt-4 pl-5 list-disc text-p leading-relaxed" style="color: #475569;">
                    <li>Placed on PDSI Kementerian Kominfo</li>
                    <li>Primarily involved in full-stack application development for both internal and external PDSI applications, along with application maintenance and feature additions</li>
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
    border-left: 4px solid #10b981;
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
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    height: 80px;
    flex-shrink: 0;
}
.kominfo-logo {
    width: 64px;
    height: 64px;
    background-image: url('/kominfo-logo.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
.pill-role {
    padding: 0.2rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.8rem;
    font-weight: 600;
    background: #d1fae5;
    color: #065f46;
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
    background: #d1fae5;
    color: #065f46;
    text-transform: uppercase;
    letter-spacing: 0.03em;
}
</style>
