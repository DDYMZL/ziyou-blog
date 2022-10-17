module.exports = {
  title: "技术文档",
  plugins: [
    [
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    sidebar: [getCodeReview(), getSharing()],
    nav: [
      { text: "首页", link: "/" },
      { text: "代码规范", link: "/rules/index" },
    ],
  },
};

function getCodeReview() {
  return {
    text: "问题处理",
    items: [
      {
        text: "图片无法加载",
        link: "/problem/记一次浏览器拦截导致图片出不来的问题",
      },
      {
        text: "nuxt asyncData调试",
        link: "/problem/记一次nuxt asyncData调试",
      },
    ],
  };
}

function getSharing() {
  return {
    text: "学习",
    items: [
      {
        text: "浏览器怎么渲染页面",
        link: "/study/浏览器是怎么渲染页面的",
      },
    ],
  };
}
