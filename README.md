# react-hooks
react-hooksの検証用

## useState
***
状態監視を行うhooks
```
const [count, setCount] = useState(0);
```

## useEffect
***
発火タイミングを管理するhooks
```
useEffect(() => {
    console.log('引数のcountが変更されたので発火します。StrictModeの時は2回発火します。これはreactの仕様で本番環境だど1回だけになる。');
 }, [count]);
 
 //第一引数にコールバック関数,第二引数の配列の要素が変更されたら発火する
 //から配列の場合は初回のレンダリング時のみ発火する
```

## useContext
***
コンポーネント間でバケツリレーをしなくてもよくなるhooks

## useRef
***
値を参照するhooks<br>
Ref(reference)参照する<br>
inputタグの中の値を取得する時などに使う。
```
const ref = useRef();

const handleRef = () => {
    console.log(ref.current.value);
};

return (
    <>
        <input type="text" ref={ref} />
        <button onClick={handleRef}>UserRef</button>
    </>
);
```

useStateを使ってinputないの値の参照を行う場合は、
```
const [stateText, setStateText] = useState('');

 const stateInputChange = (event) => {
    setStateText(event.target.value);
 }; 
 
return (
    <input type="text" value={stateText} onChange={stateInputChange}/>
    {stateText}
);
```

使い分けとしてはuseRefは値の参照が簡単だがレンダリングは発生しないため、<br>
画面上の反映ができない。

ので、<br>
・inputの値を画面上へ反映する必要がある場合はuseState,<br>
・画面に値を表示する必要がないばいはuseRef<br>
がよいか?

## useReducer
***
reduxという仕組みをuseReducerを使えば簡単にできるよというもの
使う機会はほぼないっぽいから放置

## useMemo
***
パフォーマンスのチューニングの際に使うことのあるhooks
値をブラウザのメモリに保存んするらしいが
よくわからん

## useCallBack
***
パフォーマンスのチューニングの際に使うことのあるhooks
関数をブラウザのメモリに保存するらしいが
これもよくわからんし

## カスタムフック
***
自分で作るフックスただの関数という認識でいいのか?




