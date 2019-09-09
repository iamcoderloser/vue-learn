<template>
  <div class="alert alert-warning alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    {{message}}
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "alert",
  props: ["message"],
  data() {
    return {};
  },
  mounted: function() {
    // debugger;
    // $(".alert").on("closed.bs.alert", function() {
    //   alert("点击小时");
    // });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
