export const SITE_TITLE: string = "Portfolio Site";
export const SITE_DESCRIPTION: string = "Aden Webster's Personal blog to showcase developer skills and share knowledge on homelab/server/programming things.";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};


export type SiteConfig = {
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
};

const siteConfig: SiteConfig = {
    title: 'A-Webster Portfolio',
    subtitle: 'Homelab, servers, IT stuff',
    description: 'Personal blog to showcase developer skills and share knowledge on homelab/server/programming things.',
    image: {
        src: '/ogp.png',
        alt: 'Eclipse - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Projects',
            href: '/works'
        },
        {
            text: 'Blog',
            href: '/posts'
        },
    ],
    footerNavLinks: [
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
    ],
    socialLinks: [
       
    ],
    hero: {
        title: 'Howdy Hey!',
        text: "Hello! My name is Aden. I'm currently working in customer support with a part time job in systems administration. I have a passion for technology and a keen interest in systems administration, and I am on a journey to bigger and greater things. This website is a chronicle of my learning experiences, projects, and insights as I delve deeper into the world of systems administration and DevOps.",
        image: {
            src: '/hero.jpg',
            alt: 'A person sitting at a desk in front of a computer at work',
            caption: '',
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
};

export default siteConfig;