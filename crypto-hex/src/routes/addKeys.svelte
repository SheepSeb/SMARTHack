<script lang="ts">
    import {Radio,TextField, Row, Col, Button, Icon} from 'svelte-materialify';
    import { faPlus } from '@fortawesome/free-solid-svg-icons'
    import { makeReq } from '../getAxios';
    import { passAES } from '../encryptDecrypt';
    let group;

    let password;
    let username;
    let x = 1

    const action = () =>{
        makeReq(x,password,username);
        passAES(username,password);
        x++;
        if(x == 3){
            x = 1;
        }
    }

</script>

<Row>
    <Col class="align-center">
    <TextField  outlined style="padding:20px;"  bind:value={password} >Enter username here</TextField>
      <TextField  outlined style="padding:20px;"  bind:value={username} >Enter password here</TextField>
      <h6 style="margin-left:20px;">Choose the crypting algorithm:</h6>
      <Radio bind:group value={1} style="margin-left:20px;">AES</Radio>
      <Radio bind:group value={2} style="margin-left:20px;">Triple DES</Radio>
      <Radio bind:group value={3} style="margin-left:20px;">RSA</Radio>
      <Radio bind:group value={4} style="margin-left:20px;">ECC</Radio>
    </Col>
</Row>

<Button fab size="default" class="indigo accent-2 white-text" on:click={action}>
    <Icon path={faPlus.icon[4]} viewWidth={faPlus.icon[0]} viewHeight={faPlus.icon[1]} />
</Button>