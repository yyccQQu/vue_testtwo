<template>
    <div id="thirdParty">
        thirdParty
        {{msg}}
    </div>
</template>

<script>
import storage ,{cookieStorage} from 'services/storage.js'
export default {
  data() {
    return {
      msg: "niupi"
    };
  },
  mounted(){
      this.ceshiStorage()
      

  },
  methods:{
      ceshiStorage(){
          console.log(storage())
          var b = storage().setItem("c",11)
          var a = storage().getItem("c")

          var cookid = cookieStorage().setItem("e",22)
          var f  = cookieStorage().getItem("e")
          
          console.log(a,'bb',f)

      }
  }
};
</script>

<style lang="less" scoped>
</style>
