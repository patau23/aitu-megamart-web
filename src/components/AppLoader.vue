<template>
  <div>
    <v-dialog persistent :value="true" width="100px" overlay-opacity="0.8">
      <v-card height="100px" class="loader" :dark="true">
        <v-progress-circular
          indeterminate
          size="56"
          color="primary"
        ></v-progress-circular>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
