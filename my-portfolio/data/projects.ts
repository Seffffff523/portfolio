export type Project = {
  title: string;
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
    description:
      "This was our capstone team’s first game, and being part of it was an exciting experience. Although I wasn’t the main developer, I helped make the game more immersive by adding creative jumpscares and improving the game logic. Seeing everything come together was incredibly rewarding.",
    stack: "C#",
    image: "/images/vlog01.png",
    href: "https://sites.google.com/view/vlog-01",
    prio: true,
  },
  {
    title: "Mactan Newtown Virtual Tour",
    description:
      "My first successful virtual tour project enabled users to explore locations remotely through immersive 360° panoramas. With smooth navigation and an interactive side UI, users could easily move between scenes, look around freely, and engage with key points of interest for a more dynamic online experience.",
    stack: "XML, HTML5, CSS3, JavaScript",
    image: "/images/mactan.gif",
    href: "https://www.mata.ph/mactannewtown",
    prio: true,
  },
  {
    title: "Virtual Tour APK - Android Offline",
    description:
      "I developed an APK builder using Java to automate the process of packaging an Android application. The tool prepares the necessary files and build structure required for an Android app. After implementing the builder, I opened and ran the project in Android Studio, where it was compiled and built into a final APK file that can be installed and run on Android devices.",
    stack: "JAVA , XML , HTML",
    image: "/images/APK.png",
    href: "",
    prio: false,
  },
  {
    title: "BFP Fire Simulation",
    description:
      "The BFP Fire Simulation is an interactive game that teaches people what to do during a fire emergency through realistic, hands-on scenarios. It makes fire safety more engaging and memorable than traditional lectures, especially for those who learn better by playing",
    stack: "C#",
    image: "/images/bfp.gif",
    href: "https://www.mata.ph/bfp",
    prio: true,
  },
  {
    title: "Costavida 3d Modeling",
    description:
      "For the Costavida 3d Modeling, my team and I created a detailed 3D model of the building and seamlessly superimposed it onto a 360° panoramic image of the site to make it appear fully constructed within its real-world environment, with the final render showcased in the Mactan Newtown Virtual Tour.",
    stack: "XML, HTML5, CSS3, JavaScript",
    image: "/images/costa.gif",
    href: "https://www.mata.ph/mactannewtown",
    prio: false,
  },
  {
    title: "Content Management System",
    description:
      "The CMS provides full CRUD (Create, Read, Update, Delete) functionality, giving clients complete control over their virtual tour content. They can easily upload, update, or remove images that automatically reflect on the live tour, as well as add detailed information and descriptions to clearly define and categorize each location, ensuring flexible and efficient tour management.",
    stack: "Laravel, Vue, XML",
    image: "/images/cms.gif",
    href: "https://www.mata.ph/mactannewtown",
    prio: true,
  },
];

export const featuredProjects = projects.filter((p) => p.prio);
