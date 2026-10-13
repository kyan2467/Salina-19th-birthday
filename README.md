# 🌟 Starry Celestial Birthday Website for Her (October 14) ✨

An interactive, responsive, romantic celestial-themed website crafted for your girlfriend's birthday on **October 14th**.

---

## 🚀 Quick Start (How to Open & View Now)

1. Simply open **`index.html`** in any web browser (Chrome, Safari, Edge, Firefox) by double-clicking it.
2. The **Passcode** to unlock is your anniversary:
   ```text
   24112023
   ```
   *(Also accepts `241123`, `24/11/2023`, `24-11-2023`, or `2411`)*

---

## 🎨 Features Included

- 🔐 **Celestial Star Passcode Gatekeeper**: Keeps the surprise private with a secret code (default: `1014` or your choice).
- 🌌 **Live Starfield & Shooting Stars**: Interactive canvas with twinkling stars, cosmic nebulae, and shooting stars.
- ⏳ **Countdown to October 14th**: Live ticking countdown with an instant *"Preview Birthday Mode"* switch to test the grand reveal.
- 💌 **Animated 3D Love Letter Envelope**: Tap the wax seal to crack it open and unfold a handwritten letter.
- 🎂 **Interactive 3-Tier Birthday Cake**: Click candles to blow them out or hit *"Blow Out Candles"* to launch fireworks, celestial confetti, and unlock your birthday wish!
- 📸 **Constellation of Memories**: Polaroid photo gallery with tilt cards, starlight tags, and click-to-zoom Lightbox.
- 💖 **"Reasons You're My Favorite Star"**: 3D flip cards & "Draw a Star Note" button to reveal sweet, touching reasons you love her.
- 🎮 **"How Well Do You Know Us?" Couple Quiz**: Playful interactive quiz with real-time feedback, confetti, and romantic soulmate score.
- 🌠 **"Catch Falling Stars" Mini-game**: Bonus mini-game to tap shooting stars and reveal birthday wishes.
- 🎵 **Celestial Ambient Music & Synthesizer**: Built-in soothing celestial chimes and audio synthesizer (no external files required!), with support for adding your own song.

---

## 🛠️ How to Personalize (`config.js`)

You do **NOT** need to edit HTML code to customize the site. Simply open **`config.js`** in your text editor:

### 1. Her Name & Passcode:
```javascript
recipientName: "Alin",        // Her name
senderName: "Kyan",           // Your name
passcode: "24112023",         // Your anniversary (24 November 2023)
passcodeHint: "Hint: Our anniversary 💫",
```

### 2. Add Background Music:
Place an `.mp3` song (like her favorite romantic song) inside the `birthday-website/` folder and set:
```javascript
bgMusicUrl: "our-song.mp3",
```

### 3. Personalize the Love Letter:
Edit the paragraphs inside `letter:` in `config.js` with your heartfelt memories and words.

### 4. Add Your Own Photos:
Create a folder called `photos` inside `birthday-website/` and add your pictures (`photos/photo1.jpg`, `photos/photo2.jpg`, etc.). Then update `config.js`:
```javascript
memories: [
  {
    title: "Our First Date",
    date: "A Day to Remember",
    description: "The coffee shop where we talked for 4 hours straight.",
    image: "photos/photo1.jpg",
    tag: "Where It Started 🌟"
  },
  // Add as many as you like!
]
```

### 5. Customize the Quiz & Reasons:
Edit the questions, options, and reasons in `config.js` to feature your real memories, favorite restaurants, and inside jokes!

---

## 🌐 How to Send It to Her (Free 1-Click Hosting)

When you're ready to share it with her on October 14th:

### Option A: Netlify Drop (Easiest — Takes 30 Seconds, No Code Needed)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop) (free).
2. Drag and drop the whole `birthday-website` folder onto the page.
3. It will instantly give you a live URL (e.g. `sarah-october14.netlify.app`) that you can send directly to her phone!

### Option B: Vercel
1. Go to [vercel.com](https://vercel.com).
2. Deploy the folder for free with 1 click.

### Option C: GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to **Settings > Pages** and select `Deploy from branch: main`.

AI Used for Helping : Gemini

