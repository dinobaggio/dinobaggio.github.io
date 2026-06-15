<script setup>
const tools = [
    { name: 'Cursor', src: '/cursor-logo.png' },
    { name: 'Claude', src: '/claude-logo.png' },
    { name: 'GitHub Copilot', src: '/github-copilot-logo.png' },
];
</script>

<template>
    <div class="section">
        <div class="container-page py-10 sm:py-16">
            <div class="text-center mb-12">
                <div class="text-h5 sm:text-h3 font-bold">AI Coding Assistant</div>
                <div class="accent-line" />
            </div>
            <div class="tools-grid">
                <div class="tool-card" v-for="tool in tools" :key="tool.name">
                    <div class="icon-wrap">
                        <img :src="tool.src" :alt="tool.name" :title="tool.name" class="tool-icon" />
                    </div>
                    <span class="tool-name">{{ tool.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.section {
    border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.accent-line {
    width: 56px;
    height: 4px;
    border-radius: 2px;
    margin: 0.75rem auto 0;
    background: linear-gradient(to right, #93c5fd, #fdba74);
}
.tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 150px));
    gap: 1rem;
    justify-content: center;
    margin: 0 auto;
}
.tool-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
    padding: 1.5rem 1rem;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.12);
    cursor: default;
    transition: background 0.2s, transform 0.2s;
}
.tool-card:hover {
    background: rgba(255, 255, 255, 0.14);
    transform: translateY(-3px);
}
.icon-wrap {
    width: 52px;
    height: 52px;
    background: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
}
.tool-icon {
    width: 44px;
    height: 44px;
    object-fit: contain;
}
.tool-name {
    font-size: 0.75rem;
    font-weight: 500;
    text-align: center;
    color: #bfdbfe;
}
</style>
