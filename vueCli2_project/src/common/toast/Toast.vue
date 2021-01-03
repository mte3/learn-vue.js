<template>
  <div class="Toast" v-if="showToast" :class="type ">{{mes}}</div>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        showToast:false,
        type:"normal",
        duration:3000,//显示时间
        mes:'消息提示',
      }
    },
  }
</script>
<style scoped>
  .Toast {
    position: fixed;
    left: 50%;
    top: 50%;
    background: rgba(0, 0, 0, .35);
    padding: 10px;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    animation: show-toast .2s;
    color: #fff;
    align-items: center;
  }

 @keyframes show-toast {
   from{
     opacity: 0;
   }
   to{
     opacity: 1;
   }
 }

  @keyframes animate_in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes animate_out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
