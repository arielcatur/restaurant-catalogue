import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants.length) {
      return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurant</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
    }
    return `
      <h2 class="content-heading">Favorite</h2>
      <div id="restaurants" class="restaurants">
      </div>
      <div class="restaurant__not__found">Tidak ada restaurant untuk ditampilkan</div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
