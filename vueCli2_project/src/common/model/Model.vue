<template>
  <div v-if="isShowModel" id="model" @click="handelModel">
    <div class="model" :style='{width:w+"px",height:h+"px"}' @click="handelK">
      <div class="title">{{title}}</div>
      <div class="mes">{{mes}}</div>
      <div class="control">
        <div class="cancel icon" @click="handel('cancel')">{{cancel}}</div>
        <div class="sure icon" @click="handel('sure')">{{sure}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Model",
    data() {
      return {
        w:400,
        h:300,
        title: '我是标题',
        mes: "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊" +
          "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊" +
          "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
        isShowModel: false,
        cancel:'取消',
        sure:'确定'
      }
    },
    methods: {
      handelK(){
        console.log('=========')
        event.stopPropagation()
      },
      handelModel() {
        this.isShowModel = false
      },
      handel(e) {
        if (e === 'sure') {
          this.isShowModel = false
        } else if (e === 'cancel') {
          this.isShowModel = false
        }
      }
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  #model {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(1, 1, 1, .2);
  }

  .model {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 300px;
    /*border: 1px solid grey;*/
    background-color: white;
  }

  .title {
    width: 100%;
    height: 42px;
    line-height: 42px;
    text-align: center;
    font-size: 18px;
    border-bottom: 1px solid grey;
  }

  .mes {
    width: 100%;
    padding: 12px;
    word-wrap: break-word;
  }

  .control {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 36px;
    line-height: 36px;
    border-top: 1px solid grey;
  }

  .icon {
    flex: 1;
    text-align: center;
  }

  .sure {
    border-left: .5px solid grey;
  }

  .cancel {
    border-right: .5px solid grey;
  }
</style>
