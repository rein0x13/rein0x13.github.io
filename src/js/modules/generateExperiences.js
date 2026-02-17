export function generateExperiences() {
    const container = document.getElementById('experience-container');

    const experiences = [
        {
            description: 'Developed a custom web application system for Clinica Zamoras, a medical and diagnostic pharmacy located in Hilongos, Leyte, Philippines.',
            list: [
                'Collaborated with the team members using Git for version control, GitHub for code repository, and Asana for project management.',
                'Largely contributed in expanding the functionalities of the system’s MedTech, Staff, and Doctor panel tailored to their needs.',
                'Integrated webcam functionality in the system used in creating and updating patient profiles.',
                'Helped in designing PDF templates for printing of lab requests, prescriptions, and results.',
                'Migrated their old patient data to their new system.',
                'Assisted co-developers in their roadblocks with the Filament and other Laravel plugins such as Spatie Laravel Permission, DomPDF, and Telescope.',
                'Improved the UX of the dashboard panels for easy navigation and data entry such as such as adding interactable breadcrumbs, meaningful color-coded buttons, mobile and widescreen responsiveness, plus keyboard navigation in some form pages.',
                'Conducted live demonstrations and communicated with the client throughout the development and feedbacking processes',
                'Revamped system processes and features based on clients’ feedback.'
            ],
        },
        {
            description: 'Built a co-working space management system for The Nest Coworking Space located in Hilongos, Leyte, Philippines.',
            list: [
                'Integrated payment gateways (Paymongo and Xendit) for invoices with live updates by utilizing webhooks.',
                'Spearheaded in researching and securing the system’s API routes.',
                'Implemented membership renewal automations and generation of payment requests based on adjustable system configurations.',
                'Added pusher websocket integration for real-time notification and updates.',
                'Applied memoization techniques to speed up the web application.',
                'Utilized QR codes and signed URLs with additional checks for customer registration.',
                'Analyzed issues and applied database transactions, action rate limiting and strict authorization based on user’s roles and permissions.',
                'Optimized database queries and refactored code for faster system responsiveness and minimize resource usage.',
                'Utilized Livewire, AOS, and Tailwind CSS on the system’s frontend.',
                'Wrote scripts for updating existing structure and data in the database.'
            ]
        },
        {
            description: 'Developed a small redirector system to forward webhook responses from Xendit to other systems.',
            list: [
                'Utilized Filament Breezy authentication plugin to enable MFA (Pre-filament V4) and PrettyJSON',
                'Implemented record locking and password prompts on sensitive actions',
                'Redacted captured sensitive request details and cleaned up the presentation.',
                'Added automatic retry and functionality to duplicate an existing request to a different endpoint.'
            ],
        }

    ];

    experiences.map(
        experience => {
            const div = document.createElement('div');
            div.classList.add('border-[1px]', 'border-neutral-700', 'rounded-sm', 'p-5', 'my-5', 'dark:bg-neutral-950');

            const description = document.createElement('p');
            description.classList.add('mb-3');
            description.textContent = experience.description;
            div.appendChild(description);

            const ul = document.createElement('ul');
            experience.list.map((v) => {
                const li = document.createElement('li');
                li.textContent = `${v}`,
                ul.appendChild(li);
            })

            div.appendChild(ul);
            container.appendChild(div);
    });
}