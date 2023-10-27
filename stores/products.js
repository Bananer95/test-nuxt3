import { defineStore } from 'pinia';

const baseUrl = 'https://dummyjson.com';

export const useProductStore = defineStore('product', {
  state: () => {
    return {
      products: [],
      mostPopularProducts: [],
      product: {},
      searchedProducts: [],
      page: 0,
      total: 0,
    };
  },

  actions: {
    async fetchProducts(options) {
      try {
        const { data } = await useAsyncData('products', () =>
          $fetch('/products', {
            method: 'GET',
            baseURL: baseUrl,
            params: {
              limit: options.limit,
              skip: options.skip,
              select: 'title,price,discountPercentage,raiting,thumbnail',
            },
          })
        );
        if (data) {
          this.products = data.value.products;
          this.total = data.value.total;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async fetchOneProduct(id) {
      try {
        const { data } = await useAsyncData('products', () =>
          $fetch(`/products/${id}`, {
            method: 'GET',
            baseURL: baseUrl,
            params: {},
          })
        );
        if (data) {
          this.product = data.value;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async fetchMostPopularProducts() {
      try {
        const { data } = await useAsyncData('products', () =>
          $fetch(`/products`, {
            method: 'GET',
            baseURL: baseUrl,
            params: {
              limit: 8,
              select: 'title,price,discountPercentage,raiting,thumbnail',
            },
          })
        );
        if (data) {
          this.mostPopularProducts = data.value.products;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async searchProducts(keyword) {
      try {
        const { data } = await useAsyncData('products', () =>
          $fetch(`/products/search`, {
            method: 'GET',
            baseURL: baseUrl,
            params: {
              q: keyword,
            },
          })
        );
        if (data) {
          this.searchedProducts = data.value.products;
        }
      } catch (error) {
        console.log(error);
      }
    },
    resetOneProduct() {
      this.product = {};
    },
  },

  getters: {
    getProducts: (state) => state.products,
    getOneProduct: (state) => state.product,
    getMostPopularProducts: (state) => state.mostPopularProducts,
    getSearchedProduct: (state) => state.searchedProducts,
  },
});
