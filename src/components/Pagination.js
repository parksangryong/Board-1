import '../css/Pagination.css';
import { Component } from 'react';

class Pagination extends Component{
    constructor(props){
        super(props);
        this.state = {
            endPage : 1
        }
    }

    pageClick =(page) => {
        //console.log('페이지 클릭!: ' + page);
        
        this.props.setCurrentPage(page);    //App가 넘긴함수
    }

    prev = () => {
        //console.log('page prev');

        //this.props.prev();

        const {currentPage} = this.props

        if(currentPage-1 < 1){
            alert('이동불가!');
            return
        }

        this.props.setCurrentPage(currentPage-1)
    }

    next = () => {
        //console.log('page next');

        // this.props.next();

        const {currentPage, total, postPerPage} = this.props
        const endPage = Math.ceil(total/postPerPage);

        if(currentPage+1 > endPage){
            alert('이동불가!');
            return
        }
        this.props.setCurrentPage(currentPage+1)
    }

    

    render(){
        const {total, postPerPage, currentPage} = this.props;
        // 10, 3
        const endPage = Math.ceil(total/postPerPage);
        //4
        let pageNumber =[]
        for(var i=1; i<=endPage; i++){
            pageNumber.push(i);
        }
        //1 2 3 4
        const result = pageNumber.map(
            (page) => (<span id='page' className={currentPage===page? 'active' : ''} onClick={() => this.pageClick(page)}>{page}</span>))

        
        return(
            <div id='Pagination'>
                <div id='pagebox'>
                    <button onClick={this.prev}>&lt;</button>
                    {result}
                    <button onClick={this.next}>&gt;</button>
                </div>
            </div>
        )
    }
}

export default Pagination