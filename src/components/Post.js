import '../css/Post.css';
import { Component } from 'react';


class Post extends Component {
    constructor(props){
        super(props);
        this.state={
            edit : false
        }
    }

    render(){
        const {no, title, detail, writer, postdate} = this.props
        const {edit} = this.state

        if(edit === false){
            return(
                <div id='post'>
                    <span>{no}</span>
                    <span>{title}</span>
                    <span>{detail}</span>
                    <span>{writer}</span>
                    <span>{postdate}</span>
                    <span>
                        <button className='btn1'>수정</button>
                        <button className='btn1'>삭제</button>
                    </span>
                </div>
            )
        }
        else if(edit === true){
            return(
                <div id='post'>
                    <span>{no}</span>
                    <span>{title}</span>
                    <span>{detail}</span>
                    <span>{writer}</span>
                    <span>{postdate}</span>
                    <span>
                        <button className='btn1'>수정</button>
                        <button className='btn1'>삭제</button>
                    </span>
                </div>
            )
        }
        
    }
    
}

export default Post