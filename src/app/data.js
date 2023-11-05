import Image from "next/image";

export const navItems = [
  {
    title: "Apps",
    url: "/",
  },
  {
    title: "App Configs",
    url: "/",
  },
  {
    title: "Pipelines",
    url: "/",
  },
  {
    title: "Infra Creation",
    url: "/",
  },
  {
    title: "Cost",
    url: "/",
  },
  {
    title: "Add-ons",
    url: "/",
  },
  {
    title: "Monitoring",
    url: "/",
  },
  {
    title: "Connections",
    url: "/",
  },
];



export const selfTeamData = [
  {
    title: "Infrastructure",
    description: "Automated Cloud Infrastructure Workflow",
    imgUrl: "/assets/SelfLogo0.png",
  },
  {
    title: "Security",
    description: "Modern Secure Infrastructure Approach",
    imgUrl: "/assets/SelfLogo.png",
  },
  {
    title: "Networking",
    description: "Flexible Secure Application Connectivity",
    imgUrl: "/assets/SelfLogo1.png",
  },
  {
    title: "Applications",
    description: "Automate Application Deployment for Agility",
    imgUrl: "/assets/SelfLogo2.png",
  },
];

export const xerocodeWay = [
  {
    id: 1,
    title: "Self serve Infrastructure",
    description:
      " Accelerate by self-serving production-ready infrastructure and customize as you scale.",
    types: [
      {
        imgUrl: "/assets/AWS.png",
        way: {
          name: "In Your Cloud",
          des: "Your infrastructure runs on your AWS or GCP account. Never get locked in. Infinitely scalable.Azure support coming soon)",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Deploy applications, fast!",
    description:
      "Set up automated deployments of your application in 5 minutes and get back to building stuff that matters.",
    types: [
      {
        imgUrl: "/assets/BaseLayer.png",
        way: {
          name: "Configurable Build and Deploy pipelines",
          des: "Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages.",
        },
      },
      {
        imgUrl: "",
        way: {
          name: "Push to Deploy",
          des: "Just connect your repo with one click and push. Argonaut’s deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push.",
        },
      },
      {
        imgUrl: "",
        way: {
          name: "Multiple runtimes",
          des: "Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions.",
        },
      },
      {
        imgUrl: "",
        way: {
          name: "Scale infinitely",
          des: "Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime.",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Visibility into costs and metrics",
    description:
      " Automatically track resource costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory.",
    types: [
      {
        imgUrl: "",
        way: {
          name: "Customizable cost dashboards and reports",
          des: "Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions.",
        },
      },
      {
        imgUrl: "",
        way: {
          name: "Preview infra costs",
          des: "See the cost of a specific resource while choosing it (before provisioning). It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools.",
        },
      },
      {
        imgUrl: "",
        way: {
          name: "Observability from day one",
          des: "Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and observability tools of your choice, such as Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your application metrics from day 1.",
        },
      },
    ],
  },
];

export const successStories = [
  {
    "id": 1,
    "quote": "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.",
    "author": "Abcdefgh Ijklmnop",
    "position": "Frontend Engineer"
  },
  {
    "id": 2,
    "quote": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    "author": "Jane Smith",
    "position": "UX Designer"
  },
  {
    "id": 3,
    "quote": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "author": "Bob Johnson",
    "position": "Product Manager"
  },
];

