import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>From</h3>
    <p>${restaurant.city}, ${restaurant.address}</p>
    </div>
  <div class="restaurant__menu">
    <h3>Foods Menu</h3>
    ${restaurant.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
    <h3>Drinks Menu</h3>
    ${restaurant.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
  </div> 
  <div class="restaurant__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
    <br>
  </div>
  <div class="restaurant__review">
    ${restaurant.customerReviews.reduce(
    (show, value) => show.concat(`
          <p><b>${value.name}</b></p>
          <p>${value.review}</p>
          <p>${value.date}</p> <br>`),
    '<h3>Customer Reviews:</h3>',
  )}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
           data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__detail"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
