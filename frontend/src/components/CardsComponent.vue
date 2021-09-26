<template>

<div class="my_card">
<div class=" content top">

<h3>{{type}}</h3>
<!-- Renderizar os scripts do Componente sendo passado de forma dinâmica, utilizando as props em export default, definindo o tipo de dado para  type -->
   <p class="percentage"><i class="fa fa-arrow-up "></i>{{percentage}</p>
      </div>

<div class=" content footer">
    <i class='fa ico'{{icon}} > </i>
    <p class="quantidade">{{quantidade}}</p>


</div>



</div>


</template>

<script>
export default{
  name:'CardsComponent',
  props:{
    type: String,
    percentage: String,
    icon: String;
    quantidade: String;
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
    .icon {
      font-size: 40px;
    }
    .quantidade{
      font-size: 30px;
      margin: 0 ;
    }
   
  }
}

</style>




