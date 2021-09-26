<template>
 <div class="lists">
 <div class="top">
 <p><strong>Clientes</strong></p>
</div>

 <div class="content">
 <!--  Using the most basic table markup, here’s how .table-based tables look in Bootstrap.-->
 <table class="table">
  <thead>
    <tr>
    <!-- https://jsonplaceholder.typicode.com/users -->
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">E-mail</th>
      <th scope="col">Contato</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
     </tbody>
</table>
 </div>
 
 </div>
 
 
 </div>
</template>


<script>
export default {
 name: 'ListsComponent'
}


</script>



<style lang="scss" scoped>
 .lists{
width:100%;
padding:20px;
border: 1px solid #ccc;
border-radius: 3px;
background-color:#fff;
 }



</style>