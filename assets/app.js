// JUMBO ANIMATION //
let jumboTl = gsap.timeline();
jumboTl
  .fromTo(
    "#jumbo .transparent-color",
    {
      opacity: 1,
      backgroundColor: "rgb(66, 53, 88)",
    },
    {
      opacity: 0.8,
      duration: 1.2,
    }
  )
  .fromTo(
    ".logo",
    {
      x: -200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
    },
    ">-.5"
  )
  .fromTo(
    ".menu",
    {
      x: 200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
    },
    ">-1"
  )
  .fromTo(
    "#jumbo .titles h1",
    {
      x: 0,
      opacity: 0,
    },
    {
      x: 100,
      opacity: 1,
      duration: 1,
    },
    ">-.3"
  )
  .fromTo(
    "#jumbo .titles h2",
    {
      x: 0,
      opacity: 0,
    },
    {
      x: 135,
      opacity: 1,
      duration: 1,
    },
    ">-.5"
  )
  .fromTo(
    "#jumbo .state",
    {
      x: "100%",
    },
    {
      x: 0,
      duration: 1,
    },
    ">-1"
  )
  .fromTo(
    "#jumbo .store-info",
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    ">-1.8"
  )
  .fromTo(
    "#jumbo .store-info img",
    {
      y: 400,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
    },
    ">-1.5"
  );

// TWO COLLECTION SECTION ANIMATION //

const twoCollectionTl = gsap.timeline();
twoCollectionTl
  .fromTo(
    "#two-collections .col-md-6",
    {
      y: 300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    }
  )
  .fromTo(
    "#two-collections .collection-title",
    {
      y: 300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    }
  );

// TWO COLLECTION SCROLL ANIMATION //

let homeController = new ScrollMagic.Controller();

let twoCScene = new ScrollMagic.Scene({
  triggerElement: "#two-collections",
  triggerHook: 1,
  reverse: false,
  offset: 200,
  duration: 0,
})
  .setTween(twoCollectionTl)
  // .addIndicators()
  .addTo(homeController);

// HEADER ANIMATION //

const headerTl = gsap.timeline();
headerTl
  .fromTo(
    "header",
    {
      backgroundColor: "rgba( 0, 0, 0, 0)",
    },
    {
      backgroundColor: "rgba( 0, 0, 0, 1)",
      duration: 0.5,
    }
  )
  .fromTo(
    "header .logo",
    {
      scale: 1,
    },
    {
      scale: 0.8,
      duration: 0.4,
    },
    ">-.4"
  );

let headerScene = new ScrollMagic.Scene({
  triggerElement: "#jumbo",
  triggerHook: 1,
  reverse: true,
  offset: document.querySelector("#jumbo").offsetHeight + 100,
  duration: 0,
})
  .setTween(headerTl)
  // .addIndicators()
  .addTo(homeController);

// HORIZONTAL SALE ANIMATION //

const horizontalTl = gsap.timeline();
horizontalTl
  .fromTo(
    "#horizontal-img",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  )
  .fromTo(
    "#horizontal-img .percent-number",
    {
      scale: 0,
    },
    {
      scale: 1,
      duration: 1,
    }
  )
  .fromTo(
    "#horizontal-img .title",
    {
      scale: 0,
    },
    {
      scale: 1,
    },
    ">-1"
  );

let horizontalScene = new ScrollMagic.Scene({
  triggerElement: "#horizontal-img",
  triggerHook: 1,
  reverse: true,
  offset: 150,
  duration: 0,
})
  .setTween(horizontalTl)
  // .addIndicators()
  .addTo(homeController);

// TOP PRODUCTS ANIMATION //

const productsGroupTl = gsap.timeline();
productsGroupTl.fromTo(
  "#products-group .product-bg",
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    y: 0,
    stagger: 0.25,
    duration: 0.3,
  }
);

let productsGroupScene = new ScrollMagic.Scene({
  triggerElement: "#products-group",
  triggerHook: 1,
  reverse: false,
  offset: 200,
  duration: 0,
})
  .setTween(productsGroupTl)
  // .addIndicators()
  .addTo(homeController);

// FOOTER ANIMATION //

const footerTl = gsap.timeline();
footerTl.fromTo(
  "footer .footer-fade-in",
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    y: 0,
    stagger: 0.25,
    duration: 0.5,
  }
);

let footerScene = new ScrollMagic.Scene({
  triggerElement: "footer",
  triggerHook: 1,
  reverse: false,
  offset: 0,
  duration: 0,
})
  .setTween(footerTl)
  // .addIndicators()
  .addTo(homeController);
