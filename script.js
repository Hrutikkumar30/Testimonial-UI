const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing Advicer",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "As testimonials are a statement of customer satisfaction, your existing customers' words can serve as a powerful tool to build trust.",
  },
  {
    name: "Jhon Flint",
    position: "Advisor",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "This question can help you learn more about your marketing campaigns and customer insights.",
  },
  {
    name: "Janifer Riles",
    position: "Client",
    photo: "https://randomuser.me/api/portraits/women/36.jpg",
    text: "When potential customers hear this story, they may relate to it, which could inspire them to buy your product or service.",
  },
  {
    name: "Zack Reacher",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/31.jpg",
    text: "This product has completely transformed our marketing strategy! We’ve seen a 50% increase in engagement since using it.",
  },
  {
    name: "Jane ",
    position: "Assistance Director",
    photo: "https://randomuser.me/api/portraits/women/39.jpg",
    text: "The best investment we made for our business! Their marketing expertise helped us double our customer base.",
  },
  {
    name: "Rubel Riles",
    position: "Team Leader",
    photo: "https://randomuser.me/api/portraits/men/30.jpg",
    text: "Their data-driven marketing approach gave us insights we never had before. We’re now making smarter decisions.",
  },
  {
    name: "James Roe",
    position: "Intern",
    photo: "https://randomuser.me/api/portraits/men/33.jpg",
    text: "Our social media presence exploded after working with Marketing . We now have a highly engaged audience!.",
  },
  {
    name: "James Miller",
    position: "Sales Representative",
    photo: "https://randomuser.me/api/portraits/men/27.jpg",
    text: "If you want marketing that actually converts, look no further. Their strategies helped us generate more leads than ever!.",
  },
  {
    name: "Gill Christ",
    position: "Account",
    photo: "https://randomuser.me/api/portraits/men/34.jpg",
    text: "From content marketing to lead generation, It has been a game-changer for our business growth!.",
  },
  {
    name: "Alice ",
    position: "Associate salesRepresntative",
    photo: "https://randomuser.me/api/portraits/women/38.jpg",
    text: "We were struggling to build brand awareness, but with their innovative campaigns, our reach has expanded beyond expectations!.",
  },
];

let idx = 0;

function updateTestimonial() {
  const { name, position, age, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx >= testimonials.length) {
    idx = 0;
  }
}

updateTestimonial();

setInterval(updateTestimonial, 5000);
