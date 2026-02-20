document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     共通要素取得
  ========================= */
  const serverImg = document.getElementById("server-img");
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  /* =========================
     セクションスクロール
  ========================= */
  document.querySelectorAll("[data-scroll]").forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.scroll;
      const target = document.getElementById(targetId);
      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  /* =========================
     ヘッダーアイコン設定
  ========================= */
  const iconMap = {
    home: {
      light: "https://github.com/kinakomushiJP/kinakomushi.discord/blob/main/image/home_light.png?raw=true",
      dark:  "https://github.com/kinakomushiJP/kinakomushi.discord/blob/main/image/home_dark.png?raw=true"
    },
    admin: {
      light: "https://github.com/kinakomushiJP/kinakomushi.discord/blob/main/image/admin_light.png?raw=true",
      dark:  "https://github.com/kinakomushiJP/kinakomushi.discord/blob/main/image/admin_dark.png?raw=true"
    },
    otoiawase: {
      light: "https://github.com/kinakomushiJP/kinakomushi.discord/blob/main/image/otoiawase_light.png?raw=true",
      dark:  "https://github.com/kinakomushiJP/kinakomushi.discord/blob/main/image/otoiawase_dark.png?raw=true"
    },
    version: {
      light: "https://github.com/kinakomushiJP/kinakomushi.discord/blob/main/image/kousin_light.png?raw=true",
      dark:  "https://github.com/kinakomushiJP/kinakomushi.discord/blob/main/image/kousin_dark.png?raw=true"
    }
  };

  function updateHeaderIcons(theme) {
    document.querySelectorAll(".header button[data-icon]").forEach(btn => {
      const type = btn.dataset.icon;
      const img = btn.querySelector(".icon");
      if (!iconMap[type] || !img) return;

      img.style.opacity = 0;
      setTimeout(() => {
        img.src = iconMap[type][theme];
        img.style.opacity = 1;
      }, 200);
    });
  }

  /* =========================
     テーマ切替（1ボタン）
  ========================= */
  const themeIcons = {
    light: "https://github.com/kinakomushiJP/kinakomushi.discord/blob/main/image/light_mode.png?raw=true",
    dark:  "https://github.com/kinakomushiJP/kinakomushi.discord/blob/main/image/dark_mode.png?raw=true"
  };

  function setTheme(theme) {
    // フェードアウト
    themeIcon.style.opacity = 0;
    if (serverImg) serverImg.style.opacity = 0;

    setTimeout(() => {
      if (theme === "light") {
        document.body.classList.add("light-mode");
        themeIcon.src = themeIcons.light;
        if (serverImg) serverImg.src = "image/main_dark.png";
      } else {
        document.body.classList.remove("light-mode");
        themeIcon.src = themeIcons.dark;
        if (serverImg) serverImg.src = "image/main_light.png";
      }

      // フェードイン
      themeIcon.style.opacity = 1;
      if (serverImg) serverImg.style.opacity = 1;

      localStorage.setItem("theme", theme);
      updateHeaderIcons(theme);
    }, 300);
  }

  /* =========================
     初期化
  ========================= */
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);

  /* =========================
     テーマ切替クリック
  ========================= */
  themeToggleBtn.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light-mode");
    setTheme(isLight ? "dark" : "light");
  });

});