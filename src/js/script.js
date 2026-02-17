import { generateExperiences } from "./modules/generateExperiences.js";
import { shuffleLetters } from './modules/shuffle-letters/shuffleLetters.js';
import { yearsAndMonthsSince } from "./modules/yearsAndMonthsSince.js";
import { interactiveGallery } from "./modules/interactiveGallery.js";

function loadBackgroundImage() {
    VANTA.DOTS({
        el: "#vanta-dots-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        showLines: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0,
        color: 0xfafafa,
    });
}

function animateTexts() {
    const glitchShuffle = document.querySelector("#glitchShuffle");

    new TypeIt("#glitch", {
        lifeLike: true,
        html: true,
        speed: 10,
        cursor: false,
        afterComplete: async (instance) => {
            shuffleLetters(document.querySelector('#specialization'), {
                text: 'PHP Laravel Developer | Technical Specialist'
            });
        }
    })
    .type(`Hello, World! I'm `)
    .exec(async () => shuffleLetters(glitchShuffle, { text: 'rein0x13', iterations: 16, fps: 30 }))
    .go();

    new TypeIt('#wip', {
        strings: 'To 8finity and beyond...',
        lifeLike: true,
        waitUntilVisible: true,
        cursor: false,
    }).go();
}

function loadSectionEffects() {

    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-item');

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                const id = entry.target.id;
                // todo: optimizations
                const navItem = Array.from(navItems).find(element => element.dataset.target == id);
                const header = document.querySelector(`section#${id} .header`);
                const label = id.replace('-', ' ');

                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    navItems.forEach(item => item.classList.remove('active'));

                    if (navItem != undefined) {
                        navItem?.classList.add('active');
                        shuffleLetters(navItem, { text: label, iterations: 4 });
                    }

                    (header.textContent == '-') && shuffleLetters(header, { text: label.toUpperCase(), iterations: 8, fps: 60 });
                } else {
                    entry.target.classList.remove('active');
                    if (navItem != 'undefined') {
                        navItem?.classList.remove('active');
                        navItem.textContent = label.toLowerCase();
                    }
                    (header.textContent != '-') && shuffleLetters(header, { text: '-', iterations: 2 });
                }
            });
        },
        {
            rootMargin: '-40% 0px -60% 0px',
            threshold: 0
        }
    );

    sections.forEach(section => { observer.observe(section) });

    navItems.forEach(item => {
        shuffleLetters(item);
        item.addEventListener('click', () => {
            document
                .getElementById(item.dataset.target)
                .scrollIntoView({ behavior: 'smooth' });
        });
    });

    setTimeout(() => Array.from(document.getElementsByClassName('pseudo-redacted')).forEach(item => shuffleLetters(item, { text: item.dataset.str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13))), iterations: 2, fps: 60 })), 1000);
    setTimeout(() => shuffleLetters(document.getElementById('laravel-experience'), { text: yearsAndMonthsSince('2023-12-01', '2025-07-01'), iterations: 2 }), 2000);
}

window.addEventListener('DOMContentLoaded', () => {
    loadBackgroundImage();
    animateTexts();
    generateExperiences();
    loadSectionEffects();
    interactiveGallery();
})