/**
 * Everything the site says lives here, so words, links and coaches can change without touching the layout.
 * Anything in [square brackets] is a placeholder to replace before launch.
 */

/**
 * Where every "Book" button goes. Empty until Pembee is set up: the buttons still show, but go nowhere.
 * Paste the Pembee booking link here and every button on the site starts working.
 */
export const BOOKING_URL = "";

/** Where "Become a member" goes. Also Pembee; empty until it's set up, same as BOOKING_URL. */
export const MEMBERSHIP_URL = "";

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
      title: "1-to-1 Sessions",
      body: "Individual coaching built entirely around your game and your goals, whether that's fixing a technical flaw or getting match-ready.",
      cta: "Book a 1-to-1",
    },
    {
      title: "Power Hitting Programme",
      body: "Clear the ropes more often. Base, bat speed, range-hitting and the decision-making behind when to go big.",
      cta: "View programme",
    },
    {
      title: "Bowl Faster Programme",
      body: "Add pace safely. Run-up rhythm, a repeatable action and the strength and movement work that turns effort into speed.",
      cta: "View programme",
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
      name: "Oli Hairs",
      role: "Founder & Head Coach",
      specialisms: "Batting, power hitting, opening the innings",
      /** Put the photo in public/coaches/ and set this to e.g. "/coaches/oli-hairs.jpg". */
      photo: "",
      bio: [
        "Oli is a left-handed opening batter who has represented Scotland since making his ODI debut against the Netherlands in 2010.",
        "He was part of Scotland's squad at the 2024 ICC Men's T20 World Cup, hit an unbeaten 127 against Italy in T20 World Cup qualifying and set a Scottish record with 255 for Scotland A against Oman.",
        "Strike Rate brings that experience from the top of the order to players who want to score faster and play with more intent.",
      ],
    },
  ],

  membership: {
    heading: "Become a member",
    body: "Get more from Strike Rate between sessions. Join through our booking partner and you'll be sent your member access code straight away.",
    cta: "Become a member",
  },

  contact: {
    heading: "Get in touch",
    intro: "Questions about coaching, availability or which sessions suit you best? Send us a message and we'll get back to you.",
  },
};

export const nav = [
  { label: "Our Programmes", href: "#programmes" },
  { label: "Why Strike Rate", href: "#why" },
  { label: "Meet the Coaches", href: "#coaches" },
  { label: "Membership", href: "#membership" },
  { label: "Contact Us", href: "#contact" },
];
