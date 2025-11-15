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
  `/games-entertainment/IMG_0219.JPG`,
  `/games-entertainment/IMG_0220.JPG`,
  `/games-entertainment/IMG_0221.JPG`,
  `/games-entertainment/IMG_0380.JPG`,
  `/games-entertainment/IMG_0381.JPG`,
  `/games-entertainment/IMG_0384.JPG`,
  `/games-entertainment/IMG_0385.JPG`,
  `/games-entertainment/IMG_0431.JPG`,
  `/games-entertainment/IMG_0433.JPG`,
  `/games-entertainment/IMG_0444.JPG`,
];
const gamesVideos = [
  `/games-entertainment/IMG_8075.mp4`
];
const surprisesImages = [
  `/surprises/IMG_0245.JPG`,
  `/surprises/IMG_0246.JPG`,
  `/surprises/IMG_0249.JPG`,
  `/surprises/IMG_0250.JPG`,
];
const teamBuildingImages = Array.from(
  { length: 24 },
  (_, i) => `/team-building/IMG_${String(217 + i).padStart(4, "0")}.JPG`
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
        src: `/games-entertainment/IMG_0219.JPG`,
        alt: "Games and entertainment",
        span: "md:col-span-1",
      },
      {
        id: 103,
        type: MediaType.Image,
        src: `/games-entertainment/IMG_0220.JPG`,
        alt: "Fun activities",
        span: "md:col-span-1",
      },
      {
        id: 104,
        type: MediaType.Image,
        src: `/games-entertainment/IMG_0221.JPG`,
        alt: "Entertainment event",
        span: "md:col-span-1",
      },
      {
        id: 105,
        type: MediaType.Image,
        src: `/games-entertainment/IMG_0380.JPG`,
        alt: "Games and fun",
        span: "md:col-span-1",
      },
      {
        id: 107,
        type: MediaType.Image,
        src: `/games-entertainment/IMG_0381.JPG`,
        alt: "Event photo",
        span: "md:col-span-1",
      },
      {
        id: 108,
        type: MediaType.Image,
        src: `/games-entertainment/IMG_0384.JPG`,
        alt: "Entertainment moment",
        span: "md:col-span-1",
      },
      {
        id: 109,
        type: MediaType.Image,
        src: `/games-entertainment/IMG_0385.JPG`,
        alt: "Games event",
        span: "md:col-span-1",
      },
      {
        id: 111,
        type: MediaType.Image,
        src: `/games-entertainment/IMG_0431.JPG`,
        alt: "Entertainment photo",
        span: "md:col-span-1",
      },
      {
        id: 112,
        type: MediaType.Image,
        src: `/games-entertainment/IMG_0433.JPG`,
        alt: "Games moment",
        span: "md:col-span-1",
      },
      {
        id: 113,
        type: MediaType.Image,
        src: `/games-entertainment/IMG_0444.JPG`,
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
        src: `/surprises/IMG_0245.JPG`,
        alt: "Surprise moment",
        span: "md:col-span-1",
      },
      {
        id: 202,
        type: MediaType.Image,
        src: `/surprises/IMG_0246.JPG`,
        alt: "Surprise celebration",
        span: "md:col-span-1",
      },
      {
        id: 203,
        type: MediaType.Image,
        src: `/surprises/IMG_0249.JPG`,
        alt: "Surprise event",
        span: "md:col-span-1",
      },
      {
        id: 204,
        type: MediaType.Image,
        src: `/surprises/IMG_0250.JPG`,
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
        src: `/team-building/IMG_0217.JPG`,
        alt: "Team building activity",
        span: "md:col-span-1",
      },
      {
        id: 302,
        type: MediaType.Image,
        src: `/team-building/IMG_0218.JPG`,
        alt: "Team collaboration",
        span: "md:col-span-1",
      },
      {
        id: 303,
        type: MediaType.Image,
        src: `/team-building/IMG_0222.JPG`,
        alt: "Team building event",
        span: "md:col-span-1",
      },
      {
        id: 304,
        type: MediaType.Image,
        src: `/team-building/IMG_0223.JPG`,
        alt: "Team activity",
        span: "md:col-span-1",
      },
      {
        id: 305,
        type: MediaType.Image,
        src: `/team-building/IMG_0224.JPG`,
        alt: "Team building moment",
        span: "md:col-span-1",
      },
      {
        id: 306,
        type: MediaType.Image,
        src: `/team-building/IMG_0225.JPG`,
        alt: "Team collaboration",
        span: "md:col-span-1",
      },
      {
        id: 307,
        type: MediaType.Image,
        src: `/team-building/IMG_0226.JPG`,
        alt: "Team building activity",
        span: "md:col-span-1",
      },
      {
        id: 308,
        type: MediaType.Image,
        src: `/team-building/IMG_0227.JPG`,
        alt: "Team event",
        span: "md:col-span-1",
      },
      {
        id: 309,
        type: MediaType.Image,
        src: `/team-building/IMG_0228.JPG`,
        alt: "Team building",
        span: "md:col-span-1",
      },
      {
        id: 310,
        type: MediaType.Image,
        src: `/team-building/IMG_0229.JPG`,
        alt: "Team activity",
        span: "md:col-span-1",
      },
      {
        id: 311,
        type: MediaType.Image,
        src: `/team-building/IMG_0230.JPG`,
        alt: "Team building event",
        span: "md:col-span-1",
      },
      {
        id: 312,
        type: MediaType.Image,
        src: `/team-building/IMG_0231.JPG`,
        alt: "Team collaboration",
        span: "md:col-span-1",
      },
      {
        id: 313,
        type: MediaType.Image,
        src: `/team-building/IMG_0232.JPG`,
        alt: "Team building moment",
        span: "md:col-span-1",
      },
      {
        id: 314,
        type: MediaType.Image,
        src: `/team-building/IMG_0233.JPG`,
        alt: "Team activity",
        span: "md:col-span-1",
      },
      {
        id: 315,
        type: MediaType.Image,
        src: `/team-building/IMG_0234.JPG`,
        alt: "Team building",
        span: "md:col-span-1",
      },
      {
        id: 316,
        type: MediaType.Image,
        src: `/team-building/IMG_0235.JPG`,
        alt: "Team event",
        span: "md:col-span-1",
      },
      {
        id: 317,
        type: MediaType.Image,
        src: `/team-building/IMG_0236.JPG`,
        alt: "Team building activity",
        span: "md:col-span-1",
      },
      {
        id: 318,
        type: MediaType.Image,
        src: `/team-building/IMG_0237.JPG`,
        alt: "Team collaboration",
        span: "md:col-span-1",
      },
      {
        id: 319,
        type: MediaType.Image,
        src: `/team-building/IMG_0238.JPG`,
        alt: "Team building",
        span: "md:col-span-1",
      },
      {
        id: 320,
        type: MediaType.Image,
        src: `/team-building/IMG_0239.JPG`,
        alt: "Team activity",
        span: "md:col-span-1",
      },
      {
        id: 321,
        type: MediaType.Image,
        src: `/team-building/IMG_0240.JPG`,
        alt: "Team building event",
        span: "md:col-span-1",
      },
      {
        id: 322,
        type: MediaType.Image,
        src: `/team-building/IMG_0241.JPG`,
        alt: "Team collaboration",
        span: "md:col-span-1",
      },
      {
        id: 323,
        type: MediaType.Image,
        src: `/team-building/IMG_0242.JPG`,
        alt: "Team building moment",
        span: "md:col-span-1",
      },
    ],
  },
];
