<script lang="ts">
    import { AppBar, Button, Icon, MaterialApp, Card, Dialog,CardTitle, Row, Col,  } from 'svelte-materialify';
    import {loginned,logginWithEmail} from '../login'
    import {app} from '../firebase'
    import Register from "./register.svelte";

    let active1;

    let email = null;
    let password = null;

    const logsGoogle = () =>{
        loginned()
    }

    const logsEmail = () =>{
      logginWithEmail(email,password);
    }
</script>
<MaterialApp>
<link rel='icon' type='image/png' href='/favicon.png'>
	<link rel='stylesheet' href='/global.css'>
	<link rel='stylesheet' href='/build/bundle.css'>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100" >
       <div class="row d-flex justify-content-center align-items-center" id="card">
        <h1 class="text-center p-5">User login</h1>
        <div class="col-md-12 col-lg-6 col-xl-4 offset-xl-1">
        
        <div class="container">
          <form>
            <!-- Email input -->
            <div class="form-outline mb-4">
            <label class="form-label" for="form3Example3">Email address</label>
              <input type="email" id="inputEmail" class="form-control form-control-lg"
                placeholder="Enter email address" bind:value={email} />
              
            </div>
  
            <!-- Password input -->
            <div class="form-outline mb-3">
             <label class="form-label" for="form3Example4">Password</label>
              <input type="password" id="inputPassword" class="form-control form-control-lg"
                placeholder="Enter password" bind:value={password} />
             
            </div>
  
            <div class="text-center text-lg-start mt-4 pt-2">
              <button type="button" class="btn btn-outline-primary btn-lg" id="loginBtn"
                style="padding-left: 2.5rem; padding-right: 2.5rem;" on:click={logsEmail}>Login</button>
                <br>
                <br>
              <button type="button" class="btn btn-outline-primary btn-lg" id="loginBtn"
                style="padding-left: 2.5rem; padding-right: 2.5rem;" on:click={logsGoogle}>Login Google</button>
              <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account?</p>
            </div>
            <Button
                  class="link-danger" on:click={() => (active1 = true)}>Register</Button>
          </form>
        </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  <Dialog class="pa-4 text-center" bind:active={active1}>
    <Register />
  </Dialog>
</MaterialApp>



<style>
  #loginBtn {
    border-radius: 100px;
    width: 400px;
    height: 60px;
  }
  
  #inputEmail, #inputPassword {
    width: 400px;
    border-radius: 400px;
    margin-bottom: 20px;
    height: 60px;
  
  }
  img {
  width: 250px;
  height: 250px;
  margin-left: 50px;;
  padding: 20px;;
  }
  
  #userlog {
    font-size: 35px;
  }
  
  
  .divider:after,
  .divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: black;
  }
  .h-custom {
    height: calc(100% - 73px);
  }
  @media (max-width: 450px) {
    .h-custom {
      height: 100%;
      
    }
  }</style>