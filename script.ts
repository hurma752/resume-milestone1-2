class ResumeController {
    private skills: { name: string; progress: number }[] = [
        { name: 'HTML', progress: 80 },
        { name: 'CSS', progress: 70 },
        { name: 'TypeScript', progress: 90 },
        { name: 'Java', progress: 70 },
    ];

    constructor() {
        this.initializeSkillAnimations();
        this.initializeSectionToggles();
    }

    private initializeSkillAnimations(): void {
        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const progressBar = entry.target as HTMLElement;
                        const width = progressBar.getAttribute('data-progress');
                        if (width) {
                            progressBar.style.width = `${width}%`;
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll('.skill-progress').forEach((progressBar) => {
            observer.observe(progressBar);
        });
    }

    private initializeSectionToggles(): void {
        const skillsSection = document.getElementById('skills-section');
        const toggleButton = skillsSection?.querySelector('.section-toggle') as HTMLElement;

        if (toggleButton && skillsSection) {
            toggleButton.addEventListener('click', () => {
                skillsSection.classList.toggle('collapsed');
                
                const icon = toggleButton.querySelector('i') as HTMLElement;
                if (icon) {
                    if (skillsSection.classList.contains('collapsed')) {
                        icon.classList.remove('fa-eye');
                        icon.classList.add('fa-eye-slash');
                    } else {
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
