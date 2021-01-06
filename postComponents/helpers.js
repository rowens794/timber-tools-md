import posts from "../postComponents/postList";

let exports = {};

exports.getTitleAndHero = () => {
  let object = {};

  posts.forEach((post) => {
    object[post.slug] = post;
  });

  return object;
};

export default exports;
