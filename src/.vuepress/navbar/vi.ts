import { navbar } from "vuepress-theme-hope";

export const viNavbar = navbar([
  "/",
  "/pages/",
  {
    text: "Nhật ký",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      // {
      //   text: "Apple",
      //   icon: "pen-to-square",
      //   prefix: "apple/",
      //   children: [
      //     { text: "Apple1", icon: "pen-to-square", link: "1" },
      //     { text: "Apple2", icon: "pen-to-square", link: "2" },
      //     "3",
      //     "4",
      //   ],
      // },
      { text: "Cherry", icon: "pen-to-square", link: "cherry" },
    ],
  },
  {
    text: "Tài liệu",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
