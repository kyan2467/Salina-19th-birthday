// ==============================================================================
// 🌌 CELESTIAL BIRTHDAY EXPERIENCE SCRIPT
// ==============================================================================

document.addEventListener("DOMContentLoaded", () => {
  const config = window.BIRTHDAY_CONFIG || {};

  // 1. Initialize Personalizations
  initPersonalDetails(config);

  // 2. Setup Starfield Background
  initStarfield();

  // 3. Setup Passcode Gatekeeper
  initPasscode(config);

  // 4. Setup Audio Synthesizer & Music
  initAudio(config);

  // 5. Setup Countdown to October 14
  initCountdown(config);

  // 6. Setup Love Letter & Envelope
  initEnvelope(config);

  // 7. Setup Birthday Cake & Candles
  initCake(config);

  // 8. Setup Memories Gallery & Lightbox
  initMemories(config);

  // 9. Setup Reasons Flip Cards
  initReasons(config);

  // 10. Setup Couple Quiz & Mini-game
  initQuiz(config);

  // 11. Setup Star Catcher Game
  initStarCatcher();
});

// ==============================================================================
// 1. PERSONAL DETAILS
// ==============================================================================
function initPersonalDetails(config) {
  const name = config.recipientName || "My Star";
  const navName = document.getElementById("nav-recipient-name");
  const heroName = document.getElementById("hero-recipient-name");
  const footerName = document.getElementById("footer-recipient");

  if (navName) navName.textContent = `For ${name}`;
  if (heroName) heroName.textContent = name;
  if (footerName) footerName.textContent = name;
  document.title = `Happy Birthday, ${name} ✨ | October 14`;
}

// ==============================================================================
// 2. CELESTIAL STARFIELD CANVAS
// ==============================================================================
function initStarfield() {
  const canvas = document.getElementById("starfield-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createStars();
  });

  const stars = [];
  const starCount = Math.floor((width * height) / 4500);

  function createStars() {
    stars.length = 0;
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
        color: Math.random() > 0.3 ? "#ffffff" : (Math.random() > 0.5 ? "#ffd77c" : "#bca6ff")
      });
    }
  }

    // Shooting stars
  const shootingStars = [];
  function maybeSpawnShootingStar() {
    if (Math.random() < 0.015 && shootingStars.length < 3) {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.4),
        length: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 6,
        angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
        alpha: 1
      });
    }
  }

  // 🏮 Rapunzel Floating Lanterns System
  const floatingLanterns = [];
  function createLantern(isBurst = false) {
    return {
      x: Math.random() * width,
      y: isBurst ? height + Math.random() * 300 : height + 20,
      width: Math.random() * 12 + 18, // 18 to 30px
      height: Math.random() * 14 + 22, // 22 to 36px
      speed: Math.random() * 0.65 + 0.55,
      swaySpeed: Math.random() * 0.02 + 0.01,
      swayOffset: Math.random() * Math.PI * 2,
      swayDistance: Math.random() * 1.6 + 0.8,
      alpha: Math.random() * 0.25 + 0.75
    };
  }

  window.releaseRapunzelLanterns = function(count = 20) {
    for (let i = 0; i < count; i++) {
      floatingLanterns.push(createLantern(true));
    }
  };

  // Passive ambient lantern drifting in background
  setInterval(() => {
    if (floatingLanterns.length < 14) {
      floatingLanterns.push(createLantern(false));
    }
  }, 3000);

  // Hook up lantern release button
  const lanternBtn = document.getElementById("lanterns-btn");
  if (lanternBtn) {
    lanternBtn.addEventListener("click", () => {
      window.releaseRapunzelLanterns(24);
      if (window.playSound) window.playSound("rapunzel");
      if (typeof triggerStardustBurst === "function") triggerStardustBurst();
    });
  }

  createStars();

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw ambient cosmic nebulae gradients (subtle, soft night sky)
    const grad1 = ctx.createRadialGradient(width * 0.8, height * 0.2, 50, width * 0.8, height * 0.2, 600);
    grad1.addColorStop(0, "rgba(55, 32, 95, 0.08)");
    grad1.addColorStop(1, "transparent");
    ctx.fillStyle = grad1;
    ctx.fillRect(0, 0, width, height);

    const grad2 = ctx.createRadialGradient(width * 0.2, height * 0.7, 50, width * 0.2, height * 0.7, 700);
    grad2.addColorStop(0, "rgba(16, 35, 80, 0.08)");
    grad2.addColorStop(1, "transparent");
    ctx.fillStyle = grad2;
    ctx.fillRect(0, 0, width, height);

    // Render stars
    for (let s of stars) {
      s.alpha += s.twinkleSpeed * s.twinkleDir;
      if (s.alpha > 0.95) {
        s.alpha = 0.95;
        s.twinkleDir = -1;
      } else if (s.alpha < 0.15) {
        s.alpha = 0.15;
        s.twinkleDir = 1;
      }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = s.alpha;
      ctx.fill();
    }

    // Render Rapunzel Floating Lanterns (soft warm candlelit glow)
    for (let i = floatingLanterns.length - 1; i >= 0; i--) {
      const lan = floatingLanterns[i];
      lan.y -= lan.speed;
      lan.x += Math.sin(lan.swayOffset) * lan.swayDistance;
      lan.swayOffset += lan.swaySpeed;

      ctx.save();
      ctx.globalAlpha = lan.alpha;

      // Soft warm amber halo around lantern (natural candle glow, not electric neon)
      const glowGrad = ctx.createRadialGradient(
        lan.x + lan.width / 2, lan.y + lan.height / 2, 2,
        lan.x + lan.width / 2, lan.y + lan.height / 2, lan.width * 1.5
      );
      glowGrad.addColorStop(0, "rgba(235, 175, 75, 0.22)");
      glowGrad.addColorStop(1, "transparent");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(lan.x - lan.width, lan.y - lan.height, lan.width * 3, lan.height * 3);

      // Lantern body (warm paper lantern gradient)
      const lanGrad = ctx.createLinearGradient(lan.x, lan.y, lan.x, lan.y + lan.height);
      lanGrad.addColorStop(0, "#f3db98");
      lanGrad.addColorStop(0.5, "#d99f36");
      lanGrad.addColorStop(1, "#a85d16");
      ctx.fillStyle = lanGrad;

      const r = 4;
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(lan.x, lan.y, lan.width, lan.height, r);
      } else {
        ctx.rect(lan.x, lan.y, lan.width, lan.height);
      }
      ctx.fill();

      // Inner candle flame core
      ctx.beginPath();
      ctx.arc(lan.x + lan.width / 2, lan.y + lan.height * 0.65, lan.width * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = "#fff8e7";
      ctx.fill();

      ctx.restore();

      if (lan.y < -lan.height - 30) {
        floatingLanterns.splice(i, 1);
      }
    }

    // Render shooting stars
    maybeSpawnShootingStar();
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const ss = shootingStars[i];
      const endX = ss.x - Math.cos(ss.angle) * ss.length;
      const endY = ss.y - Math.sin(ss.angle) * ss.length;

      const shootGrad = ctx.createLinearGradient(ss.x, ss.y, endX, endY);
      shootGrad.addColorStop(0, `rgba(255, 235, 170, ${ss.alpha})`);
      shootGrad.addColorStop(1, "rgba(255, 235, 170, 0)");

      ctx.beginPath();
      ctx.moveTo(ss.x, ss.y);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = shootGrad;
      ctx.lineWidth = 2;
      ctx.stroke();

      ss.x += Math.cos(ss.angle) * ss.speed;
      ss.y += Math.sin(ss.angle) * ss.speed;
      ss.alpha -= 0.015;

      if (ss.alpha <= 0 || ss.x > width || ss.y > height) {
        shootingStars.splice(i, 1);
      }
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }

  animate();
}

// ==============================================================================
// 3. PASSCODE GATEKEEPER
// ==============================================================================
function initPasscode(config) {
  const lockScreen = document.getElementById("lock-screen");
  const mainContent = document.getElementById("main-content");
  const input = document.getElementById("passcode-input");
  const hintEl = document.getElementById("passcode-hint");
  const errorEl = document.getElementById("lock-error");
  const toggleBtn = document.getElementById("toggle-password-btn");
  const unlockBtn = document.getElementById("unlock-btn");

  const primaryCode = (config.passcode || "24112023").trim().toLowerCase();
  const acceptedList = (config.acceptedPasscodes || [primaryCode]).map(c => c.trim().toLowerCase());
  if (!acceptedList.includes(primaryCode)) acceptedList.push(primaryCode);

  if (hintEl && config.passcodeHint) {
    hintEl.textContent = config.passcodeHint;
  }

  if (toggleBtn && input) {
    toggleBtn.addEventListener("click", () => {
      if (input.type === "password") {
        input.type = "text";
        toggleBtn.textContent = "🔒";
      } else {
        input.type = "password";
        toggleBtn.textContent = "👁️";
      }
    });
  }

  window.handleUnlock = function() {
    const rawVal = (input.value || "").trim().toLowerCase();
    const cleanVal = rawVal.replace(/[^a-z0-9]/g, "");
    
    // Check exact matches or normalized alphanumeric matches (e.g. 24/11/2023 -> 24112023)
    const isMatch = acceptedList.includes(rawVal) || 
                    acceptedList.map(c => c.replace(/[^a-z0-9]/g, "")).includes(cleanVal);

    if (isMatch) {
      if (errorEl) errorEl.textContent = "";
      
      // Celestial celebration burst on unlock!
      triggerStardustBurst();
      playSound("chime");

      // Start audio ambient if active
      if (window.playCelestialAmbience) {
        window.playCelestialAmbience();
      }

      lockScreen.classList.add("fade-out");
      document.body.classList.remove("locked-body");
      mainContent.classList.remove("hidden");

      setTimeout(() => {
        lockScreen.style.display = "none";
      }, 800);
    } else {
      if (errorEl) {
        errorEl.textContent = "The stars didn't align for that code. Hint: Our anniversary date! ✨";
      }
      input.classList.add("shake");
      setTimeout(() => input.classList.remove("shake"), 500);
      input.focus();
    }
  };
}

// ==============================================================================
// 4. CELESTIAL AUDIO & MUSIC SYNTHESIZER
// ==============================================================================
let audioCtx = null;
let isAudioPlaying = false;
let ambientOscillators = [];

function initAudio(config) {
  const musicBtn = document.getElementById("music-toggle-btn");
  const musicIcon = document.getElementById("music-icon");
  const bgAudio = config.bgMusicUrl ? new Audio(config.bgMusicUrl) : null;

  if (bgAudio) {
    bgAudio.loop = true;
  }

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  window.playSound = function(type) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      if (type === "chime") {
        // Magical harp/celestial chime
        const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);

          gain.gain.setValueAtTime(0.001, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.12, now + idx * 0.08 + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.2);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 1.3);
        });
      } else if (type === "pop") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === "whoosh") {
        const bufferSize = ctx.sampleRate * 0.4;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(600, now);
        filter.frequency.exponentialRampToValueAtTime(150, now + 0.4);
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start(now);
      } else if (type === "rapunzel") {
        // 🏮 "And at last I see the light..." (Alan Menken melody from Rapunzel)
        // Melody notes: G4, A4, B4, C5, B4, A4, G4
        const melody = [
          { freq: 392.00, dur: 0.38, delay: 0.00 }, // And
          { freq: 440.00, dur: 0.38, delay: 0.38 }, // at
          { freq: 493.88, dur: 0.45, delay: 0.76 }, // last
          { freq: 523.25, dur: 0.65, delay: 1.21 }, // I
          { freq: 493.88, dur: 0.42, delay: 1.86 }, // see
          { freq: 440.00, dur: 0.42, delay: 2.28 }, // the
          { freq: 392.00, dur: 1.30, delay: 2.70 }  // light...
        ];
        melody.forEach(note => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(note.freq, now + note.delay);

          gain.gain.setValueAtTime(0.001, now + note.delay);
          gain.gain.exponentialRampToValueAtTime(0.14, now + note.delay + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + note.delay + note.dur);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + note.delay);
          osc.stop(now + note.delay + note.dur + 0.06);
        });
      }
    } catch (e) {
      console.warn("Audio playback notice:", e);
    }
  };

  // Ambient Celestial Chord Drone (soft soothing synth in background)
  window.playCelestialAmbience = function() {
    if (bgAudio) {
      bgAudio.play().then(() => {
        isAudioPlaying = true;
        if (musicIcon) musicIcon.textContent = "🔊";
      }).catch(() => {});
      return;
    }

    try {
      const ctx = getAudioContext();
      if (!ctx || ambientOscillators.length > 0) return;

      const chordNotes = [261.63, 329.63, 392.0, 493.88]; // Cmaj7 warm drone
      chordNotes.forEach((freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.015, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        ambientOscillators.push({ osc, gain });
      });

      isAudioPlaying = true;
      if (musicIcon) musicIcon.textContent = "🔊";
    } catch (e) {
      console.warn("Ambience notice:", e);
    }
  };

  function stopCelestialAmbience() {
    if (bgAudio) {
      bgAudio.pause();
    }
    ambientOscillators.forEach(({ osc, gain }) => {
      try {
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
        setTimeout(() => osc.stop(), 500);
      } catch (e) {}
    });
    ambientOscillators = [];
    isAudioPlaying = false;
    if (musicIcon) musicIcon.textContent = "🔇";
  }

  if (musicBtn) {
    musicBtn.addEventListener("click", () => {
      if (isAudioPlaying) {
        stopCelestialAmbience();
      } else {
        window.playCelestialAmbience();
      }
    });
  }
}

// ==============================================================================
// 5. COUNTDOWN & CELEBRATION MODE
// ==============================================================================
function initCountdown(config) {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const countdownGrid = document.getElementById("countdown-grid");
  const countdownLabel = document.getElementById("countdown-label");
  const bdayBanner = document.getElementById("birthday-banner");
  const previewBtn = document.getElementById("preview-bday-mode-btn");
  const previewText = document.getElementById("preview-mode-text");

  let isPreviewMode = false;

  // Target date: October 14 of current or next configured year
  const rawDate = config.birthdayDate || "2026-10-14";
  const targetTime = new Date(`${rawDate}T00:00:00`).getTime();

  function update() {
    if (isPreviewMode) return;

    const now = new Date().getTime();
    const diff = targetTime - now;

    if (diff <= 0) {
      // It's the birthday!
      countdownGrid.classList.add("hidden");
      if (countdownLabel) countdownLabel.classList.add("hidden");
      bdayBanner.classList.remove("hidden");
      triggerStardustBurst();
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(d).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(h).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(m).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(s).padStart(2, "0");
  }

  // Calculate days in love since November 24, 2023
  const daysInLoveEl = document.getElementById("days-in-love");
  if (daysInLoveEl) {
    const annivTime = new Date("2023-11-24T00:00:00").getTime();
    const daysSince = Math.max(1, Math.floor((new Date().getTime() - annivTime) / (1000 * 60 * 60 * 24)));
    daysInLoveEl.textContent = daysSince.toLocaleString();
  }

  update();
  setInterval(update, 1000);

  // Toggle preview mode for user testing
  if (previewBtn) {
    previewBtn.addEventListener("click", () => {
      isPreviewMode = !isPreviewMode;
      if (isPreviewMode) {
        countdownGrid.classList.add("hidden");
        countdownLabel.classList.add("hidden");
        bdayBanner.classList.remove("hidden");
        previewText.textContent = "Switch Back to Real Countdown";
        triggerStardustBurst();
        playSound("chime");
      } else {
        countdownGrid.classList.remove("hidden");
        countdownLabel.classList.remove("hidden");
        bdayBanner.classList.add("hidden");
        previewText.textContent = 'Preview "Birthday Day" Celebration Mode';
        update();
      }
    });
  }
}

// ==============================================================================
// 6. LOVE LETTER & INTERACTIVE ENVELOPE
// ==============================================================================
function initEnvelope(config) {
  const envelope = document.getElementById("envelope");
  const waxSeal = document.getElementById("wax-seal");
  const toggleBtn = document.getElementById("toggle-letter-btn");
  const toggleText = document.getElementById("toggle-letter-text");
  const letterBody = document.getElementById("letter-body");
  const letterTitle = document.getElementById("letter-title");
  const letterDate = document.getElementById("letter-date");
  const letterSignOff = document.getElementById("letter-signoff");
  const letterSender = document.getElementById("letter-sender");

  const letterData = config.letter || {};

  if (letterTitle && letterData.title) letterTitle.textContent = letterData.title;
  if (letterDate && letterData.date) letterDate.textContent = letterData.date;
  if (letterSignOff && letterData.signOff) letterSignOff.textContent = letterData.signOff;
  if (letterSender && config.senderName) letterSender.textContent = config.senderName;

  if (letterBody && letterData.paragraphs) {
    letterBody.innerHTML = letterData.paragraphs
      .map(p => `<p>${p}</p>`)
      .join("");
  }

  function toggleEnvelope() {
    const isOpen = envelope.classList.toggle("open");
    playSound(isOpen ? "chime" : "whoosh");

    if (isOpen) {
      if (toggleText) toggleText.textContent = "Fold Letter Back ✉️";
      triggerStardustBurst();
    } else {
      if (toggleText) toggleText.textContent = "Open Envelope 💌";
    }
  }

  if (waxSeal) waxSeal.addEventListener("click", toggleEnvelope);
  if (toggleBtn) toggleBtn.addEventListener("click", toggleEnvelope);
}

// ==============================================================================
// 7. INTERACTIVE CAKE & CANDLE BLOW-OUT
// ==============================================================================
function initCake(config) {
  const candles = document.querySelectorAll(".candle");
  const remainingEl = document.getElementById("candles-remaining");
  const statusText = document.getElementById("candle-status-text");
  const blowBtn = document.getElementById("blow-candles-btn");
  const relightBtn = document.getElementById("relight-candles-btn");
  const wishModal = document.getElementById("wish-reveal-modal");
  const wishText = document.getElementById("cake-wish-text");
  const closeWishBtn = document.getElementById("close-wish-btn");

  if (wishText && config.cakeWishMessage) {
    wishText.textContent = config.cakeWishMessage;
  }

  function getActiveCount() {
    return document.querySelectorAll(".candle.active:not(.blown)").length;
  }

  function updateStatus() {
    const active = getActiveCount();
    if (remainingEl) remainingEl.textContent = active;

    if (active === 0) {
      statusText.innerHTML = "✨ All candles are blown out! Your wish is heading to the stars! 🌠";
      blowBtn.classList.add("hidden");
      relightBtn.classList.remove("hidden");
      
      // Epic Confetti & Sound
      triggerGrandCelebration();
      playSound("chime");

      setTimeout(() => {
        wishModal.classList.remove("hidden");
      }, 1000);
    } else {
      statusText.innerHTML = `🌟 <span id="candles-remaining">${active}</span> candle${active > 1 ? "s" : ""} glowing bright!`;
    }
  }

  candles.forEach(candle => {
    candle.addEventListener("click", () => {
      if (!candle.classList.contains("blown")) {
        candle.classList.add("blown");
        playSound("whoosh");
        updateStatus();
      }
    });
  });

  if (blowBtn) {
    blowBtn.addEventListener("click", () => {
      candles.forEach(c => c.classList.add("blown"));
      playSound("whoosh");
      updateStatus();
    });
  }

  if (relightBtn) {
    relightBtn.addEventListener("click", () => {
      candles.forEach(c => c.classList.remove("blown"));
      relightBtn.classList.add("hidden");
      blowBtn.classList.remove("hidden");
      wishModal.classList.add("hidden");
      playSound("pop");
      updateStatus();
    });
  }

  if (closeWishBtn) {
    closeWishBtn.addEventListener("click", () => {
      wishModal.classList.add("hidden");
    });
  }
}

// ==============================================================================
// 8. CONSTELLATION OF MEMORIES (POLAROID GALLERY)
// ==============================================================================
function initMemories(config) {
  const container = document.getElementById("memories-container");
  const lightbox = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDesc = document.getElementById("lightbox-desc");
  const lightboxClose = document.getElementById("lightbox-close-btn");
  const lightboxOverlay = document.getElementById("lightbox-overlay");

  if (!container || !config.memories) return;

  container.innerHTML = config.memories.map((m, idx) => `
    <div class="memory-card" data-index="${idx}">
      <div class="memory-pin"></div>
      <div class="memory-img-wrapper">
        <img src="${m.image}" alt="${m.title}" loading="lazy" />
      </div>
      <div class="memory-info">
        <span class="memory-tag">${m.tag || m.date}</span>
        <h3 class="memory-title">${m.title}</h3>
        <p class="memory-desc">"${m.description}"</p>
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".memory-card").forEach(card => {
    card.addEventListener("click", () => {
      const idx = card.getAttribute("data-index");
      const mem = config.memories[idx];
      if (mem && lightbox) {
        lightboxImg.src = mem.image;
        lightboxTitle.textContent = mem.title;
        lightboxDesc.textContent = `${mem.date} • ${mem.description}`;
        lightbox.classList.remove("hidden");
        playSound("pop");
      }
    });
  });

  function closeLightbox() {
    if (lightbox) lightbox.classList.add("hidden");
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener("click", closeLightbox);
}

// ==============================================================================
// 9. REASONS WHY YOU'RE MY FAVORITE STAR (FLIP CARDS)
// ==============================================================================
function initReasons(config) {
  const container = document.getElementById("reasons-container");
  const drawBtn = document.getElementById("draw-star-btn");
  const flipAllBtn = document.getElementById("reveal-all-reasons-btn");

  if (!container || !config.reasons) return;

  container.innerHTML = config.reasons.map((reason, idx) => `
    <div class="reason-card-container" data-index="${idx}">
      <div class="reason-card-inner">
        <div class="reason-front celestial-glass">
          <span class="reason-star-icon">⭐</span>
          <span class="reason-index-label">Star #${idx + 1}</span>
          <span class="reason-prompt-text">Tap to reveal</span>
        </div>
        <div class="reason-back">
          <p class="reason-back-text">"${reason}"</p>
        </div>
      </div>
    </div>
  `).join("");

  const cards = container.querySelectorAll(".reason-card-container");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
      playSound("pop");
    });
  });

  if (drawBtn) {
    drawBtn.addEventListener("click", () => {
      const unflipped = Array.from(cards).filter(c => !c.classList.contains("flipped"));
      if (unflipped.length > 0) {
        const randomCard = unflipped[Math.floor(Math.random() * unflipped.length)];
        randomCard.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          randomCard.classList.add("flipped");
          playSound("chime");
          triggerStardustBurst();
        }, 300);
      } else {
        cards.forEach(c => c.classList.remove("flipped"));
        playSound("whoosh");
      }
    });
  }

  if (flipAllBtn) {
    flipAllBtn.addEventListener("click", () => {
      const anyUnflipped = Array.from(cards).some(c => !c.classList.contains("flipped"));
      cards.forEach(c => {
        if (anyUnflipped) {
          c.classList.add("flipped");
        } else {
          c.classList.remove("flipped");
        }
      });
      playSound("chime");
    });
  }
}

// ==============================================================================
// 10. COUPLE QUIZ
// ==============================================================================
function initQuiz(config) {
  const questions = config.quizQuestions || [];
  if (questions.length === 0) return;

  let currentIdx = 0;
  let score = 0;

  const quizCard = document.getElementById("quiz-card");
  const quizResult = document.getElementById("quiz-result");
  const progressText = document.getElementById("quiz-progress-text");
  const scoreBadge = document.getElementById("quiz-score-badge");
  const progressBar = document.getElementById("quiz-progress-bar");
  const questionEl = document.getElementById("quiz-question");
  const optionsEl = document.getElementById("quiz-options");
  const feedbackEl = document.getElementById("quiz-feedback");
  const feedbackMsg = document.getElementById("feedback-message");
  const nextBtn = document.getElementById("quiz-next-btn");
  const restartBtn = document.getElementById("quiz-restart-btn");
  const resultScoreText = document.getElementById("result-score-text");

  function renderQuestion() {
    const q = questions[currentIdx];
    if (!q) return;

    if (progressText) progressText.textContent = `Question ${currentIdx + 1} of ${questions.length}`;
    if (scoreBadge) scoreBadge.textContent = `Score: ${score}`;
    if (progressBar) progressBar.style.width = `${((currentIdx + 1) / questions.length) * 100}%`;
    if (questionEl) questionEl.textContent = q.question;
    if (feedbackEl) feedbackEl.classList.add("hidden");

    if (optionsEl) {
      optionsEl.innerHTML = q.options.map((opt, optIdx) => `
        <button class="quiz-opt-btn" data-index="${optIdx}">
          ${opt}
        </button>
      `).join("");

      optionsEl.querySelectorAll(".quiz-opt-btn").forEach(btn => {
        btn.addEventListener("click", () => handleSelectOption(btn, q));
      });
    }
  }

  function handleSelectOption(selectedBtn, question) {
    const selectedIdx = parseInt(selectedBtn.getAttribute("data-index"), 10);
    const isCorrect = selectedIdx === question.correctIndex;
    const isJoke = question.jokeIndex !== undefined && selectedIdx === question.jokeIndex;

    const allButtons = optionsEl.querySelectorAll(".quiz-opt-btn");
    allButtons.forEach(btn => (btn.disabled = true));

    if (isCorrect || isJoke) {
      selectedBtn.classList.add("correct");
      if (isJoke) {
        // Also highlight the actual loving answer!
        allButtons[question.correctIndex].classList.add("correct");
      }
      score++;
      if (scoreBadge) scoreBadge.textContent = `Score: ${score}`;
      if (feedbackMsg) {
        feedbackMsg.textContent = isJoke
          ? (question.jokeNote || "Haha wait... just kidding!! It counts! 😂❤️")
          : `🌟 Correct! ${question.note || ""}`;
      }
      playSound("chime");
      triggerStardustBurst();
    } else {
      selectedBtn.classList.add("wrong");
      allButtons[question.correctIndex].classList.add("correct");
      if (feedbackMsg) feedbackMsg.textContent = `💫 Aww! ${question.note || ""}`;
      playSound("pop");
    }

    if (feedbackEl) feedbackEl.classList.remove("hidden");
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIdx++;
      if (currentIdx < questions.length) {
        renderQuestion();
      } else {
        // Quiz complete!
        quizCard.classList.add("hidden");
        quizResult.classList.remove("hidden");
        if (resultScoreText) {
          resultScoreText.textContent = `You scored ${score} out of ${questions.length}!`;
        }
        playSound("chime");
        triggerGrandCelebration();
      }
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      currentIdx = 0;
      score = 0;
      quizResult.classList.add("hidden");
      quizCard.classList.remove("hidden");
      renderQuestion();
    });
  }

  renderQuestion();
}

// ==============================================================================
// 11. BONUS MINI-GAME: STAR CATCHER
// ==============================================================================
function initStarCatcher() {
  const launchBtn = document.getElementById("launch-star-catch-btn");
  const gameArea = document.getElementById("star-catcher-game");
  const canvasArea = document.getElementById("game-canvas-area");
  const closeBtn = document.getElementById("close-game-btn");
  const countEl = document.getElementById("caught-stars-count");

  let caughtCount = 0;
  let gameInterval = null;

  const sweetWishes = [
    "You are so loved! 💖",
    "October 14th belongs to you! 👑",
    "May your smile shine forever! ✨",
    "Most beautiful girl in the universe! 🪐",
    "Happy Birthday My Star! 🎂",
    "Forever grateful for you! 🌟"
  ];

  function spawnFallingStar() {
    if (!canvasArea || gameArea.classList.contains("hidden")) return;

    const star = document.createElement("div");
    star.className = "falling-star-target";
    star.textContent = Math.random() > 0.4 ? "⭐" : (Math.random() > 0.5 ? "✨" : "💫");
    
    const startX = Math.random() * (canvasArea.clientWidth - 40);
    star.style.left = `${startX}px`;
    star.style.top = "-40px";

    canvasArea.appendChild(star);

    let topPos = -40;
    const speed = Math.random() * 2 + 1.5;

    const anim = setInterval(() => {
      topPos += speed;
      star.style.top = `${topPos}px`;

      if (topPos > canvasArea.clientHeight) {
        clearInterval(anim);
        star.remove();
      }
    }, 20);

    star.addEventListener("click", () => {
      clearInterval(anim);
      caughtCount++;
      if (countEl) countEl.textContent = caughtCount;

      // Pop wish tooltip
      const wish = sweetWishes[Math.floor(Math.random() * sweetWishes.length)];
      const floatText = document.createElement("div");
      floatText.textContent = wish;
      floatText.style.position = "absolute";
      floatText.style.left = `${star.offsetLeft}px`;
      floatText.style.top = `${star.offsetTop}px`;
      floatText.style.color = "#ffd77c";
      floatText.style.fontWeight = "bold";
      floatText.style.fontSize = "0.85rem";
      floatText.style.pointerEvents = "none";
      floatText.style.transition = "all 0.8s ease-out";
      canvasArea.appendChild(floatText);

      setTimeout(() => {
        floatText.style.transform = "translateY(-30px)";
        floatText.style.opacity = "0";
      }, 50);

      setTimeout(() => floatText.remove(), 900);

      playSound("pop");
      star.remove();
    });
  }

  if (launchBtn && gameArea) {
    launchBtn.addEventListener("click", () => {
      gameArea.classList.remove("hidden");
      gameArea.scrollIntoView({ behavior: "smooth" });
      if (!gameInterval) {
        gameInterval = setInterval(spawnFallingStar, 1200);
      }
    });
  }

  if (closeBtn && gameArea) {
    closeBtn.addEventListener("click", () => {
      gameArea.classList.add("hidden");
      if (gameInterval) {
        clearInterval(gameInterval);
        gameInterval = null;
      }
    });
  }
}

// ==============================================================================
// CONFETTI CELEBRATIONS
// ==============================================================================
function triggerStardustBurst() {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ffd77c", "#ffffff", "#b185db", "#ff7597"]
    });
  }
}

function triggerGrandCelebration() {
  if (typeof confetti === "function") {
    const end = Date.now() + 3 * 1000;
    const colors = ["#ffd77c", "#ff9bb2", "#ffffff", "#a78bfa"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
}
