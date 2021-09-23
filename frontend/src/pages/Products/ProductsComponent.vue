<template>
<!-- Este conteúdo da DashboardComponent esta no caminho   <div class="pages">
    <slot name="slot pages"></slot> na pasta DashboardComponent  -->
   <DashboardComponent> 
<div slot="slot-pages" class="content-pages">
    <p>Produtos</p>
</div>
    

   </DashboardComponent>
</template>

<script>
import DashboardComponent from '../Dashboard/DashboardComponent';

export default {
    name:'ProductsComponent'
    components:{
        DashboardComponent,
        }
     }
    </script>

    <style scoped>

    </style>


