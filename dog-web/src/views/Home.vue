<!-- Home page, get the dog data and pass it on to picture list component  -->
<template>
  <div class="home">
    <div v-if="error" class="error">Could not fetch the data</div>
    <div v-if="dogs">
      <PictureList :dogList="dogs"/>
    </div>
  </div>
</template>

<script>
import PictureList from '../components/PictureList.vue'
import db from '../data/db.json'
export default {
  name: 'Home',
  components: { PictureList },
  setup() {
    const dogs = db.dogs;
    return {dogs};
  }
}
</script>
