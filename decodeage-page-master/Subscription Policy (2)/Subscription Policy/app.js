const contentMap = {
  'First Month': {
    imgSrc: 'https://decodeage.com/cdn/shop/files/benefit_of_NAD_-01-2.webp?v=1686893061&width=832',
    discount: '10%',
    tier: 'Welcome Tier',
    description: "New to Decode Age? Get started with a 10% discount and monthly dispatch of your chosen products. We're thrilled you're here!",
  },
  'Second Month': {
    imgSrc: 'https://decodeage.com/cdn/shop/files/energy_1500x750-09.webp?v=1687177317&width=832',
    discount: '12%',
    tier: 'Bronze Tier',
    description: 'Stay on track with your health journey as your chosen products arrive monthly. Enjoy a 12% discount as our token of appreciation for your commitment!',
  },
  'Third Month': {
    imgSrc: 'https://decodeage.com/cdn/shop/files/energy_1500x750-05.webp?v=1687177316&width=832',
    discount: '15%',
    tier: 'Silver Tier',
    description: 'As your health journey continues, we ensure your chosen products reach you every month. And now with a 15% discount. Keep going!',
  },
  'Fourth Month': {
    imgSrc: 'https://decodeage.com/cdn/shop/files/energy_1500x750-11.webp?v=1687177317&width=832',
    discount: '18%',
    tier: 'Gold Tier',
    description: 'Welcome to the Gold Tier! Your favourite products will continue reaching you monthly, now with an increased 18% discount. We cherish your loyalty!',
  },
  'Fifth Month': {
    imgSrc: 'https://decodeage.com/cdn/shop/files/benefit_of_NAD_-09.webp?v=1686892492&width=832',
    discount: '20%',
    tier: 'Platinum Tier',
    description: 'Enjoy uninterrupted monthly dispatch of your chosen products with a 20% discount as you enter the Platinum Tier. Your wellness is our priority!',
  },
  'Sixth Month and Beyond': {
    imgSrc: "https://decodeage.com/cdn/shop/files/Benefits-of-Spermidine.webp?v=1685447284&width=832",
    discount: '25%',
    tier: 'Diamond Tier',
    description: 'Stepping into the Diamond Tier comes with a 25% discount and a consistent supply of your products. Your long-term support means the world to us!',
  },
  'One Year': {
    imgSrc: 'https://decodeage.com/cdn/shop/files/benefit_of_NAD_-07.webp?v=1686892492&width=832',
    discount: '40%',
    tier: 'Elite Tier',
    description: 'Celebrate a year of wellness with Decode Age with a massive discount of <i>40%</i> and steady monthly dispatches.',
  },
  'Above One Year': {
    imgSrc: 'https://decodeage.com/cdn/shop/files/immunity-01.webp?v=1687239610&width=832',
    discount: '25%',
    tier: 'Elite+ Tier',
    description: "For those loyal beyond a year, enjoy a continuous monthly supply of your chosen products with a 25% discount. You're the beacon of longevity!",
  },
};

document.querySelectorAll('.btn').forEach((button, index) => {
  const month = Object.keys(contentMap)[index] || 'default';
  button.setAttribute('data-content', month);
  button.addEventListener('click', function () {
    const contentKey = this.getAttribute('data-content');
    const content = contentMap[contentKey];
    document.querySelector('.hero').innerHTML = `
      <img src="${content.imgSrc}" alt="image" height="240vw">
      <div class="text">
        <h3>${content.discount} Discount</h3>
        <h1>${content.tier}</h1>
        <h4>${content.description}</h4>
      </div>
    `;
  });
});

function showMore() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    btnText.innerHTML = "View more";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "View less";
    moreText.style.display = "inline";
  }
}