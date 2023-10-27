<template>
  <div class="wrapper">
    <h3>{{ item.title }}</h3>
    <div>
      <nuxt-img class="img" :src="String(item.thumbnail)" />
    </div>
    <div>
      <table>
        <tbody>
          <tr
            v-for="(name, index) in Object.values(tableStructure)"
            :key="index"
            :class="index % 2 !== 0 ? 'grey' : null"
          >
            <th style="padding-right: 20px">{{ name }}</th>
            <th>{{ item[`${name}`] }}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const tableStructure = {
  brand: 'brand',
  category: 'category',
  description: 'description',
  discountPercentage: 'discountPercentage',
  price: 'price',
  rating: 'rating',
  stock: 'stock',
};
</script>

<style lang="scss" scoped>
.img {
  width: 300px;
  height: 250px;
  object-fit: cover;
}

.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  div {
    margin-bottom: 20px;
  }
}
th {
  text-align: left;
}

table {
  border-spacing: 0;
  padding: 15px;
  border: 1px solid orchid;
  border-radius: 10px;
}

.grey {
  background-color: rgb(191, 189, 189);
}
</style>
