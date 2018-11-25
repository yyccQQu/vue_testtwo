<style>
.loading {
  background: #ff6100;
  height: 5px;
  position: fixed;
  top: 0;
  z-index: 99999;
}
</style>
<template>
    <div class="loading"></div>
</template>

<script>
export default {
  name: "progresser",
  mounted() {
    this.redo();
  },
  methods: {
    redo() {
      $(".loading").animate({ width: "10%" }, 150);
      $(".loading").animate({ width: "50%" }, 150);
      $(".loading").animate({ width: "70%" }, 150);
      $(".loading").animate({ width: "100%" }, 150);
      $(function() {
        $(".loading").fadeOut();
      });
    }
  }
};
</script>