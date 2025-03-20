import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: 'Djelassem',
  lastName:  'Cyrille',
  get name() {
      return `${this.firstName} ${this.lastName}`;
  },
  role:      'Junior Machine Learning Developer',
  avatar:    '/images/avatar.jpg',
  location:  'Africa/Douala',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English', 'French']  // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (<>I occasionally write about AI and technology. Let's navigate life's complexities exploring my thoughts on the intersection of creativity, personal growth, self-awareness, life orientation and engineering.</>)
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
      name: 'GitHub',
      icon: 'github',
      link: 'https://github.com/cycyBell',
  },
  {
      name: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/cycy-djelassem/',
  },
  {
      name: 'X',
      icon: 'x',
      link: '',
  },
  {
      name: 'Email',
      icon: 'email',
      link: 'mailto:cycydjelassem@gmail.com',
  },
];

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Junior AI and ML Developer</>,
  subline: <>I'm DJELASSEM, a Junior Machine Learning engineer developing <InlineCode>AI and ML</InlineCode> algorithms to solve climate and health-related problems. My dedication to work and my commitment to<br/> learning from my mistakes is helping me in overcoming challenges and dealing with huge blowbacks of my actions.</>
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (<>DJELASSEM is a Douala-based junior ML engineer and Web Tech enthusiast with a passion for transforming complex challenges into simple, elegant AI solutions. His work spans ML climate and health-related algorithms, NextJS and React apps development, and the convergence of Artificial Intelligence and innovation.</>)

  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
        {
            name: 'University of Douala',
            description: <>Studied Computer Science.</>,
        },
        {
            name: 'Imperial College London on Coursera',
            description: <>Studied online Mathematics for Machine Learning Specialisation.</>,
        },
        {
            name: 'DeepLearning.AI on Coursera',
            description: <>Studied online DeepLearning.AI TensorFlow Developer Professional Certificate.</>,
        },
        {
            name: 'DeepLearning.AI & Stanford University on Coursera',
            description: <>Studied online DeepLearning.AI & Stanford University Machine Learning Specialisation.</>,
        },
        {
            name: 'DeepLearning.AI on Coursera',
            description: <>Studied online DeepLearning.AI Deep Learning Specialisation.</>,
        },
    ]
 },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
