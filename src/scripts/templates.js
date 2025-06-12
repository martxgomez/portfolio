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
  const link = card.querySelector("a");
  const tech = card.querySelectorAll("p")[1];

  image.src = project.image.src;
  image.alt = project.image.alt;

  title.textContent = project.title;
  description.textContent = project.description;
  tech.insertAdjacentHTML("beforeend",project.tech)

  link.href = project.link;

  projectsUl.appendChild(card)
});

const templateReview = document.querySelector(
  '[data-template="review-card"]',
);
const reviewsUl=document.querySelector("#reviews ul")

reviews.forEach((review) => {
  const card = templateReview.content.cloneNode(true);
  const image = card.querySelector("img");
  const name = card.querySelector("p");
  const reviewText = card.querySelector("blockquote");
  

  image.src = review.image.src;
  image.alt = review.image.alt;

  name.textContent = review.name;
  reviewText.textContent = review.reviewText;
  
  reviewsUl.appendChild(card)
});
