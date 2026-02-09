const config = {
  // Esasy maglumatlar
  valentineName: "Aýjemal",                    // ← Bu ýere ol adamyň adyny ýaz (mysal: Aýjemal, Gülşirin, Maýa)
  pageTitle: "Sen meniň Walentinkam bolarmyň? 💝",

  // Uçýan emojiler (fon üçin)
  floatingEmojis: {
    hearts: ['❤️', '💖', '💝', '💗', '💓', '💘', '💞', '💕'],
    bears: ['🧸', '🐻', '🐼']                     // Islemeýän bolsa [] goý
  },

  // Soraglar we knopkalar
  questions: {
    first: {
      text: "Maňa gaty ýaradyňmy? 😏",
      yesBtn: "Hawa, gaty gowy! ❤️",
      noBtn: "Ýok-da...",
      secretAnswer: "Men seni gaty söýýärin! Bilýärdim 😘"
    },
    second: {
      text: "Maňa näçe derejede söýýärsiň?",
      startText: "Şu derejede!",
      nextBtn: "Indiki ❤️"
    },
    third: {
      text: "Sen meniň Walentinkam bolarmyň...? 💕",
      yesBtn: "Hawa, elbette! 💖",
      noBtn: "Ýok"
    }
  },

  // Love meter habarlary (söýgi ölçeg)
  loveMessages: {
    extreme: "WOW! Sen meni gaty-gaty söýýärsiňmi? 🥰🚀💝",
    high: "Sonsuza çenli we ondanam artyk! 💫❤️",
    normal: "Gaty ýakyn, ýüregim sen üçin urýar! 🥰"
  },

  // Final şatlyk (Hawa basylanda çykýar)
  celebration: {
    title: "Bilýärdim, Hawa diýjek! 🎉💖",
    message: "Sen meniň Walentinkam boldyň! \n14-nji Fewralda görüşeliň 💕\nMen seni gaty-gaty, gaty söýýärin! 😍",
    emojis: "💖🌹😍🥰🎂💋❤️💞💝"
  },

  // Reňkler (gülgüne we ýumşak)
  colors: {
    backgroundStart: "#ff9a9e",
    backgroundEnd: "#fecfef",
    buttonBackground: "#ff69b4",
    buttonHover: "#ff1493",
    textColor: "#ffffff"
  },

  // Animasiýa
  animations: {
    floatDuration: "18s",
    floatDistance: "65px",
    bounceSpeed: "0.6s",
    heartExplosionSize: 1.8
  },

  // Aýdym (Cloudinary URL goş)
  music: {
    enabled: true,
    autoplay: false,
    musicUrl: "Seniň Cloudinary URL-iň (mysal: https://res.cloudinary.com/.../aydym.mp3)",
    startText: "🎵 Aýdymy ýak",
    stopText: "🔇 Aýdymy ýatyryň",
    volume: 0.5
  }
};