import { defineStore } from 'pinia';

const baseUrl = 'https://dummyjson.com';

export const useBlogStore = defineStore('blog', {
  state: () => {
    return {
      blogs: [],
      mostPopularBlogs: [],
      blog: {},
      foundBlogs: [],
      comments: [],
      page: 0,
      total: 0,
    };
  },
  actions: {
    async fetchBlogs(options) {
      try {
        const { data } = await useAsyncData('blogs', () =>
          $fetch('/posts', {
            method: 'GET',
            baseURL: baseUrl,
            params: {
              limit: options.limit,
              skip: options.skip,
              select: 'title,tags',
            },
          })
        );
        if (data) {
          this.blogs = data.value.posts;
          this.total = data.value.total;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async fetchOneBlog(id) {
      try {
        const { data } = await useAsyncData('blog', () =>
          $fetch(`/posts/${id}`, {
            method: 'GET',
            baseURL: baseUrl,
          })
        );
        if (data) {
          this.blog = data.value;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async fetchMostPopularBlogs() {
      try {
        const { data } = await useAsyncData('blog', () =>
          $fetch(`/posts`, {
            method: 'GET',
            baseURL: baseUrl,
            params: {
              limit: 8,
              select: 'title,tags',
            },
          })
        );
        if (data) {
          this.mostPopularBlogs = data.value.posts;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async fetchBlogComments(id) {
      try {
        const { data } = await useAsyncData('comments', () =>
          $fetch(`/posts/${id}/comments`, {
            method: 'GET',
            baseURL: baseUrl,
          })
        );
        if (data) {
          this.comments = data.value.comments;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async searchBlogs(keyword) {
      try {
        const { data } = await useAsyncData('products', () =>
          $fetch(`/posts/search`, {
            method: 'GET',
            baseURL: baseUrl,
            params: {
              q: keyword,
            },
          })
        );
        if (data) {
          this.foundBlogs = data.value.posts;
        }
      } catch (error) {
        console.log(error);
      }
    },
    resetOneBlog() {
      this.blog = {};
    },
    resetComments() {
      this.comments = [];
    },
  },

  getters: {
    getBlogs: (state) => state.blogs,
    getOneBlog: (state) => state.blog,
    getBlogComments: (state) => state.comments,
    getMostPoularBlogs: (state) => state.mostPopularBlogs,
    getFoundBlogs: (state) => state.foundBlogs,
  },
});
