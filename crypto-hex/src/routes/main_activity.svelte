<script lang="ts">
    import { AppBar, Button, Icon, MaterialApp, Card, Dialog,CardTitle, Row, Col,  } from 'svelte-materialify';
    import { faUser, faPlus, faCog } from '@fortawesome/free-solid-svg-icons'
    import { userName } from '../store';
    import Keys from "./addKeys.svelte";
    let active1;
    let active2;
</script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<MaterialApp>
  <AppBar class="indigo accent-4 white-text">
    <div slot="icon">
        <Icon path={faUser.icon[4]}
        viewWidth={faUser.icon[0]}
        viewHeight={faUser.icon[1]} />
    </div>
    <span slot="title" style="font-size:2vw;">{$userName}</span>
    <div style="flex-grow:1" />
  </AppBar>

 <div class="text-center">
  <div class="container">
    <Row class="text-center"  noGutters >
      <Col >
        <div class="pa-2"> 
            <div class=".d-flex justify-center text-center">
                <Card >
                  <img src="src/images/key.png" style="height: 120px; width:120px; padding:10px;" class="text-center" alt="background" />
                  <CardTitle class="justify-center">Add a new key</CardTitle>
                  <Row>
                  <Col>
                <Button fab size="default" class="indigo accent-2 white-text" on:click={() => (active1 = true)}>
                    <Icon path={faPlus.icon[4]} viewWidth={faPlus.icon[0]} viewHeight={faPlus.icon[1]} />
                  </Button>
                </Col>
                 </Row>
                </Card>
              </div> 
        </div>
      </Col>
     <Col >
      <div class="pa-2"> 
        <div class=".d-flex justify-center text-center">
            <Card >
              <img src="src/images/padlock.png" style="height: 120px; width:120px; padding:10px;" class="text-center" alt="background" />
              <CardTitle class="justify-center">Add a new key</CardTitle>
              <Row>
              <Col>
            <Button fab size="default" class="indigo accent-2 white-text" on:click={() => (active2 = true)}>
                <Icon path={faPlus.icon[4]} viewWidth={faPlus.icon[0]} viewHeight={faPlus.icon[1]} />
              </Button>
            </Col>
             </Row>
            </Card>
          </div> 
    </div>
    </Col>
    </Row>
  </div>

  <Dialog class="pa-4 text-center" bind:active={active1}>
    <!--FOR EACH HERE-->
    <p>HEre</p>
  </Dialog>

  <Dialog class="pa-4 text-center" bind:active={active2}>
    <Keys />
  </Dialog>

</MaterialApp>