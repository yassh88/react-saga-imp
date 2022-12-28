const dummyData = [
  {
    name: "src",
    isFolder: true,
    content: [
      {
        name: "component",
        isFolder: true,
        content: [
          {
            name: "home",
            isFolder: false,
          },
          {
            name: "mainPage",
            isFolder: false,
          },
        ],
      },
    ],
  },

  {
    name: "style",
    isFolder: true,
    content: [
      {
        name: "styled-component",
        isFolder: true,
        content: [
          {
            name: "home-css",
            isFolder: false,
          },
          {
            name: "mainPage-css",
            isFolder: false,
          },
        ],
      },
      {
        name: "index.js",
        isFolder: false,
      },
    ],
  },
  {
    name: "index.html",
    isFolder: false,
  },
  {
    name: "app.js",
    isFolder: false,
  },
];

export default dummyData;
