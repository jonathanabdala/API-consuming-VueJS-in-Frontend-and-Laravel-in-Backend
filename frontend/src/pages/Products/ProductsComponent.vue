<template>
<!-- Este conteúdo da DashboardComponent esta no caminho   <div class="pages">
    <slot name="slot pages"></slot> na pasta DashboardComponent  -->
   <DashboardComponent> 
<div slot="slot-pages" class="content-pages">
    
    <header class="title_pages">

    <p>Produtos</p>
    
    </header>
       

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

    <style  lang="scss" src="./style.scss"scoped/>

    

