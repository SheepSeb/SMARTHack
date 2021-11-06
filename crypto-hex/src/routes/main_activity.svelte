<script>
    import { AppBar, Button, Icon, Menu, ListItem, MaterialApp, Card, CardText, CardActions,CardTitle, CardSubtitle,Divider, Row, Col,  } from 'svelte-materialify';
    import { faAward, faCamera, faUser, faAmbulance, faKey, faPlus, faCog } from '@fortawesome/free-solid-svg-icons';
  
    const alignments = ['start', 'center', 'end'];
   
  </script>
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 

  <MaterialApp>
  <AppBar class="green">
    <div slot="icon">
     
        <Icon path={faUser.icon[4]}
        viewWidth={faUser.icon[0]}
        viewHeight={faUser.icon[1]} />
     
    </div>
    <span slot="title" style="font-size:2vw;">User Name</span>
    <div style="flex-grow:1" />
    <Button outlined class="white-text">Log out</Button>
    
  </AppBar>
  

 <div class="text-center">
  <div class="container">
    <Row class="text-center"  noGutters >
        <Col  md={2}></Col>
      <Col class="ml-auto" md={4} sm={6} >
        <div class="pa-12"> 
            <div class=".d-flex justify-center mt-4 mb-4 text-center">
                <Card style="max-width:450px; padding:10px" >
                  <img src="src/images/key.png" style="height: 120px; width:120px; padding:10px;" class="text-center" alt="background" />
                  
                  <CardTitle class="justify-center">Add a new key</CardTitle>
            
                  <Row>
                    <Col  md={12}>
                        <div class="pa-0"></div>
                        <div class="pa-2">
                <Button fab size="default" class="green white-text">
                    <Icon path={faPlus.icon[4]} viewWidth={faPlus.icon[0]} viewHeight={faPlus.icon[1]} />
                  </Button>
                </div>
                </Col>
                 </Row>
                </Card>
              </div>
              
        </div>
      </Col>
     <Col class="ml-auto" md={4} sm={6}>
        <div class="pa-12 ">
      <div class=".d-md-flex justify-center mt-4 mb-4">
        <Card style="max-width:450px padding:10px;">
          <img src="src/images/padlock.png" style="height: 120px; width:120px; padding:10px;" class="text-center" alt="background" />
          <CardTitle class="justify-center">Manage your keys</CardTitle>
          
          <CardActions>
            <Row>
                <Col md={12}>
                    <div class="pa-0"></div>
                    <div class="pa-2">
            <Button fab size="default" class="green white-text">
                <Icon path={faCog.icon[4]} viewWidth={faCog.icon[0]} viewHeight={faCog.icon[1]} />
              </Button>
            </div>
            </Col>
             </Row>
          
          </CardActions>
         
        </Card>
      </div>
      </div>
    </Col>

      <Col>
        <div class="pa-2"></div>
      </Col>
    </Row>
  </div>



  </div>

  </MaterialApp>