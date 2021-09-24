<template>

<div class="my_card">
<div class=" content top">

<h3>Clientes</h3>
   <p class="percentage"><i class="fa fa-arrow-up "></i>7%</p>
      </div>

<div class=" content footer">
    <i class="fa fa-users ico "></i>
    <p class="quantidade">10000</p>


</div>



</div>


</template>

<script>
export default{
  name:'CardsComonent',
  props:{
    type: Int,
  }
}


</script>


<style lang="scss" scoped>
@import '@/assets/scss/_main';

.my_card {
    display: flex ;
    flex-direction: column;
    width: 100%;
    background-color: $purple;
    padding: 15px;
    border-radius: 7px;
    color: #fff;

.content {
    display: flex;
    justify-content: space-between ;
}
.top {
    
    .percentage{
      color:$green;
    }
   
  }
.footer {
    .ico {
      font-size: 40px;
    }
    .quantidade{
      font-size: 30px;
      margin: 0 ;
    }
   
  }
}

</style>




