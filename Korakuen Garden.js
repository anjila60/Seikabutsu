document.addEventListener("DOMContentLoaded", function () {
  const langJa = document.getElementById("lang-ja");
  const langEn = document.getElementById("lang-en");

  const translations = {
    ja: {
      title: "岡山後楽園",
      subtitle: "江戸時代を代表する池泉回遊式大名庭園。日本三名園の一つとして知られる美しい景観",
      about: "後楽園について",
      history: "歴史",
      features: "見どころ",
      access: "アクセス",
      info: "基本情報",
      seasons: "四季の魅力"
    },
    en: {
      title: "Okayama Korakuen Garden",
      subtitle: "A representative daimyo garden from the Edo period, known as one of Japan's Three Great Gardens.",
      about: "About Korakuen",
      history: "History",
      features: "Highlights",
      access: "Access",
      info: "Information",
      seasons: "Seasonal Beauty"
    }
  };

  function switchLanguage(lang) {
    document.querySelector("h1").textContent = translations[lang].title;
    document.querySelector(".subtitle").textContent = translations[lang].subtitle;
    document.querySelector('a[href="#about"]').textContent = translations[lang].about;
    document.querySelector('a[href="#history"]').textContent = translations[lang].history;
    document.querySelector('a[href="#features"]').textContent = translations[lang].features;
    document.querySelector('a[href="#access"]').textContent = translations[lang].access;
    document.querySelector('a[href="#info"]').textContent = translations[lang].info;
    document.querySelector('#seasons h2').textContent = translations[lang].seasons;
  }

  langJa.addEventListener("click", function (e) {
    e.preventDefault();
    switchLanguage("ja");
  });

  langEn.addEventListener("click", function (e) {
    e.preventDefault();
    switchLanguage("en");
  });

  document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".thumbnail-btn");
  const images = document.querySelectorAll("#seasons div");
  

  images.forEach((div, index) => {
    div.style.display = index === 0 ? "block" : "none";
  });

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      images.forEach((div, i) => {
        div.style.display = i === index ? "block" : "none";
      });
    });
  });
});

  const buttons = document.querySelectorAll(".thumbnail-btn");
  const images = document.querySelectorAll("#seasons div");

  images.forEach((div, index) => {
    div.style.display = index === 0 ? "block" : "none";
  });

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      images.forEach((div, i) => {
        div.style.display = i === index ? "block" : "none";
      });
    });
  });
});
