import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { CircularProgress } from '@material-ui/core';
import { mergeClasses, withStyles } from '@material-ui/styles';
import { render } from '@testing-library/react';
import { Component } from 'react';

const styles = theme => ({
  root : {
    width : '100%',
    marginTop: 30,
    overflowX : "auto"
  },
  table: {
    minWidth : 1080
  },
  progress : {
    margin: 20
  }
})

/*
  실행 순서
  1) constructor()

  2) componentWillMount()

  3) render()

  4) componentDidMount()

 */
/*
props or state 가 변경시 => shouldComponentUpdate()

 */



// 변경가능 state 변경불가능 props
class App extends Component{

  state = {
    customers : "",
    completed: 0
  }

  // api서버에 접근하여 데이터를 받아오는 작업
  componentDidMount(){
    this.timer = setInterval(this.progress, 20);  //0.02초마다 수행
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers'); // 접속하고자하는 api 주소
    const body = await response.json(); // 목록을 json 형태로 만들어서 넣는다
    return body;
  }

  progress = () =>{
    const {completed} = this.state;
    this.setState({completed : completed >=100 ? 0 : completed + 1});
  }

  render() {
    const { classes }  = this.props;
    return (
      <Paper className={classes.root}>
        <Table classNmae={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map( c => { 
              return ( <Customer key={c.id} id={c.id} image = {c.image} name = {c.name} birthday = {c.birthday} gender = {c.gender} job ={c.job} /> ); 
            }) : 
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
