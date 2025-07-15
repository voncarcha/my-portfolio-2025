export interface ItemProps {
  company: string;
  position: string;
  date: string;
  type: string;
  bgColor: string;
  logo: string;
  techs: string;
  location: string;
  responsibilities: string[];
}

export const ITEMS: ItemProps[] = [
  {
    company: 'Cenote Solutions',
    position: 'Senior Front-end Developer',
    date: 'November 2022 - June 2025',
    type: 'Full-time',
    location: 'AU',
    techs:
      'TypeScript, React, Redux, Storybook, TailwindCSS, SurveyJS, REST API, Strapi CMS',
    logo: '/images/logo-cenote.png',
    bgColor: '#0B1921',
    responsibilities: [
      'Migrated survey functionality from Qualtrics to SurveyJS, cutting licensing costs.',
      'Integrated AI features to enhance user experience.',
      'Built and maintained React apps with TypeScript and Redux.',
      'Developed a company-wide UI library using Storybook and TailwindCSS.',
    ],
  },
  {
    company: 'Dottystyle Creative',
    position: 'Senior Front-end Developer',
    location: 'AU',
    type: 'Freelance',
    date: 'April 2022 - November 2022',
    techs:
      'TypeScript, React, Redux, Storybook, TailwindCSS, SurveyJS, REST API, Google Maps API, Winter CMS',
    logo: '/images/logo-dotty.png',
    bgColor: '#fff',
    responsibilities: [
      'Led front-end architecture using React and Redux-Saga for a scalable car booking platform.',
      'Implemented Google Maps API for booking features with geolocation and route visualization.',
      'Integrated RESTful APIs and collaborated closely with backend developers for seamless data flow.',
      'Worked with designers to bring high-fidelity mockups to life with pixel-perfect precision.',
      'Mentored junior developers and conducted code reviews to maintain quality standards.',
    ],
  },
  {
    company: 'Govfriend',
    position: 'Front-end Developer / Web Designer',
    location: 'US',
    type: 'Freelance',
    date: 'Oct 2020 - April 2022',
    techs:
      'TypeScript, React, Redux, styled-components, Saleor Framework, GraphQL, Apollo Client, Figma',
    logo: '/images/logo-govfriend.png',
    bgColor: '#fff',
    responsibilities: [
      'Built and maintained UI/UX across multiple products, including a Saleor-based e-commerce storefront.',
      'Helped integrate REST and GraphQL APIs for various SaaS and subscription-based platforms.',
      'Designed a tailored storefront and inventory system from scratch—focused on clean UX, smooth product management, and integration with backend APIs.',
      'Integrated SaaS APIs using both REST and GraphQL.',
      'Create design for the website and the e-commerce storefront.',
    ],
  },
  {
    company: 'iStack Holdings Ltd',
    position: 'Front-end Developer',
    location: 'PH',
    type: 'Full-time',
    date: 'Jun 2015 - Oct 2020',
    techs:
      'React, Redux, Next.js, styled-components, REST API, Strapi CMS, Gulp, Webpack',
    logo: '/images/logo-istack.png',
    bgColor: '#fff',
    responsibilities: [
      'Helped pioneer the migration from jQuery to ReactJS during the early adoption phase.',
      'Implemented Strapi CMS to replace inefficient Excel-based content workflows.',
      'Focused on front-end best practices, accessibility, and reusable components.',
      'Optimized website performance and SEO.',
      'Collaborated with designers to implement UI/UX designs.',
    ],
  },
  {
    company: 'Codeninja IT Solutions',
    location: 'PH',
    type: 'Full-time',
    position: 'Web Designer / Web Developer',
    date: 'May 2013 - May 2015',
    techs: 'HTML, CSS, JavaScript, jQuery, WordPress, CodeIgniter, Photoshop',
    logo: '/images/logo-codeninja.png',
    bgColor: '#F0242B',
    responsibilities: [
      'Designed and developed responsive websites for various e-commerce projects.',
      'Translated PSD designs to HTML/CSS.',
      'Integrated with WordPress.',
    ],
  },
];
