import { Portfolio } from './interfaces';

export const portfolio: Portfolio = Object.freeze({
  user: {
    name: 'John Wayodi',
    title: 'Software Engineer',
    quote:
      'Mission-driven individual with a passion for thoughtful UI design, collaboration, and quality software development.',
    email: 'wayodijohn@gmail.com',
    linkedin: 'https://www.linkedin.com/in/john-wayodi/',
    twitter: 'https://twitter.com/wayodijohn',
    github: 'https://github.com/johnwayodi',
  },
  about: {
    description: `I’ve always sought out opportunities and challenges that are meaningful to me.
      I've never stopped engaging my passion to help others and solve problems.
      As a Software Developer, I enjoy using my obsessive attention to detail, love for making things, and my mission-driven work ethic to drive change and create interesting and impactful products.`,
  },
  contacts: [
    {
      title: 'linkedin',
      urlLink: 'https://www.linkedin.com/in/john-wayodi/',
      username: 'John Wayodi',
    },
    {
      title: 'twitter',
      urlLink: 'https://twitter.com/wayodijohn',
      username: '@wayodijohn',
    },
    {
      title: 'telegram',
      urlLink: 'https://t.me/@wayodijohn',
      username: 'johnwayodi',
    },
  ],
  experience: [
    {
      title: 'Frontend Engineer',
      companyName: 'Aerotage',
      companyLink: 'https://www.aerotage.com',
      employmentType: '(Remote/Contract)',
      duration: '6 months',
      startDate: 'Oct 2019',
      endDate: 'Mar 2020',
      summary:
        'Worked as a Remote Frontend Engineer on a distributed team building and maintaining web applications and a UI component library.',
      highlights: [
        'Developed and maintained components in a UI library.',
        'Modified web apps to update UI, reuse library components.',
      ],
    },
    {
      title: 'Product Engineer',
      companyName: 'Andela',
      companyLink: 'https://andela.com',
      employmentType: '(Full Time)',
      duration: '3 months',
      startDate: 'Aug 2019',
      endDate: 'Oct 2019',
      summary: `Worked as a Product Engineer on Tembea, a route management application used by Andela 
      to manage staff transportation and easen logistics, used across Kenya and later extended to Uganda.`,
      highlights: [
        'Acted as Technical Coordinator, ensuring high quality standards.',
        'Mentor junior developers within team.',
        'Initiated migration to version 2 of the application API.',
      ],
    },
    {
      title: 'Full Stack Developer',
      companyName: 'Andela',
      companyLink: 'https://andela.com',
      employmentType: '(Full Time)',
      duration: '11 months',
      startDate: 'Dec 2018',
      endDate: 'Oct 2019',
      summary:
        'Joined the organization as a Full Stack Developer, contributing to internal projects',
      highlights: [
        'Wrote maintainable, well-tested code on both Python and JavaScript projects.',
        'Worked on a distributed team to deliver a Route Management application leveraged by Andela to manage staff transportation and logistics.',
        'Added features to Slack Bot integration which is used by company staff to schedule and take trips.',
      ],
    },
  ],
  projects: [
    {
      title: 'Store Manager API',
      description: 'Backend Server for the Store Manager Web Application',
      projectUrl: 'https://jw-store-manager-apiv2.herokuapp.com/apidocs/',
      repoUrl: 'https://github.com/johnwayodi/sm-api-v2/',
      highlights: [
        'Api implementation using Flask.',
        'Backend authentication passport jwt.',
      ],
      stack: ['Python', 'Flask'],
      imagePath: '../../../assets/images/storemanagerbe.png',
    },
    {
      title: 'Store Manager Frontend',
      description: 'Web application for the Store Manager.',
      projectUrl: 'https://johnwayodi.github.io/store-manager/',
      repoUrl: 'https://github.com/johnwayodi/sm-frontend-lms/',
      highlights: [
        'Design and implement components in React.',
        'Handle state management using Redux.',
      ],
      stack: ['React', 'Redux', 'JavaScript'],
      imagePath: '../../../assets/images/storemanagerfe.png',
    },
  ],
  skills: {
    softs: [
      'Agile Software Development',
      'Teamwork',
      'Object Oriented Design',
      'Test Driven Design',
      'Problem Solving',
    ],
    frameworks: [
      {
        language: 'angular',
        level: 100,
        iconName: 'angular',
        asset: false,
      },
      {
        language: 'react',
        level: 90,
        iconName: 'react',
        asset: false,
      },
      {
        language: 'node.js',
        level: 80,
        iconName: 'node-js',
        asset: false,
      },
      {
        language: 'nestJs',
        level: 60,
        iconName: '',
        asset: true,
      },
    ],
    languages: [
      {
        language: 'javaScript',
        level: 90,
        iconName: 'js',
        asset: false,
      },
      {
        language: 'typeScript',
        level: 90,
        iconName: '',
        asset: true,
      },
      {
        language: 'java',
        level: 90,
        iconName: 'java',
        asset: false,
      },
      {
        language: 'python',
        level: 90,
        iconName: 'python',
        asset: false,
      },
      {
        language: 'docker',
        level: 50,
        iconName: 'docker',
        asset: false,
      },
      {
        language: 'git',
        level: 100,
        iconName: 'git-alt',
        asset: false,
      },
    ],
  },
});
