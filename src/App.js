import './App.css';
import { Component } from 'react';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import Header from './components/Header';
import InputComp from './components/InputComp';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      postlist: [
        {no: 10, title: 'title-10', writer: '글쓴이10', postdate : '2023-06-10', detail: '내용10'},
        {no: 9, title: 'title-9', writer: '글쓴이9', postdate : '2023-06-10', detail: '내용9'},
        {no: 8, title: 'title-8', writer: '글쓴이8', postdate : '2023-06-10', detail: '내용8'},
        {no: 7, title: 'title-7', writer: '글쓴이7', postdate : '2023-06-10', detail: '내용7'},
        {no: 6, title: 'title-6', writer: '글쓴이6', postdate : '2023-06-10', detail: '내용6'},
        {no: 5, title: 'title-5', writer: '글쓴이5', postdate : '2023-06-10', detail: '내용5'},
        {no: 4, title: 'title-4', writer: '글쓴이4', postdate : '2023-06-10', detail: '내용4'},
        {no: 3, title: 'title-3', writer: '글쓴이3', postdate : '2023-06-10', detail: '내용3'},
        {no: 2, title: 'title-2', writer: '글쓴이2', postdate : '2023-06-10', detail: '내용2'},
        {no: 1, title: 'title-1', writer: '글쓴이1', postdate : '2023-06-10', detail: '내용1'},
      ],
      postPerPage : 3,
      currentPage : 1
    }
  }

  setCurrentPage = (page) => {
    //console.log('넘어온 페이지: ' + page);  //1, 2, 3, 4
    
    // const pagebtn = document.querySelectorAll("#page");
    // for(var i=0; i<pagebtn.length; i++){
    //     pagebtn[i].classList.remove('active');
    // }
    // pagebtn[page-1].classList.add('active');

    this.setState({
      currentPage : page
    })
  }

  currentPostList = (postlist) => {
    const {postPerPage, currentPage} = this.state

    const startIndex = (currentPage-1)*(postPerPage);
    //0, 3, 6 ...
    const endIndex = postPerPage * currentPage;
    //3, 6, 9 ...
    
    const slideList = postlist.slice(startIndex, endIndex);
    // slice(0,3) slice(3,6) slice(6,9) ...

    return slideList
  }

  // prev = () => {
  //   //console.log('prev App');

  //   const {currentPage} = this.state

  //   if(currentPage === 1){
  //     alert('이동 불가!')
  //     return ;
  //   }
    
  //   const nextCurrent = currentPage -1;

  //   const pagebtn = document.querySelectorAll("#page");
  //   for(var i=0; i<pagebtn.length; i++){
  //       pagebtn[i].classList.remove('active');
  //   }
  //   pagebtn[nextCurrent-1].classList.add('active');

  //   this.setState({
  //     currentPage : nextCurrent
  //   })
  // }

  // next = () => {
  //   //console.log('next App');

  //   const {postlist, currentPage, postPerPage} = this.state
  //   const endPage = Math.ceil(postlist.length/postPerPage);

  //   if(currentPage === endPage ){
  //     alert('이동 불가!')
  //     return ;
  //   }
    
  //   const nextCurrent = currentPage +1;

  //   const pagebtn = document.querySelectorAll("#page");
  //   for(var i=0; i<pagebtn.length; i++){
  //       pagebtn[i].classList.remove('active');
  //   }
  //   pagebtn[nextCurrent-1].classList.add('active');

  //   this.setState({
  //     currentPage : nextCurrent
  //   })
  // }

  addPost = (title, detail, writer, nowdate) => {

    const no = this.state.postlist.length + 1

    const postObj = [{no: no, title : title, detail : detail, writer: writer, postdate: nowdate}]

    const concatList = postObj.concat(this.state.postlist);

    this.setState({
      postlist : concatList
    })
  }

  render(){
    
    const {postlist, postPerPage, currentPage} = this.state

    return(
      <div id='App'>
        <Header />
        <InputComp addPost={this.addPost} />
        <PostList postlist={this.currentPostList(postlist)} />
        <Pagination total={postlist.length} postPerPage={postPerPage}
        setCurrentPage={this.setCurrentPage} currentPage={currentPage}
         />
      </div>
    )
  }
}

export default App;