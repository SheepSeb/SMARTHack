<script lang="ts">
    import {createAccount} from '../login'
    import {app} from '../firebase'

    let email = null;
    let password = null;

    const create = () =>{
        createAccount(email,password);
        
    }

</script>


<link rel='icon' type='image/png' href='/favicon.png'>
	<link rel='stylesheet' href='/global.css'>
	<link rel='stylesheet' href='/build/bundle.css'>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100" >
       <div class="row d-flex justify-content-center align-items-center" id="card">
        <div class="col-md-12">
        <h1 class="text-center">User Register</h1>
       <br>
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
                style="padding-left: 2.5rem; padding-right: 2.5rem;" on:click={create}>Register</button>
            </div>
  
          </form>
        </div>
      </div>
    </div>
    </div>
  </section>

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