<!-- list component, will list all the dogs -->
<template>
  <div v-for="dog in dogList" :key="dog.id">
    <!-- will wrap div in a href attr, on click will redirect to DogDetails view with params id -->
    <router-link :to="{ name: 'DogDetails', params: { id: dog.id }}">
        <div class="dog">
            <div class="thumbnail">
                <img :src="getImageSrc(dog.coverImage)" :alt="dog.coverImage">
            </div>
            <div class="info">
                <h3>{{dog.breed}}</h3>
                <p>{{dog.description}}</p>
            </div>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
    props: ['dogList'],
    methods: {
        getImageSrc(imageSrc){
            return require('../data/dogImages/'+imageSrc);
        }
    }
}
</script>

<style scoped>
    .dog {
        display: flex;
        padding: 20px;
        border-radius: 10px;
        background: white;
        margin: 16px 0;
        transition: all ease 0.2s;
    }
    .dog:hover {
        box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
        transform: scale(1.02);
        transition: all ease 0.2s;
    }
    .thumbnail {
        max-width: 200px;
        max-height: 200px;
        overflow: hidden;
        border-radius: 10px;
    }
    img {
        max-width: 150%;
        max-height: 150%;
    }
    .info {
        vertical-align: text-top;
        margin: 0 40px;
    }
</style>