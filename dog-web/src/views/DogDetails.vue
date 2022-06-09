<!-- detail view, show detail of the selected dog -->
<template>
  <div v-if="dog" class="dog-details">
    <div class="cover">
        <img :src="getImageSrc(dog.coverImage)">
    </div>
    <div class="dog-info">
        <h2>{{ dog.breed }}</h2>
        <p class="description">{{ dog.description }}</p>
    </div>
  </div>
<div class="loader" v-else></div>
</template>

<script>
import db from '../data/db.json'
export default {
    props: ['id'],
    methods: {
    getImageSrc(imageSrc){
        return require('../data/dogImages/'+imageSrc);
    }
    },
    setup(props) {
      //find the selected dog in db file, would prefer a seperated state manager for this 
        let dog; 
        for (let index = 0; index < db.dogs.length; index++) {
            if(db.dogs[index].id==props.id){
               dog = db.dogs[index];
            }
        }
        return {dog};
    }
}
</script>
<style scoped>
  /* spinner */
  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #db34db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .dog-details {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 80px;
    margin-top: 20px;
  }
  .cover {
    overflow: hidden;
    border-radius: 20px;
    position: relative;
    padding: 160px;
  }
  .cover img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
  .dog-info h2 {
    text-transform: capitalize;
    font-size: 28px;
    margin-top: 20px;
  }
  .dog-info p {
    margin-bottom: 20px;
  }
  .description {
    text-align: left;
  }
</style>