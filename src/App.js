import './App.css';
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import UserInfoContext from './index';
import SomeChild from './SomeChild';
import useLocalStorage from './useLocalStorage';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

function App() {

  console.log('レンダリング');

  const [count, setCount] = useState(0);
  const [stateText, setStateText] = useState('');
  const userInfoContext = useContext(UserInfoContext)
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer,0)

  const handleClick = () => {
    setCount(count + 1);
  };

  const stateInputChange = (event) => {
    setStateText(event.target.value);
  };

  useEffect(() => {
    console.log('引数のcountが変更されたので発火します。StrictModeの時は2回発火します。これはreactの仕様で本番環境だど1回だけになる。');
  }, [count]);

  const handleRef = () => {
    console.log(ref.current.value);
  };

  //useMemo(memo化 ブラウザのメモリに値を保存すること)
  const [count01,setCount01] = useState(0);
  const [count02,setCount02] = useState(0);

  const square = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    console.log('useMemo');
    return count02 * count02;
  }, [count02]);

  //const square = () => {
  //  let i = 0;
  //  while (i < 2000000000) {
  //    i++;
  //  }
  //  console.log('useMemo');
  //  return count02 * count02;
  //};

  //useCallBack(関数のmemo化)
  const [counter, setCounter] = useState(0);
  const showCount = useCallback(() => {
    alert('これは重い処置です');
  }, [counter]);


  //カスタムフック
  const [age, setAge] = useLocalStorage('age',24);

  return (
    <div className="App">
      <div>
        <h1>useState(状態監視), useElect(発火タイミング)</h1>
        <button onClick={handleClick}>+</button>
        <p>{count}</p>
      </div>
      <hr/>
      <div>
        <h1>useContext</h1>
        <p>{userInfoContext.name}</p>
        <p>{userInfoContext.age}</p>
      </div>
      <hr/>
      <div>
        <h1>useRef</h1>
        <input type="text" ref={ref} />
        <button onClick={handleRef}>UserRef</button>
        <div>
          <p>useStateでinput属性を取得する場合</p>
          <input type="text" value={stateText} onChange={stateInputChange}/>
          {stateText}
        </div>
      </div>
      <hr/>
      <div>
        <h1>useReducer</h1>
        <input type="text"/>
        <p>カウント: {state}</p>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      </div>
      <hr/>
      <div>
        <h1>useMemo</h1>
        <p>カウント1: {count01}</p>
        <p>カウント2: {count02}</p>
        <p>結果: {square}</p>
        {/*<p>結果: {square()}</p>*/}
        <button onClick={() => setCount01(count01 + 1)}>01+</button>
        <button onClick={() => setCount02(count02 + 1)}>02+</button>
      </div>
      <hr/>
      <div>
        <h1>useCallBack</h1>
        <SomeChild showCount={showCount}/>
      </div>
      <hr/>
      <div>
        <h1>カスタムフック</h1>
        <p>{age}</p>
        <button onClick={() => setAge(80)}>年齢をセット</button>
      </div>

    </div>
  );
}

export default App;
