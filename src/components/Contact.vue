<template>
    <div class="section">
        <div id="contact" class="container-page py-10 sm:py-16">
            <div class="text-center mb-10">
                <div class="text-h5 sm:text-h3 font-bold">Contact</div>
                <div class="accent-line" />
            </div>
            <div class="flex flex-col items-center gap-8">
                <p class="text-p text-center max-w-md" style="color: rgba(219, 234, 254, 0.75);">
                    I'm open to new opportunities and collaborations. Feel free to reach out!
                </p>
                <div class="flex flex-wrap gap-4 justify-center">
                    <div class="email-display">
                        <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        dbaggio111@gmail.com
                    </div>
                    <a href="https://www.linkedin.com/in/dino-baggio-877686143/" target="_blank" rel="noopener noreferrer" class="contact-btn">
                        <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© 2024 Dino Baggio · Built with Vue 3 + Vite</p>
        </div>
    </div>
</template>

<style scoped>
.section {
    background: linear-gradient(180deg, #1b2578 0%, #0f1857 100%);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.accent-line {
    width: 56px;
    height: 4px;
    border-radius: 2px;
    margin: 0.75rem auto 0;
    background: linear-gradient(to right, #93c5fd, #a78bfa);
}
.contact-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.75rem;
    border-radius: 9999px;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.2s;
}
.contact-btn:hover {
    background: rgba(255, 255, 255, 0.18);
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.4);
}
.email-display {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.75rem;
    border-radius: 9999px;
    font-size: 1rem;
    font-weight: 500;
    color: #bfdbfe;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.15);
    user-select: text;
}
.icon {
    width: 20px;
    height: 20px;
}
.footer {
    text-align: center;
    padding: 1.25rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 0.8rem;
    color: rgba(148, 163, 184, 0.7);
}
</style>
