  <script>
  </script>

  <template>
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>

    <h1>Food</h1>
    <comment-form/>
    <comment/>
    <country/>
    <personal-profile/> <br>
    <food-item/> <br>
    <food-item2/> <br>
    <food-item/> <br>
    <food-item2/> <br>
  </template>