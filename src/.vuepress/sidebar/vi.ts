import { sidebar } from "vuepress-theme-hope";

export const viSidebar = sidebar({
  "/": [
    "",
    // {
    //   text: "Thử nghiệm",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "Bài viết",
      icon: "laptop-code",
      prefix: "pages/",
      link: "pages/",
      children: "structure",
    },
    {
      text: "Nhật ký",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    // "slides",
  ],
});
