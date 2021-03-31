import React, { Component } from 'react'

export default class Postform extends Component {

    constructor(props){
        super(props);
        this.state= {
            title: '',
            body:''
        }
       this.onChange = this.onChange.bind(this);
       this.onSubmit = this.onSubmit.bind(this);

    }
    onChange=(e)=>{
        //console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
        
        })
    }
    onSubmit=(e) =>{
        e.preventDefault();
        const post ={
            title: this.state.title,
            body: this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: "POST",
            headers: {
                'content-type':'application/json' 
            },
            body: JSON.stringify(post)
        }).then(res=> res.json())
        .then(res=> console.log(res))
        .catch(err=>console.log(err));
    }


    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br/>
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>             
                    </div>
                    <br/>
                    <div>
                        <label>Body: </label><br/>
                        <textarea name="body" value={this.state.body} onChange={this.onChange} />             
                    </div>
                    <br/>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}