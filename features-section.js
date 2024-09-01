document.addEventListener("DOMContentLoaded", () => {
  const articles = Array.from(document.querySelectorAll(".feature"));

  articles.forEach((article, index) => {
      setTimeout(() => {
          article.classList.add("reveal");
      }, index * 300);
  });
});
