// ==============================================================================
// 🌟 BIRTHDAY WEBSITE CONFIGURATION
// Customize everything here! Change her name, passcode, memories, quiz, and letter.
// ==============================================================================

window.BIRTHDAY_CONFIG = {
  // 💖 Personal Details
  recipientName: "Alin", // Her name
  senderName: "Kyan", // Your name
  birthdayDate: "2026-10-14", // Her birthday date: October 14 (YYYY-MM-DD)
  
  // 🔐 Passcode to unlock the site: Anniversary on 24 November 2023
  passcode: "24112023", 
  acceptedPasscodes: [
    "24112023", 
    "241123", 
    "24-11-2023", 
    "24/11/2023", 
    "24 11 2023", 
    "24 november 2023", 
    "2411"
  ],
  passcodeHint: "Hint: The day our story officially began — our anniversary! 💫 (DDMMYYYY)",

  // 🎵 Background Music
  bgMusicUrl: "music.mp3", 

  // 💌 The Love Letter (Shows inside the animated envelope)
  letter: {
    title: "Happy Birthday, My Star Alin ✨",
    date: "October 14",
    paragraphs: [
      "Dearest Alin,",
      "From the moment you came into my life, everything became warmer, brighter, and infinitely more magical. Just like Rapunzel watching the floating lanterns: 'All at once everything looks different, now that I see you.' 🏮✨",
      "Ever since that first date and November 24, 2023, walking by your side has felt like living inside my favorite fairy tale. You have this beautiful, gentle light that turns ordinary days into sweet memories and quiet nights into comfort.",
      "Today is all about celebrating you—your kind heart, your contagious smile, your silly laughs, and everything that makes you uniquely and wonderfully you.",
      "May this new year bring you all the endless happiness, wonder, and love in the universe. I'm so lucky to walk alongside you under the stars.",
      "Happy Birthday, Alin. At last I see the light, and you will always be my favorite star in the galaxy. 👑🏮💫"
    ],
    signOff: "Forever and always yours,"
  },

  // 📸 Constellation of Memories (Polaroid Timeline)
  memories: [
    {
      title: "Our First Date",
      date: "Where It All Began",
      description: "Watching Oppenheimer together and taking that mirror selfie on our very first date... 'And at last I see the light, and it's like the fog has lifted.' 🎬🏮✨",
      image: "photos/first_date.png",
      tag: "First Date 🎬💖"
    },
    {
      title: "Our Date Moments",
      date: "Favorite Smiles",
      description: "Sitting across from you, having food and talking about everything and nothing. My favorite place to be.",
      image: "photos/alin_3.jpg",
      tag: "Date Memories ☕💖"
    },
    {
      title: "The Prettiest Girl in Town",
      date: "Aesthetic Queen",
      description: "Look at you being the most stylish, gorgeous person on this planet. Absolutely stunning.",
      image: "photos/alin_4.jpg",
      tag: "My Favorite View ✨"
    },
    {
      title: "Your Silly & Cute Side",
      date: "Never Fails to Make Me Smile",
      description: "The adorable, funny selfies that never fail to brighten up my entire day.",
      image: "photos/alin_1.png",
      tag: "Most Adorable 🥺💫"
    },
    {
      title: "Late Night Starlight",
      date: "Midnight Thoughts",
      description: "That wink and sleepy late-night smile that has my whole heart.",
      image: "photos/alin_2.png",
      tag: "Heart Stealer 😉🌙"
    },
    {
      title: "Those Beautiful Eyes",
      date: "October 14th & Always",
      description: "Every time I look at you, I fall in love all over again. Happy Birthday, my Alin.",
      image: "photos/alin_5.png",
      tag: "Forever Yours 🎂💖"
    }
  ],

  // 💖 "Reasons Why You're My Favorite Star" (Interactive Deck / Jar of Stars)
  reasons: [
    "Your contagious laugh that instantly brightens up any day.",
    "The way you remind me of Rapunzel — radiant, gentle, and bringing light into my world. 🏮",
    "The way your eyes sparkle when you're happy.",
    "How incredibly caring, sweet, and thoughtful you are.",
    "You make even the simplest moments feel extraordinary.",
    "Your warm hugs that make me feel right at home.",
    "The cute expressions you make when you're thinking or smiling.",
    "How deeply you care about everything and everyone around you.",
    "All our silly inside jokes and unspoken connections.",
    "Simply being you: Alin, the brightest star and light in my sky. 🌌"
  ],

  // 🎮 Couple Quiz ("How Well Do You Know Us?") - 10 Questions
  quizQuestions: [
    {
      question: "Which magical song reminds Kyan of Alin the most?",
      options: [
        "Let It Go (Frozen)",
        "I See The Light (Rapunzel / Tangled)",
        "A Whole New World (Aladdin)",
        "Part of Your World (Little Mermaid)"
      ],
      correctIndex: 1,
      note: "'And at last I see the light, and it's like the sky is new...' Just like you, my Rapunzel! 🏮✨"
    },
    {
      question: "When did our universe officially align (Our Anniversary)?",
      options: [
        "October 14, 2023",
        "November 24, 2023",
        "December 25, 2023",
        "January 1, 2024"
      ],
      correctIndex: 1,
      note: "November 24, 2023 — the best day of my life! 🥰"
    },
    {
      question: "What movie did we watch on our first date?",
      options: [
        "Barbie",
        "Oppenheimer",
        "Mission: Impossible",
        "Spider-Man: Across the Spider-Verse"
      ],
      correctIndex: 1,
      note: "Oppenheimer! 3 hours of cinema, but my eyes were mostly on you! 🎬💣✨"
    },
    {
      question: "When is the most special day on the entire calendar?",
      options: [
        "Halloween (Oct 31)",
        "October 14th (Alin's Birthday!)",
        "October 1st",
        "New Year's Eve"
      ],
      correctIndex: 1,
      note: "October 14th is the queen's birthday! 👑🎂"
    },
    {
      question: "Who is the most gorgeous, cute, and adorable person in the entire universe?",
      options: [
        "A cute kitten",
        "A golden retriever puppy",
        "Baby Yoda",
        "Alin (obviously!)"
      ],
      correctIndex: 3,
      note: "100% you, Alin! Across all galaxies. ✨"
    },
    {
      question: "What is Kyan's absolute favorite thing in the world?",
      options: [
        "Sleeping in late",
        "Playing video games",
        "Spending time with and loving Alin",
        "Eating pizza"
      ],
      correctIndex: 2,
      jokeIndex: 1,
      jokeNote: "Wait... you actually picked video games?! 😂 Just kidding, it counts! But you know loving Alin is always #1! 🎮❤️",
      note: "100%! Being with you and loving you will always be my favorite thing in the universe! 🥰❤️"
    },
    {
      question: "What can instantly turn any bad day into a good day for Kyan?",
      options: [
        "Drinking iced coffee",
        "Seeing Alin smile and laugh",
        "Finding money in a jacket",
        "A 10-hour nap"
      ],
      correctIndex: 1,
      note: "Your smile is genuinely my favorite sight in the cosmos! ☀️💖"
    },
    {
      question: "What is our favorite kind of date?",
      options: [
        "Eating delicious food together",
        "Taking silly photos together",
        "Talking for hours about everything",
        "All of the above!"
      ],
      correctIndex: 3,
      note: "Every second with you is an adventure, no matter what we do! 🍔💫"
    },
    {
      question: "What does Kyan love most about Alin's selfies?",
      options: [
        "Her pretty eyes",
        "Her cute & funny pouting faces",
        "Her sweet late-night wink",
        "Literally everything about her!"
      ],
      correctIndex: 3,
      note: "Every single face and selfie you take is absolute perfection! 🥺✨"
    },
    {
      question: "How long does Kyan plan on loving Alin?",
      options: [
        "Until next year",
        "For 10 years",
        "To infinity, beyond, and across all galaxies 🪐",
        "Just on weekends"
      ],
      correctIndex: 2,
      note: "Forever and always, my star! Happy Birthday Alin! 💖👑"
    }
  ],

  // 🎂 Birthday Cake Wishes & Secrets
  cakeWishMessage: "May all your sweetest dreams and wildest wishes come true this year, Alin! 🌟 Like the floating lanterns in the sky, you shine brighter than anything. Happy Birthday from Kyan! 🏮🎂",
};
