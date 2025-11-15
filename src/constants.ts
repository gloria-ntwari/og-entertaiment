import { MediaItem, MediaType, SectionData, SocialLink } from "./types";
import {
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
  TiktokIcon,
  XIcon,
} from "./components/Icons";

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "YouTube", url: "#", Icon: YoutubeIcon },
  {
    name: "Instagram",
    url: "https://www.instagram.com/og_entertaiment/",
    Icon: InstagramIcon,
  },
  { name: "Facebook", url: "#", Icon: FacebookIcon },
  { name: "TikTok", url: "#", Icon: TiktokIcon },
  { name: "X", url: "#", Icon: XIcon },
];

// Available media from all folders
const gamesImages = [
  `${process.env.PUBLIC_URL}/games-entertainment/img_0219.jpg`,
  `${process.env.PUBLIC_URL}/games-entertainment/img_0220.jpg`,
  `${process.env.PUBLIC_URL}/games-entertainment/img_0221.jpg`,
  `${process.env.PUBLIC_URL}/games-entertainment/img_0380.jpg`,
  `${process.env.PUBLIC_URL}/games-entertainment/img_0381.jpg`,
  `${process.env.PUBLIC_URL}/games-entertainment/img_0384.jpg`,
  `${process.env.PUBLIC_URL}/games-entertainment/img_0385.jpg`,
  `${process.env.PUBLIC_URL}/games-entertainment/img_0431.jpg`,
  `${process.env.PUBLIC_URL}/games-entertainment/img_0433.jpg`,
  `${process.env.PUBLIC_URL}/games-entertainment/img_0444.jpg`,
];
const gamesVideos = [
  `${process.env.PUBLIC_URL}/games-entertainment/img_8075.mp4`
];
const surprisesImages = [
  `${process.env.PUBLIC_URL}/surprises/img_0245.jpg`,
  `${process.env.PUBLIC_URL}/surprises/img_0246.jpg`,
  `${process.env.PUBLIC_URL}/surprises/img_0249.jpg`,
  `${process.env.PUBLIC_URL}/surprises/img_0250.jpg`,
];
const teamBuildingImages = Array.from(
  { length: 24 },
  (_, i) => `${process.env.PUBLIC_URL}/team-building/img_${String(217 + i).padStart(4, "0")}.jpg`
);

// Combine all media
const allImages = [...gamesImages, ...surprisesImages, ...teamBuildingImages];
const allMedia = [
  ...allImages.map((src, i) => ({ src, type: MediaType.Image, id: i })),
  ...gamesVideos.map((src, i) => ({
    src,
    type: MediaType.Video,
    id: i + 1000,
  })),
];

// Shuffle and select 12 random items
const shuffled = [...allMedia].sort(() => Math.random() - 0.5);
export const MAIN_PAGE_IMAGES: MediaItem[] = shuffled
  .slice(0, 12)
  .map((item, index) => ({
    id: index,
    type: item.type,
    src: item.src,
    alt:
      item.type === MediaType.Video
        ? `Entertainment video ${index + 1}`
        : `Mascot entertainment photo ${index + 1}`,
  }));

export const SECTIONS_DATA: SectionData[] = [
  {
    id: "games",
    title: "Games and Entertainment",
    description:
      "Dive into an immersive space of wide-screen videos, interactive effects, and engaging content. Enjoy smooth animations, fun challenges, and a vibrant mix of games and media designed to keep you entertained with every click.",
    media: [
      {
        id: 101,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/games-entertainment/img_0219.jpg`,
        alt: "Games and entertainment",
        span: "md:col-span-1",
      },
      {
        id: 103,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/games-entertainment/img_0220.jpg`,
        alt: "Fun activities",
        span: "md:col-span-1",
      },
      {
        id: 104,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/games-entertainment/img_0221.jpg`,
        alt: "Entertainment event",
        span: "md:col-span-1",
      },
      {
        id: 105,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/games-entertainment/img_0380.jpg`,
        alt: "Games and fun",
        span: "md:col-span-1",
      },
      {
        id: 107,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/games-entertainment/img_0381.jpg`,
        alt: "Event photo",
        span: "md:col-span-1",
      },
      {
        id: 108,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/games-entertainment/img_0384.jpg`,
        alt: "Entertainment moment",
        span: "md:col-span-1",
      },
      {
        id: 109,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/games-entertainment/img_0385.jpg`,
        alt: "Games event",
        span: "md:col-span-1",
      },
      {
        id: 111,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/games-entertainment/img_0431.jpg`,
        alt: "Entertainment photo",
        span: "md:col-span-1",
      },
      {
        id: 112,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/games-entertainment/img_0433.jpg`,
        alt: "Games moment",
        span: "md:col-span-1",
      },
      {
        id: 113,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/games-entertainment/img_0444.jpg`,
        alt: "Entertainment event",
        span: "md:col-span-1",
      },
    ],
  },
  {
    id: "surprises",
    title: "Surprises",
    description:
      "From surprise mascot visits to flash mobs and personalized celebrations, we craft moments of pure delight. Our team works secretly to plan and execute flawless surprises that leave lasting memories and bring smiles to everyone involved.",
    media: [
      {
        id: 201,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/surprises/img_0245.jpg`,
        alt: "Surprise moment",
        span: "md:col-span-1",
      },
      {
        id: 202,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/surprises/img_0246.jpg`,
        alt: "Surprise celebration",
        span: "md:col-span-1",
      },
      {
        id: 203,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/surprises/img_0249.jpg`,
        alt: "Surprise event",
        span: "md:col-span-1",
      },
      {
        id: 204,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/surprises/img_0250.jpg`,
        alt: "Surprise moment",
        span: "md:col-span-1",
      },
    ],
  },
  {
    id: "team-building",
    title: "Team Building",
    description:
      "Strengthen bonds and boost morale with our custom-designed team-building events. We combine fun, challenge, and creativity to foster collaboration, improve communication, and energize your corporate team in a truly unique and engaging way.",
    media: [
      {
        id: 301,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0217.jpg`,
        alt: "Team building activity",
        span: "md:col-span-1",
      },
      {
        id: 302,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0218.jpg`,
        alt: "Team collaboration",
        span: "md:col-span-1",
      },
      {
        id: 303,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0222.jpg`,
        alt: "Team building event",
        span: "md:col-span-1",
      },
      {
        id: 304,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0223.jpg`,
        alt: "Team activity",
        span: "md:col-span-1",
      },
      {
        id: 305,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0224.jpg`,
        alt: "Team building moment",
        span: "md:col-span-1",
      },
      {
        id: 306,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0225.jpg`,
        alt: "Team collaboration",
        span: "md:col-span-1",
      },
      {
        id: 307,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0226.jpg`,
        alt: "Team building activity",
        span: "md:col-span-1",
      },
      {
        id: 308,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0227.jpg`,
        alt: "Team event",
        span: "md:col-span-1",
      },
      {
        id: 309,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0228.jpg`,
        alt: "Team building",
        span: "md:col-span-1",
      },
      {
        id: 310,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0229.jpg`,
        alt: "Team activity",
        span: "md:col-span-1",
      },
      {
        id: 311,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0230.jpg`,
        alt: "Team building event",
        span: "md:col-span-1",
      },
      {
        id: 312,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0231.jpg`,
        alt: "Team collaboration",
        span: "md:col-span-1",
      },
      {
        id: 313,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0232.jpg`,
        alt: "Team building moment",
        span: "md:col-span-1",
      },
      {
        id: 314,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0233.jpg`,
        alt: "Team activity",
        span: "md:col-span-1",
      },
      {
        id: 315,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0234.jpg`,
        alt: "Team building",
        span: "md:col-span-1",
      },
      {
        id: 316,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0235.jpg`,
        alt: "Team event",
        span: "md:col-span-1",
      },
      {
        id: 317,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0236.jpg`,
        alt: "Team building activity",
        span: "md:col-span-1",
      },
      {
        id: 318,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0237.jpg`,
        alt: "Team collaboration",
        span: "md:col-span-1",
      },
      {
        id: 319,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0238.jpg`,
        alt: "Team building",
        span: "md:col-span-1",
      },
      {
        id: 320,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0239.jpg`,
        alt: "Team activity",
        span: "md:col-span-1",
      },
      {
        id: 321,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0240.jpg`,
        alt: "Team building event",
        span: "md:col-span-1",
      },
      {
        id: 322,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0241.jpg`,
        alt: "Team collaboration",
        span: "md:col-span-1",
      },
      {
        id: 323,
        type: MediaType.Image,
        src: `${process.env.PUBLIC_URL}/team-building/img_0242.jpg`,
        alt: "Team building moment",
        span: "md:col-span-1",
      },
    ],
  },
];
