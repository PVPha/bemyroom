var posts = [
  {
    src: "unsplash2.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash3.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash4.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash5.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash6.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash7.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash8.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash9.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash10.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash11.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash12.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash13.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash14.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash15.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash16.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash17.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash18.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash19.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash20.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
  {
    src: "unsplash21.jpg",
    title: "Truyện (có thể) là nhiều kỳ về đội ngũ Tiếp Thị Số của...",
  },
];

const getPosts = (start, end) => {
  let ret = [];
  for (let i = start; i < end; i++) {
    //
    if (i > posts.length) {
      break;
    }
    ret.push(posts[i % posts.length]);
    // ret.push(i);
  }
  return ret;
  // else {
  //   for (let i = 0; i < Number; i++) {
  //     // ret.push(posts[i % posts.length]);
  //     ret.push(i);
  //   }
  //   return ret;
  // }
};

export default getPosts;
