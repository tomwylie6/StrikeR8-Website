/**
 * Everything the site says lives here, so words, links and coaches can change without touching the layout.
 * Anything in [square brackets] is a placeholder to replace before launch.
 */

/**
 * Where every "Book" button goes. Empty until Pembee is set up: the buttons still show, but go nowhere.
 * Paste the Pembee booking link here and every button on the site starts working.
 */
export const BOOKING_URL = "";

export const site = {
  name: "Strike Rate Cricket Coaching",
  shortName: "Strike Rate",
  tagline: "Cricket coaching for players who want to turn good net sessions into runs and wickets on matchday.",
  email: "[hello@strikerate.co.uk]",
  instagram: "https://www.instagram.com/strikeratecricket",
  tiktok: "https://www.tiktok.com/@strikeratecricket",

  hero: {
    eyebrow: "Strike Rate Cricket Coaching",
    heading: "Train like it matters. Play like you mean it.",
    subheading:
      "Coaching for juniors and adults, built around your game: batting, bowling, keeping and the bits in between.",
  },

  intro: {
    heading: "Coaching that carries into matchday",
    body: [
      "Strike Rate was set up to give ambitious cricketers coaching that is planned, personal and honest about what will make the biggest difference to their game.",
      "Every player gets clear goals, focused work in the nets and drills to take away, so the progress shows up where it counts: in the middle.",
    ],
  },

  programmes: [
    {
      title: "1-to-1 Coaching",
      body: "Individual sessions built entirely around your goals, whether that's sorting a technical flaw or getting match-ready.",
      cta: "Book 1-to-1",
    },
    {
      title: "Small Group Sessions",
      body: "Coaching in small groups focused on a single skill, with plenty of balls faced or bowled and personal feedback.",
      cta: "View sessions",
    },
    {
      title: "Junior Programmes",
      body: "Structured blocks for junior cricketers looking to push on at club, regional or county level.",
      cta: "View programmes",
    },
    {
      title: "Video Analysis",
      body: "Slow-motion footage of your technique, broken down so you can see exactly what we're working on and why.",
      cta: "Book analysis",
    },
  ],

  why: [
    {
      title: "Experienced coaching",
      body: "Qualified coaches who have played and coached the game at club and representative level.",
    },
    {
      title: "Built around you",
      body: "No one-size-fits-all drills. Every session starts with your game and what you want from it.",
    },
    {
      title: "The whole player",
      body: "Technique, game awareness and the mental side, so you're ready for real match situations.",
    },
    {
      title: "Progress you can see",
      body: "Video and clear goals each session, so you know exactly how far you've come.",
    },
  ],

  coaches: [
    {
      name: "[Coach name]",
      role: "Head Coach, Strike Rate",
      specialisms: "[Batting, pace bowling, wicket-keeping]",
      bio: "[A few lines about the coach: playing background, coaching experience and qualifications.]",
    },
  ],

  contact: {
    heading: "Get in touch",
    intro: "Questions about coaching, availability or which sessions suit you best? Send us a message and we'll get back to you.",
  },
};

export const nav = [
  { label: "Our Programmes", href: "#programmes" },
  { label: "Why Strike Rate", href: "#why" },
  { label: "Meet the Coaches", href: "#coaches" },
  { label: "Contact Us", href: "#contact" },
];
