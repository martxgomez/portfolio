import { projects, reviews } from "./data.js";

const templateProject = document.querySelector(
  '[data-template="project-card"]',
);

const projectsUl = document.querySelector("#projects ul");

projects.forEach((project) => {
  const card = templateProject.content.cloneNode(true);
  const image = card.querySelector("img");
  const title = card.querySelector("h4");
  const description = card.querySelector("p");
  const link = card.querySelectorAll("a")[0];
  const web = card.querySelectorAll("a")[1];
  const tech = card.querySelectorAll("p")[1];
  const date = card.querySelector("h5");

  image.src = project.image.src;
  image.alt = project.image.alt;

  title.textContent = project.title;
  date.textContent = project.date;
  description.innerHTML = project.description
    .replace(/\n\n/g, "<br><br>")
  tech.insertAdjacentHTML("beforeend", project.tech);

  link.href = project.link;
  web.href = project.web;

  projectsUl.appendChild(card);
});

// REVIEWS TEMPLATE
const templateReview = document.querySelector('[data-template="review-card"]');
const reviewsUl = document.querySelector("#reviews ul");

reviews.forEach((review) => {
  const card = templateReview.content.cloneNode(true);
  const image = card.querySelector("img");
  const name = card.querySelector("p");
  const reviewText = card.querySelector("blockquote");

  image.src = review.image.src;
  image.alt = review.image.alt;

  name.textContent = review.name;
  reviewText.textContent = review.reviewText;

  reviewsUl.appendChild(card);
});
