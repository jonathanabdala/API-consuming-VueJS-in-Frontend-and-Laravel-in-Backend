<template>
<div class="main">
<div class="login">
<div class="content-login">
<header>
    <div>

 <p>Login do nosso Sistema</p>

    </div>
  
</header>

    <div class="form">
     <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">E-mail</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Senha</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary"@click.prevent="login">Entrar</button>
  </form>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
    name: 'LoginComponent',

    data(){
      return{

      }
    },
      methods:{
        login(){
          this.$router.push({name: 'home'});
        }
      }  
    }
</script>

<style lang="scss" src="./style.scss" scoped />


