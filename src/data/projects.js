export const projects = [
  {
    id: 'kinova',
    title: 'Kinova',
    year: '2026',
    category: 'Mobile App · UI/UX',
    description:
      'AI-powered gamified fitness app that nurtures a dragon character through workouts, boss challenges, and real-time form correction — designed to boost retention beyond the typical 25% three-month drop-off.',
    image:
      'https://cdn.myportfolio.com/adbd8e1e-32b4-4ea0-9d97-20e411b97793/a038b5e8-571f-4f09-a216-9677e8de51b7_car_4x3.jpeg?h=b691b9ea8b75088ecd1a84b4fafcecc9',
    tags: ['Mobile', 'Gamification', 'AI Coach'],
    overview:
      'After learning that the majority of fitness apps only retain 25% of users within the first 3 months, we built Kinova, an AI-powered gamified fitness app. Taking a YC-backed company, Tempo, as our starting point, we built an app that incentivizes users to continue their fitness journey by nurturing a dragon character through workouts, boss challenges, and fun dances. Moreover, Kinova\'s AI coach is capable of correcting form in real time, giving the user personalized and detailed instructions.',
    images: [
      'https://cdn.myportfolio.com/adbd8e1e-32b4-4ea0-9d97-20e411b97793/a038b5e8-571f-4f09-a216-9677e8de51b7_car_4x3.jpeg?h=b691b9ea8b75088ecd1a84b4fafcecc9',
    ],
    links: [
      { label: 'Devpost Submission', url: 'https://lnkd.in/g7gnuPNp' },
      { label: 'Tempo (Inspiration)', url: 'https://www.linkedin.com/company/tempofit/' },
    ],
  },
  {
    id: 'worn',
    title: 'Worn',
    year: '2026',
    category: 'Fashion · UI/UX',
    description:
      'Real-time fashion assistant inspired by Doraemon\'s dress-up gadget. Users describe any occasion and Worn generates outfits from their closet, sketches, or online pieces — with shopping links and color analysis.',
    image:
      'https://cdn.myportfolio.com/adbd8e1e-32b4-4ea0-9d97-20e411b97793/4d12ddbd-1018-449f-b08b-546b03302140_rwc_0x0x1599x1200x1599.jpeg?h=29822162ab46ab0c17598604114a7277',
    tags: ['AI', 'Fashion', 'Conversational UI'],
    overview:
      'Using Doraemon\'s dress-up gadget as inspiration, my team and I created Worn, which uses Nano Banana\'s image generation and Live\'s conversational AI features to give users an in-real-time fashion assistant. Users can ask Worn to create an outfit tailored to any occasion using their own closet, the user\'s sketches, or even pieces online. Worn can generate shopping links to the clothing pieces it creates and give the user a detailed color analysis along with it.',
    images: [
      'https://cdn.myportfolio.com/adbd8e1e-32b4-4ea0-9d97-20e411b97793/4d12ddbd-1018-449f-b08b-546b03302140_rwc_0x0x1599x1200x1599.jpeg?h=29822162ab46ab0c17598604114a7277',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/wexioin/gemini_hack' },
    ],
  },
  {
    id: 'marc-website',
    title: 'Mudd Amateur Rocketry Club Website',
    year: '2026',
    category: 'Web Design · UI/UX',
    description:
      'SpaceX-inspired React/TypeScript site for MARC with Figma design reference, multi-page navigation, and GitHub Actions deployment.',
    image:
      'https://cdn.myportfolio.com/adbd8e1e-32b4-4ea0-9d97-20e411b97793/dc0dfc71-2ff5-4545-9db6-79b0454acb3a_rwc_0x132x1080x810x1080.jpg?h=ff5cefbfb5fd24a7fe7abc4afca7a018',
    tags: ['React', 'Figma', 'GitHub Pages'],
    overview:
      'Redesigned and built the Mudd Amateur Rocketry Club website as a SpaceX-inspired React/TypeScript site, using a Figma design reference and Vite for the build pipeline. Structured multi-page navigation (Home, About, Rockets, Join, Contact, Donate) and deployed via GitHub Actions to GitHub Pages, resulting in a fast, fully custom static site for the club.',
    images: [
      'https://cdn.myportfolio.com/adbd8e1e-32b4-4ea0-9d97-20e411b97793/dc0dfc71-2ff5-4545-9db6-79b0454acb3a_rwc_0x132x1080x810x1080.jpg?h=ff5cefbfb5fd24a7fe7abc4afca7a018',
    ],
    links: [
      { label: 'Live Site', url: 'https://muddamateurrocketryclub.github.io/' },
      { label: 'GitHub', url: 'https://github.com/MuddAmateurRocketryClub/MuddAmateurRocketryClub.github.io' },
    ],
  },
  {
    id: 'enright-lab',
    title: 'Enright Lab Website',
    year: '2026',
    category: 'Web Design · UX',
    description:
      'Redesigned and migrated the Enright Lab (SFSU) website from Wix to a custom GitHub Pages deployment, integrating a Figma-designed UX for a faster, fully custom static site.',
    image:
      'https://cdn.myportfolio.com/adbd8e1e-32b4-4ea0-9d97-20e411b97793/6d817801-50f7-4c9c-90ae-cd7cee4809b6_rwc_9x0x2005x1504x2005.png?h=f511512e8452c9ddcc05a0e9f2b30b46',
    tags: ['Figma', 'Web Design', 'UX Research'],
    overview:
      'Redesigned and migrated the Enright Lab (SFSU) website from Wix to a custom GitHub Pages deployment. Rebuilt the frontend using Cursor AI and integrated a Figma-designed UX, resulting in a faster, fully custom static site.',
    images: [
      'https://cdn.myportfolio.com/adbd8e1e-32b4-4ea0-9d97-20e411b97793/6d817801-50f7-4c9c-90ae-cd7cee4809b6_rwc_9x0x2005x1504x2005.png?h=f511512e8452c9ddcc05a0e9f2b30b46',
    ],
    links: [
      { label: 'GitHub (Code)', url: 'https://github.com/EnrightLabSFSU/EnrightLabSFSU.github.io' },
      { label: 'Live Site', url: 'http://enrightlabsfsu.github.io' },
    ],
  },
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}
