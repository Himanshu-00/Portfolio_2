// portfolio.config.ts

const CONFIG = {
  github: {
    username: 'Himanshu-00', 
  },

  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['', ''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: '',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
        // {
        //   title: '',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: { title: 'Portfolio of Himanshu Vinchurkar', description: '', imageURL: '' },
  social: {
    linkedin: 'himanshu-vinchurkar',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'himanshuvinchurkar1387@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1edyVICh2rfbVz3AnPuUiO7CU4av-UdOp/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'NumPy',
    'Pandas',
    'Matplotlib',
    'Seaborn',
    'Scikit-learn',
    'TensorFlow',
    'PyTorch',
    'Keras',
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing (NLP)',
    'Computer Vision',
    'Model Evaluation & Tuning',
    'Feature Engineering',
    'SQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'REST APIs',
    'ML Model Deployment',
    'AWS / GCP (Basics)',
    'Jupyter Notebook',
  ],
  experiences: [
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Oracle Cloud Infrastructure Data Science',
      body: 'Oracle',
      year: 'Oct 2025',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=AA6817A71872B653DAAED6FEFA5560F06687989B013E7E2C8C6B34697F852793',
    },
        {
      name: 'Custom Models, Layers, and Loss Functions with TensorFlow',
      body: 'DeepLearning.AI',
      year: 'Mar 2024',
      link: 'https://www.coursera.org/account/accomplishments/certificate/DNJXA6346787',
    },
    
  ],
  educations: [
    {
      institution: 'Monash University',
      degree: 'Master of Data Science',
      from: '2026',
      to: '2027(Expected)',
    },
    {
      institution: 'University of Mumbai',
      degree: 'Computer Science & Engineering(AI & ML)',
      from: '2020',
      to: '2024',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'caramellatte',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },


  enablePWA: true,
};

export default CONFIG;
