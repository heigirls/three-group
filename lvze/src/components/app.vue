<template>
    <div>
        <div>
            <dl v-for='i in data'>
                <dt ><img :src="i.image" /></dt>
                <dd> 
                    <h4>{{i.name}}</h4>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
    export default {
        name:'app',
        data(){
            return {
                data:[]
            }
        },
        beforeCreate(){
            this.$ajax({
                url:'/apis',
                type:'get'
            }).then((data) => {
                console.log(data)
                this.data = data.product_list.products
            })
        }
    }
</script>
<style lang="">
    
</style>