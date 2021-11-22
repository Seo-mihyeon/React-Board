import Customer from './components/Customer';
import './App.css';

const customer = [
  {
  'id' : 1,
  'image' : 'https://placeing.com/64/64/1',
  'name': '홍길동',
  'birthday' : '112233',
  'gender' : '남자',
  'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeing.com/64/64/2',
    'name': '홍길순',
    'birthday' : '112233',
    'gender' : '여자',
    'job' : '대학생'
  },
  {
    'id' : 3,
    'image' : 'https://placeing.com/64/64/3',
    'name': '홍길이',
    'birthday' : '112233',
    'gender' : '남자',
    'job' : '대학생'
  }
]
function App() {
  return (
    <div>
  {
    customer.map( c =>{
      return (
        <div>
          {/*  여러개의 배열의 값을 사용할 경우 key props 를 사용해야한다. */}
          <Customer 
          key= {c.id}
          id = {c.id}
          image = {c.image}
          name = {c.name}
          birthday = {c.birthday}
          gender = {c.gender}
          job ={c.job}
          />
        </div>
      )
    })
  }
    </div>
    
  );
}

export default App;
