import '../css/Post.css';
import { Component } from 'react';


class Post extends Component {
    constructor(props){
        super(props);
        this.state={
            edit : false,
            title : this.props.title,
            detail : this.props.detail,
            writer : this.props.writer,
            postdate : this.props.postdate
        }
    }
    changeTitle = (e) => {
        //console.log(e.target.value);

        this.setState({
            title : e.target.value
        })
    }

    changeDetail = (e) => {
        this.setState({
            detail : e.target.value
        })
    }

    changeWriter = (e) => {
        this.setState({
            writer : e.target.value
        })
    }

    changePostdate = (e) => {
        this.setState({
            postdate : e.target.value
        })
    }

    setUpdate = () => {
        console.log('post update')

        if(this.state.edit === true){
            console.log('true')
            const {no} = this.props
            const {title, detail, writer, postdate} = this.state
            this.props.setUpdate(no, title, detail, writer, postdate);
        }

        this.setState({
            edit : !this.state.edit
        })
    }

    postDelete = () => {
        console.log('post delete')
        const {no} = this.props
        this.props.postDelete(no);
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
                        <button className='btn1' onClick={this.setUpdate}>수정</button>
                        <button className='btn1' onClick={this.postDelete}>삭제</button>
                    </span>
                </div>
            )
        }
        else if(edit === true){
            return(
                <div id='post'>
                    <span>{no}</span>
                    <span><input type='text' defaultValue={title} onChange={this.changeTitle} /></span>
                    <span><textarea type='text' defaultValue={detail} onChange={this.changeDetail} /></span>
                    <span><input type='text' defaultValue={writer} onChange={this.changeWriter} /></span>
                    <span><input type='text' defaultValue={postdate} onChange={this.changePostdate} /></span>
                    <span>
                        <button className='btn1' onClick={this.setUpdate}>저장</button>
                        <button className='btn1' onClick={this.postDelete}>삭제</button>
                    </span>
                </div>
            )
        }
        
    }
    
}

export default Post