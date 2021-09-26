<template>

<!-- Este conteúdo da DashboardComponent esta no caminho   <div class="pages">
    <slot name="slot pages"></slot> na pasta DashboardComponent  -->
  
   <DashboardComponent> 
<div slot="slot-pages" class="content-pages">
<header class="title_pages">
   <p>Inicio</p>
</header>
<!-- Tods os componentes estão sendo renderizados de forma dinâmica, apartir da definição feita em CardsComponent/export default -->
<div>
    <div class="row">
        <div class="col-12 col-md-3">
    <CardsComponent :type="'Clientes'" :percentage="'7%'" :icon="'fa-users'" :quantidade="'1000'"/>
</div>

 <div class="col-12 col-md-3">
    <CardsComponent :type="'Produtos'" :percentage="'12%'" :icon="'fa-box'" :quantidade="'350'"/>
</div>

 <div class="col-12 col-md-3">
    <CardsComponent :type="'Serviços'" :percentage="'3%'" :icon="'fa-store'" :quantidade="'150'"/>
</div>

<div class="col-12 col-md-3">
    <CardsComponent :type="'Relatórios'" :percentage="'25%'" :icon="'fa-char-bar'" :quantidade="'50'"/>
</div>

  <div class="col-12 col-md-3">
    
            </div>
        </div>
    </div>
<div>
<div class="mt-5">
<div class="row">
<div class="col-12 col-md-6">

<ListsComponent/>
        </div>
     </div>
   </div>
 </div>
    </DashboardComponent>
</template>

<script>
import DashboardComponent from '../Dashboard/DashboardComponent';
import CardsComponent from '../../components/CardsComponent';
import ListsComponent form '../../components/ListsComponent'


export default {
    name:'HomeComponent',
    components:{
        DashboardComponent,
        CardsComponent,
        ListsComponent,

        }
     }
    </script>

  <style lang="scss" src="./style.scss" scoped />

    


