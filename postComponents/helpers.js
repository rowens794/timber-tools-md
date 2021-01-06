import posts from "../postComponents/postList";

let exports = {};

exports.getTitleAndHero = (route) => {
  let object = {};
  posts.forEach((post) => {
    object[post.slug] = post;
  });

  return object[route.replace("/", "")];
};

export default exports;
