import '../css/PostList.css';
import { Component } from 'react';
import Post from './Post';

class PostList extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const result = this.props.postlist.map((data) => (
            <Post no={data.no} detail={data.detail} title={data.title} key={data.title} writer={data.writer} postdate={data.postdate} />
        ))

        return(
            <div id='PostList'>
                {result}      
            </div>
        )
    }
}

export default PostList