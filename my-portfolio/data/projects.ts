export type Project = {
  title: string;
  /** Your role on the project, shown under the title. */
  role?: string;
  description: string;
  stack: string;
  image: string;
  href: string;
  /** Featured on the home page. The rest only show up on /projects. */
  prio: boolean;
};

export const projects: Project[] = [
  {
    title: "Vlog-01",
    role: "Multimedia Expert , Horror Game Designer ",
    description:
      "This was our capstone team’s first game, and being part of it was an exciting experience. Although I wasn’t the main developer, I helped make the game more immersive by adding creative jumpscares and improving the game logic. Seeing everything come together was incredibly rewarding.",
    stack: "C#",
    image: "/images/vlog01.png",
    href: "https://sites.google.com/view/vlog-01",
    prio: true,
  },
  {
    title: "Mactan Newtown Virtual Tour",
    role: "Main Developer",
    description:
      "My first successful virtual tour project enabled users to explore locations remotely through immersive 360° panoramas. With smooth navigation and an interactive side UI, users could easily move between scenes, look around freely, and engage with key points of interest for a more dynamic online experience.",
    stack: "XML, HTML5, CSS3, JavaScript",
    image: "/images/mactan.gif",
    href: "https://www.mata.ph/mactannewtown",
    prio: false,
  },
  {
    title: "Virtual Tour APK - Android Offline",
    role: "Main Developer",
    description:
      "I developed an APK builder using Java to automate the process of packaging an Android application. The tool prepares the necessary files and build structure required for an Android app. After implementing the builder, I opened and ran the project in Android Studio, where it was compiled and built into a final APK file that can be installed and run on Android devices.",
    stack: "JAVA , XML , HTML",
    image: "/images/APK.png",
    href: "",
    prio: false,
  },
  {
    title: "BFP Fire Simulation",
    role: "Main Developer",
    description:
      "The BFP Fire Simulation is an interactive game that teaches people what to do during a fire emergency through realistic, hands-on scenarios. It makes fire safety more engaging and memorable than traditional lectures, especially for those who learn better by playing",
    stack: "C#",
    image: "/images/bfp.gif",
    href: "https://www.mata.ph/bfp",
    prio: false,
  },
  {
    title: "Costavida 3d Modeling",
    role: "Environment Artist , Developer",
    description:
      "For the Costavida 3d Modeling, my team and I created a detailed 3D model of the building and seamlessly superimposed it onto a 360° panoramic image of the site to make it appear fully constructed within its real-world environment, with the final render showcased in the Mactan Newtown Virtual Tour.",
    stack: "XML, HTML5, CSS3, JavaScript",
    image: "/images/costa.gif",
    href: "https://www.mata.ph/mactannewtown",
    prio: false,
  },
  {
    title: "Content Management System",
    role: "Full-Stack Developer",
    description:
      "The CMS provides full CRUD (Create, Read, Update, Delete) functionality, giving clients complete control over their virtual tour content. They can easily upload, update, or remove images that automatically reflect on the live tour, as well as add detailed information and descriptions to clearly define and categorize each location, ensuring flexible and efficient tour management.",
    stack: "Laravel, Vue, XML",
    image: "/images/cms.gif",
    href: "https://www.mata.ph/mactannewtown",
    prio: true,
  },
  {
    title: "ExperienceCebu Booking Platform",
    role: "Back-end Developer",
    description:
      "The ExperienceCebu Booking System (experiencecebu.ph) provides a streamlined platform for discovering and booking tourism experiences across Cebu. Users can easily browse available tours and activities, view detailed information, select their preferred schedules, and complete their bookings through a convenient online process. The system also provides efficient booking management, allowing administrators to manage tour packages, schedules, availability, customer reservations, and booking details, ensuring a smooth and organized experience for both tourists and tourism operators.",
    stack: "Next.js, React , Tailwind CSS , Supabase ,Firebase (hosting)",
    image: "/images/experiencecebu.gif",
    href: "https://experiencecebu.ph/",
    prio: true,
  },
  {
    title: "Visit Central Visayas",
    role: "Front-end Developer",
    description:
      "Visit Central Visayas (r7-tourism.web.app) is a tourism website designed to showcase the destinations, attractions, events, culture, and experiences across Central Visayas. As the Front-End Developer, I was responsible for developing and maintaining the user-facing interface, implementing responsive layouts, integrating tourism content and interactive features, and ensuring a smooth and accessible browsing experience across desktop and mobile devices. The platform provides visitors with an organized and visually engaging way to discover what Central Visayas has to offer.",
    stack: "Next.js, React , Tailwind CSS , TypeScript 5 , Firebase (hosting)",
    image: "/images/visitcentralvisayas.gif",
    href: "https://r7-tourism.web.app/",
    prio: true,
  },

  {
    title: "Gas Management System",
    role: "Front-end Developer",
    description:
      "The Gas Management System is designed to help address future fuel shortages by providing fair and controlled gasoline distribution. Developed in collaboration with the Cebu City Mayor’s office, the system assigns weekly fuel limits to users, tracks gasoline consumption, and helps prevent hoarding while ensuring that available fuel is distributed efficiently and responsibly.",
    stack: "React ,  Tailwind CSS , firestore , Firebase (hosting)",
    image: "/images/agas.gif",
    href: "https://www.agas.ph/",
    prio: true,
  },

  {
    title: "Seaza Booking Registration",
    role: "Front-end Developer",
    description:
      "The Cebu Safari SEAZA Event Registration System is an online platform developed to manage participant registration for the upcoming SEAZA event at Cebu Safari. The system streamlines attendee registration, collects essential participant information, and helps organizers efficiently manage and monitor registrations leading up to the event.",
    stack: "React ,  TypeScript 5, Tailwind CSS ",
    image: "/images/seaza.gif",
    href: "https://booking.mata.ph/",
    prio: true,
  },

];

export const featuredProjects = projects.filter((p) => p.prio);
