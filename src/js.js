import React, { Component } from 'react'

export class Demoform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             phoneno:"",
             email:"",
             ratings:"",
             comments:"",
             errors:{
              username:"",
              phoneno:"",
              email:"",
              ratings:"",
              comments:"",
             }
        }
    }
    handleChange=(e)=>
{
    let {name,value}=e.target
    let errors={...this.state.errors}
    if(value==="")
    {
        errors[name]="required"
    }
    else
    {
        errors[name]=""
    }
    if(name==="phoneno")
    {
        let pattern =/^[0-9\b]+$/;
        if(pattern.test(value))
        {
            errors.phoneno=""   
        }
        else if(value==="") 
        {
            errors.phoneno="required"
        }
        else 
        {
                errors.phoneno="alphabets not allowed"
        }
    }
    if(name==="email")
    {
        let pattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if(pattern.test(value))
        {
            errors.email=""   
        }
        else if(value==="") 
        {
            errors.email="required"
        }
        else 
        {
                errors.email="enter a valid email"
        }
    }
    this.setState({errors,[name]:value});

};
handlesubmit= (e)=>
{ 
e.preventDefault()
let err= Object.keys(this.state).filter((keys)=>{
   if(this.state[keys]===""&&keys!=="error")
{
   return keys
}
})
if(err.length>=1)
{
   alert("plese fill all the fields")
}
else
{
   console.log(this.state) 
  alert("submitted successfully")
  
}
}
   render() {
      
        return (
            <>
              <h1>controlledforms</h1>
              <div>
              <form  onSubmit={(e)=>this.handlesubmit(e)} >
                      <div>
                          <label> username </label>
                          <input type="text" 
                           name="username"
                            value={this.state.username}
                            onChange={(e)=>{this.handleChange(e)}}
                            ></input><br/>
                            <span style={{color:"red"}}>{this.state.errors.username}</span>
                      </div><br/>
                      <div>
                          <label> phoneno </label>
                          <input type="text" 
                           name="phoneno"
                            value={this.state.phoneno}
                            onChange={(e)=>{this.handleChange(e)}}
                           maxLength="10" ></input><br/>
                        <span style={{color:"red"}}>{this.state.errors.phoneno}</span>
                      </div><br/>
                      <div>
                          <label> Email </label>
                          <input type="text" 
                           name="email"
                            value={this.state.email}
                            onChange={(e)=>{this.handleChange(e)}}
                           ></input><br/>
                            <span style={{color:"red"}}>{this.state.errors.email}</span>
                      </div><br/>
                      <div>
                      <label>  ratings </label>
                      <input type="radio" name="ratings" value="1star"
                            onChange={(e) => this.handleChange(e)}/>1
                      <input type="radio" name="ratings"  value="2star"
                        onChange={(e) => this.handleChange(e)}/>2
                      <input type="radio" name="ratings"  value="3star"
                        onChange={(e) => this.handleChange(e)}/>3
                      <input type="radio" name="ratings"  value="4star"
                         onChange={(e) => this.handleChange(e)}/>4
                      <input type="radio" name="ratings"  value="5star"
                        onChange={(e) => this.handleChange(e)}/>5
                      
                   </div><br></br>
                   <div>
                       <label> comments </label>
                       <textarea name="comments" value={this.state.comments}
                        onChange={(e) => this.handleChange(e)}></textarea>
                        <br/>
                        <span style={{color:"red"}}>{this.state.errors.comments}</span>
                 </div><br></br>
                      
                      <button>submit</button>
                  </form>
              </div>
            </>
        )
    }
}

export default Demoform


import React, { Component } from 'react'

export class Demoform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             phoneno:"",
             email:"",
             ratings:"",
             comments:"",
             errors:{
              username:"",
              phoneno:"",
              email:"",
              ratings:"",
              comments:"",
             }
        }
    }
    handleChange=(e)=>
{
    let {name,value}=e.target
    let errors={...this.state.errors}
    if(value==="")
    {
        errors[name]="required"
    }
    else
    {
        errors[name]=""
    }
    if(name==="phoneno")
    {
        let pattern =/^[0-9\b]+$/;
        if(pattern.test(value))
        {
            errors.phoneno=""   
        }
        else if(value==="") 
        {
            errors.phoneno="required"
        }
        else 
        {
                errors.phoneno="alphabets not allowed"
        }
    }
    if(name==="email")
    {
        let pattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if(pattern.test(value))
        {
            errors.email=""   
        }
        else if(value==="") 
        {
            errors.email="required"
        }
        else 
        {
                errors.email="enter a valid email"
        }
    }
    this.setState({errors,[name]:value});

};
handlesubmit= (e)=>
{ 
e.preventDefault()
let err= Object.keys(this.state).filter((keys)=>{
   if(this.state[keys]===""&&keys!=="error")
{
   return keys
}
})
if(err.length>=1)
{
   alert("plese fill all the fields")
}
else
{
   console.log(this.state) 
  alert("submitted successfully")
  
}
}
   render() {
      
        return (
            <>
              <h1>controlledforms</h1>
              <div>
              <form  onSubmit={(e)=>this.handlesubmit(e)} >
                      <div>
                          <label> username </label>
                          <input type="text" 
                           name="username"
                            value={this.state.username}
                            onChange={(e)=>{this.handleChange(e)}}
                            ></input><br/>
                            <span style={{color:"red"}}>{this.state.errors.username}</span>
                      </div><br/>
                      <div>
                          <label> phoneno </label>
                          <input type="text" 
                           name="phoneno"
                            value={this.state.phoneno}
                            onChange={(e)=>{this.handleChange(e)}}
                           maxLength="10" ></input><br/>
                        <span style={{color:"red"}}>{this.state.errors.phoneno}</span>
                      </div><br/>
                      <div>
                          <label> Email </label>
                          <input type="text" 
                           name="email"
                            value={this.state.email}
                            onChange={(e)=>{this.handleChange(e)}}
                           ></input><br/>
                            <span style={{color:"red"}}>{this.state.errors.email}</span>
                      </div><br/>
                      <div>
                      <label>  ratings </label>
                      <input type="radio" name="ratings" value="1star"
                            onChange={(e) => this.handleChange(e)}/>1
                      <input type="radio" name="ratings"  value="2star"
                        onChange={(e) => this.handleChange(e)}/>2
                      <input type="radio" name="ratings"  value="3star"
                        onChange={(e) => this.handleChange(e)}/>3
                      <input type="radio" name="ratings"  value="4star"
                         onChange={(e) => this.handleChange(e)}/>4
                      <input type="radio" name="ratings"  value="5star"
                        onChange={(e) => this.handleChange(e)}/>5
                      
                   </div><br></br>
                   <div>
                       <label> comments </label>
                       <textarea name="comments" value={this.state.comments}
                        onChange={(e) => this.handleChange(e)}></textarea>
                        <br/>
                        <span style={{color:"red"}}>{this.state.errors.comments}</span>
                 </div><br></br>
                      
                      <button>submit</button>
                  </form>
              </div>
            </>
        )
    }
}

export default Demoform