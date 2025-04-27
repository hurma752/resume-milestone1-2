"use strict";
class ResumeController {
    constructor() {
        this.skills = [
            { name: 'HTML', progress: 80 },
            { name: 'CSS', progress: 70 },
            { name: 'TypeScript', progress: 90 },
            { name: 'Java', progress: 70 },
        ];
        this.initializeSkillAnimations();
        this.initializeSectionToggles();
    }
    initializeSkillAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.getAttribute('data-progress');
                    if (width) {
                        progressBar.style.width = `${width}%`;
                    }
                }
            });
        }, { threshold: 0.5 });
        document.querySelectorAll('.skill-progress').forEach((progressBar) => {
            observer.observe(progressBar);
        });
    }
    initializeSectionToggles() {
        const skillsSection = document.getElementById('skills-section');
        const toggleButton = skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.querySelector('.section-toggle');
        if (toggleButton && skillsSection) {
            toggleButton.addEventListener('click', () => {
                skillsSection.classList.toggle('collapsed');
                const icon = toggleButton.querySelector('i');
                if (icon) {
                    if (skillsSection.classList.contains('collapsed')) {
                        icon.classList.remove('fa-eye');
                        icon.classList.add('fa-eye-slash');
                    }
                    else {
                        icon.classList.remove('fa-eye-slash');
                        icon.classList.add('fa-eye');
                    }
                }
            });
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new ResumeController();
});
