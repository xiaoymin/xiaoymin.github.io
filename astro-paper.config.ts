import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://www.xiaominfo.com/",
    title: "八一菜刀",
    description: "八一菜刀的个人博客",
    author: "肖玉民",
    profile: "https://github.com/xiaoymin",
    ogImage: "default-og.jpg",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 8,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/xiaoymin" },
    { name: "gitee",    url: "https://gitee.com/xiaoym", linkTitle: "八一菜刀 on Gitee" },
    { name: "x",        url: "https://x.com/xiaoymin" },
    {
      name: "wechat",
      url: "/images/profile/user.jpg",
      qrImage: "/images/profile/user.jpg",
      linkTitle: "微信 xiao934447",
    },
    { name: "mail",     url: "mailto:xiaoymin@foxmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
