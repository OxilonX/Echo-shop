document.addEventListener("DOMContentLoaded", () => {
  const beforeButton = document.querySelector(".before");
  const afterButton = document.querySelector(".after");
  const reviewsContainer = document.querySelector(".review");
  const reviewerName = document.querySelector(".reviewer-name");
  const reviewerOpinion = document.querySelector(".opinion");
  const reviewerPicture = document.querySelector(".reviewer-icon");
  const reviewerRating = document.querySelector(".reviewer-rating");
  const revAfter = document.querySelector(".rev-after");
  const revBefore = document.querySelector(".rev-before");
  let secProductImage = document.querySelector(".sec1-product-image");
  let secProductTitle = document.querySelector(".sec1-product-title");
  let secProductDesc = document.querySelector(".sec1-product-description");
  let secProductPrice = document.querySelector(".sec1-product-price");
  const addToCart = document.querySelector(".add-to-cart");
  let cart = [];
  let i = 0;
  let r = 0;
  let allReviews = [
    {
      name: "Abdo J.",
      opinion:
        "I like my handcrafted candle, but the scent could be stronger and last longer.",
      path: "/images/reviewer-pfp.jpg",
      rating: 3,
    },
    {
      name: "Ali K.",
      opinion:
        "The lamp is stunning and fits perfectly in my living room. Highly recommend!",
      path: "/images/reviewer2-pfp.jpg",
      rating: 5,
    },
    {
      name: "Sara M.",
      opinion:
        "The incense burner brings a wonderful scent to my space. I am very pleased with it!",
      path: "/images/reviewer3-pfp.jpg",
      rating: 4,
    },
  ];
  let allSecProducts = [
    {
      id: 0,
      name: "Elegant Beechwood Tasting Spoons",
      description:
        "Handcrafted from premium beechwood, these elegant tasting spoons are perfect for sampling sauces, soups, and desserts.",
      price: "29.99",
      path: "path:images/Small_Beechwood_Spoons.jpg",
    },
    {
      id: 1,
      name: "Modern Rustic Hexagon Table Lamp",
      description:
        "Illuminate your space with this stunning hexagon table lamp, blending modern aesthetics with rustic charm.",
      price: "49.99",
      path: "/images/Hexagon Wooden Table Lamp, Modern Rustic Light, Handmade House Living Lamp, Wood Desk Night Lighting, Wooden lamps for Housewarming.jpg",
    },
    {
      id: 2,
      name: "Traditional Arabic Incense Burner (Mubkhar)",
      description:
        "Experience the enchanting aroma of traditional incense with this beautifully designed Mubkhar.",
      price: "39.99",
      path: "/images/mubkhar.jpg",
    },
    {
      id: 3,
      name: "Vintage 1940s Luxury Fedora Hat",
      description:
        "Step back in time with this exquisite 1940s-inspired fedora hat.",
      price: "79.99",
      path: "/images/Exquisite 1940s Inspired Luxury Men's Fedora  _ The Shadows - Long oval _ 22 1_4 in - 56_5 cm.jpg",
    },
  ];
  function runOnload() {
    displayReviews(r);
    displayProducts(i);
  }

  function displayProducts(index) {
    if (index < 0 || index >= allSecProducts.length) {
      console.error("Index out of bounds");
      return;
    } else {
      secProductTitle.textContent = allSecProducts[index].name;
      secProductDesc.textContent = allSecProducts[index].description;
      secProductPrice.textContent = `$${allSecProducts[index].price}`;
      secProductImage.src = allSecProducts[index].path;
    }
  }

  beforeButton.onclick = () => {
    console.log("before clicked");
    if (i === 0) {
      i = allSecProducts.length - 1;
    } else {
      i--;
    }
    displayProducts(i);
  };

  afterButton.addEventListener("click", () => {
    if (i === allSecProducts.length - 1) {
      i = 0;
    } else {
      i++;
    }
    displayProducts(i);
  });
  addToCart.onclick = () => {
    cart.push(allSecProducts[i]);
  };
  function createStar() {
    const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "m21.5 9.757-5.278 4.354 1.649 7.389L12 17.278 6.129 21.5l1.649-7.389L2.5 9.757l6.333-.924L12 2.5l3.167 6.333z"
    );
    star.append(path);
    star.setAttribute("viewBox", "0 0 24 24");
    star.classList.add("star");
    return star;
  }
  function addRating(r) {
    reviewerRating.innerHTML = "";
    let x = 0;
    const rating = allReviews[r].rating;

    for (x; x < rating; x++) {
      const star = createStar();
      reviewerRating.append(star);
    }
  }
  function displayReviews(r) {
    if (r < 0 || r >= allReviews.length) {
      console.error("Index out of bounds");
      return;
    } else {
      addRating(r);
      reviewerName.textContent = allReviews[r].name;
      reviewerOpinion.textContent = `"${allReviews[r].opinion}"`;
      reviewerPicture.src = allReviews[r].path;
    }
  }
  function addAnimation(element, className) {
    element.classList.remove(className);
    setTimeout(() => {
      element.classList.add(className);
    }, 20);
    element.addEventListener(
      "animationend",
      () => {
        reviewsContainer.classList.remove(className);
      },
      { once: true }
    );
  }
  revBefore.onclick = () => {
    if (r === 0) {
      r = allReviews.length - 1;
    } else {
      r--;
    }
    addAnimation(reviewsContainer, "review-animate");
    displayReviews(r);
  };

  revAfter.addEventListener("click", () => {
    if (r === allReviews.length - 1) {
      r = 0;
    } else {
      r++;
    }

    addAnimation(reviewsContainer, "review-animate");
    displayReviews(r);
  });
  runOnload();
});
