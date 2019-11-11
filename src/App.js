// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Instagram from '@material-ui/icons/Instagram';
import Search from '@material-ui/icons/Search';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
// import '../App.css';
// import './Main.css';
// import { fontSize } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import axios from 'axios';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';



const styles = theme=> ({
  root: {
    flexGrow: 1,
    //  backgroundColor:'#ECF0F1',
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
dives:{
    // borderRadius: 4,
    // borderWidth: 0.5,
    // borderColor: 'black',

    //  border:'2px solid black',
    height:'100%',width:'40%',marginLeft:'30%',borderRadius:5
},
button: {
    margin: theme.spacing(1),
    borderColor:'#0b3699',borderWidth:2
  },
  formControl: {
    // margin: theme.spacing(1),
    margin:20,
    height:'10%',
    width:'30%',
    float:'left'
  },
});

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            open:true,
            visibles:false,
            search:'',
            url:'',
            html:'',
            followers:'',
following:'',
fName:'',
post:'',
allPost:'',
post_likes:'',
        }
        // this.handleDrawerOpen=this.handleDrawerOpen.bind(this);
        // this.handleDrawerClose=this.handleDrawerClose.bind(this);
        // this.Create=this.Create.bind(this);
    
    }
    

    setUrl(evt){
      this.setState({
        ...this.state,
        url:evt.target.value
      })
    }
// async sendUrl(){
//   alert('aaa')
//   var result = await  fetch(`http://localhost:8000/?url=${this.state.url}`)
 
//     console.log(result,'resulty')
//     this.setState({
//       ...this.state,
//       html:result.data  
//     })
//   // })
// }
sendUrl(){
  axios.get('/',{
    params:{url:this.state.url}
  }).then((response)=>{
    console.log('result',response,'result')
    this.setState({
      ...this.state,
      html:response.data.html,
      followers:response.data.followers,
      following:response.data.following,
      fName:response.data.fName,
      post:response.data.post,
      allPost:response.data.allPost,
      post_likes:response.data.post_likes,
    })
  })
}

    render(){
    const {classes}=this.props;
    console.log(this.state,'state in render')
      return (
    <div className={classes.root} >
      <AppBar position="static" style={{backgroundColor:'#2f3a4c'}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
              <Search />
         <div style={{marginRight:10}}/>     
            <Instagram />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Title Name
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
            value={this.state.url}
            onChange={this.setUrl.bind(this)}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
 <div className='mainDiv'>
       <FormControl className={classes.formControl} variant="outlined">
         <InputLabel 
        //  ref={labelRef} 
        name="search"
         htmlFor="component-outlined">
           Search here ...
         </InputLabel>
         <OutlinedInput
           id="component-outlined"
           value={this.state.url}
        onChange={(e)=>{this.setState({url:e.target.value})}}
/>
<TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      placeholder="Maximum 4 rows"
      value={this.state.html}
      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
    />
     <Button variant="contained" onClick={this.sendUrl.bind(this)} className={classes.button}>
        Default
      </Button>
       </FormControl>


<div style={{height:'80%',width:'70%',float:'right',marginTop:-50}}>
    <div className={classes.dives}>

<div >
{/* <img src={require('../images/person.jpeg')} style={{width:80,height:80,borderRadius:40,marginTop:10}} /> */}
</div>
    <div  >
<p style={{fontWeight:'bold'}}>{this.state.fName}</p>
<p style={{fontWeight:'bold',color:'gray',marginTop:-10}}>Followers : <span>{this.state.followers}</span></p>
<p style={{fontWeight:'bold',color:'gray',marginTop:-10}}>following : <span>{this.state.following}</span></p>
<p style={{fontWeight:'bold',color:'gray',marginTop:-10}}>post : <span>{this.state.post}</span></p>
<p style={{fontWeight:'bold',color:'gray',marginTop:-10}}>allPost : <span>{this.state.allPost}</span></p>
<p style={{fontWeight:'bold',color:'gray',marginTop:-10}}>post_likes : <span>{this.state.post_likes}</span></p>
    </div>
    <Toolbar  className='divessss'>
        <div>
<p style={{fontWeight:'bold'}}>Total Likes</p>
<p style={{fontWeight:'bold',color:'gray',fontSize:14}}>Average : 1.1K</p>
<p style={{fontWeight:'bold',color:'gray',fontSize:14,marginTop:-10}}>Expected : 1.1K</p>
        </div>
        <div>
        <p style={{fontWeight:'bold'}}>Total Comments</p>
        <p style={{fontWeight:'bold',color:'gray',fontSize:14}}>Average : 1.1K</p>
        <p style={{fontWeight:'bold',color:'gray',fontSize:14,marginTop:-10}}>Expected : 1.1K</p>
        </div>
    </Toolbar>

    </div>
</div>

</div>
<div style={{position:'fixed',width:'100%',bottom:'0px',height:60,borderTopWidth:1,borderTopColor:'#2f3a4c',}}>
<Toolbar style={{float:'left',width:'70%'}}>
<div ><Toolbar><h4>total audits:</h4> <p> 9.6M</p></Toolbar> </div>
<div ><Toolbar><h4>24h:</h4> <p>20.1K</p></Toolbar> </div>
<div ><Toolbar><h4>users:</h4> <p>2.3M</p></Toolbar> </div>
{/* <div>24h: 20.1K </div>
<div style={{alignItems:'right'}}>users: 2.3M </div> */}
</Toolbar>
<div style={{float:'right',width:'20%',marginTop:15}}>press • terms & privacy</div>
</div>
    </div>
  );
}
}

export default (withStyles(styles)(App));