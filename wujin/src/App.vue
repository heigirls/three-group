<template>
    <p>{{name}}</p>
</template>

<script>
import axios from 'axios'
export default{
  data(){
    return{
      name:"111"
    }
  },
  created(){
    axios.get('/api').then((res)=>{
      console.log(res)
    })
  }
}
</script>
