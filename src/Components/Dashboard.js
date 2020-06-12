import React,{Component} from 'react';
import {connect} from 'react-redux';
import Tweet from './Tweet';
class Dashboard extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h3 className='center'>Your Timeline</h3>
                <ul className='dashboard-list'>
                    {this.props.tweets.map((id)=>{
                    return  <Tweet key={id} id={id} />
                })}</ul>
            </div>
        )
    }

}

const mapStatetoProps = ({tweets}) =>{
    return{tweets:Object.keys(tweets).sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)}
}

export default connect(mapStatetoProps)(Dashboard);