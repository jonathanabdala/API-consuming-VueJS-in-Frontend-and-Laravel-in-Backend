<template>
 <div class="lists">
 <div class="top">
 <p><strong>Clientes</strong></p>
</div>

 <div class="content">
 <!--  Using the most basic table markup, here’s how .table-based tables look in Bootstrap.-->
 <table class="table my_table">
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
  <!-- Implementação do Laço de Repetição do Vue.js, utilizando o v-for , que ira percorrer uma por uma. -->
  <!-- users é a variavel que estão a lista com os dez usuários -->
    <tr v-for="user in users" :key="user.id">
    <!-- Toda vez que houver uma iteração tera uma chave(Key)única -->
      <th scope="row"><p class="users">{{user.id}}</p></th>
      <!-- Exibir a propriedade do usuário com {{user.id}} -->
      <td><p class="users">{{user.name}}</p></td>
  <!-- Exibir a propriedade do nome do usuário com {{user.name}} -->
      <td><p class="users">{{user.email}}</p>}</td>
  <!-- Exibir a propriedade do e-mail deste usuário com {{user.email}} -->
      <td<p class="users">{{user.phone}}</p></td>
  <!-- Exibir a propriedade do phone do  usuário com {{user.phone}} -->
    </tr>
     </tbody>
</table>
 </div>
 
 </div>
 
 
 </div>
</template>


<script>
export default {
 name: 'ListsComponent',
 props:{
     users: Array,
 }
}


</script>



<style lang="scss" scoped>
 .lists{
width:100%;
padding:20px;
border: 1px solid #ccc;
border-radius: 3px;
background-color:#fff;

.users{
    font-size: 12px;
}
 }



</style>