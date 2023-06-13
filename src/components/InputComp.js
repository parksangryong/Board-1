import '../css/InputComp.css';
import { Component } from 'react';
import dayjs from 'dayjs';

class InputComp extends Component{
    constructor(props){
        super(props);
        this.state={
            title : '',
            detail : '',
            writer : ''
        }
    }

    changeTitle = (e) => {
        //console.log(e.target.value)
        this.setState({
            title : e.target.value
        })
    }
    changeDetail = (e) => {
        //console.log(e.target.value)
        this.setState({
            detail : e.target.value
        })
    }
    changeWriter = (e) => {
        //console.log(e.target.value)
        this.setState({
            writer : e.target.value
        })
    }
    addPost = () => {
        const nowdate = dayjs(new Date()).format('YYYY-MM-DD')

        const {title, detail, writer} = this.state

        this.props.addPost(title, detail, writer, nowdate);

        this.setState({
            title : '',
            detail : '',
            writer : ''
        })
    }

    render(){
        return(
            <div id='InputComp'>
                <div className='title'>
                <span>제목 : </span><input type='text' onChange={this.changeTitle} value={this.state.title} />
                </div>
                <div className='texta'>
                <span>내용 : </span><textarea onChange={this.changeDetail} value={this.state.detail} />
                </div>
                <div className='merge'>
                <span>글쓴이 : </span><input type='text' onChange={this.changeWriter} value={this.state.writer} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>날짜 : </span><input type='text' readOnly defaultValue={dayjs(new Date()).format('YYYY-MM-DD')}  />
                </div>
                <button onClick={this.addPost}>등록</button>
            </div>
        )
    }
}

export default InputComp