<template>
  <div class="wrap">
    <dl v-for="(item, index) in datas" :key="index">
      <dt>
        <img :src='item.img' alt="">
      </dt>
      <dd>
        <h3>{{item.name}}</h3>
        <p>{{item.text}}</p>
      </dd>
    </dl>
  </div>
</template>
<script>
export default  {
  data() {
    return {
      datas:null
    }
  },
  beforeCreate() {
    this.Ajax({
      url:"/apis",
          type:"get"
    }).then((data) => {
      this.datas = data
    })
  }
}
</script>
<style>
  dl{
    margin: 0;
    display: flex;
    border-bottom:1px solid #ccc;
    padding:10px 0 ;
  }
  h3,p{
    margin: 0;
    padding: 0;
  }
  h3{
    font-size: 1.02rem;
  }
  p{
    font-size: .8rem;
    color:#f50;
  }
</style>

