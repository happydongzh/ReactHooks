import './App.css';
import { useState } from 'react';

import UseState_Hook from './hooks/UseState_Hook';
import UseEffect_Hook from './hooks/UseEffect/UseEffect_Hook';
import UseId_Hook from './hooks/UseId_Hook';
import UseImperativeHandle_Hook from './hooks/UseImperativeHandle_Hook';
import UseContext_Hook from './hooks/UseContext/UseContext_Hook';
import UseMemo_Hook from './hooks/UseMemo_Hook';
import UseCallback_Hook from './hooks/UseCallBack_Hook';
import UseEffect_InitPageData from './hooks/UseEffect/UseEffect_Hook_InitData';
import UseDeferredValue_Hook from './hooks/UseDeferredValue_Hook';
import UseReducer_Hook from './hooks/UseReducer_Hook';
import UseTransition_Hook from './hooks/UseTransition_Hook';
import UseLayoutEffect_Hook from './hooks/UseEffect/UseLayoutEffect_Hook';


function App() {
  const [hook, setHook] = useState(null);

  return (
    <div className="App">
      <div>
        <ul>
          <li> <button onClick={() => setHook(<UseState_Hook />)}>useState</button></li>
          <li>
            <ul>
              <li><button onClick={() => setHook(<UseEffect_Hook />)}>useEffect</button></li>
              <li><button onClick={() => setHook(<UseEffect_InitPageData />)}>useEffect: fetch data</button></li>
              <li><button onClick={() => setHook(<UseLayoutEffect_Hook />)}>useEffect VS useLayoutEffect</button></li>
            </ul>
          </li>
          <li> <button onClick={() => setHook(<UseId_Hook />)}>useId</button></li>
          <li> <button onClick={() => setHook(<UseImperativeHandle_Hook />)}>useImperativeHandle</button></li>
          <li> <button onClick={() => setHook(<UseContext_Hook />)}>useContext</button></li>
          <li> <button onClick={() => setHook(<UseMemo_Hook />)}>useMemo</button></li>
          <li> <button onClick={() => setHook(<UseCallback_Hook />)}>useCallback</button></li>
          <li> <button onClick={() => setHook(<UseDeferredValue_Hook />)}>useDeferredValue</button></li>
          <li> <button onClick={() => setHook(<UseTransition_Hook />)}>UseTransition</button></li>
          <li> <button onClick={() => setHook(<UseReducer_Hook />)}>useReducer</button></li>
        </ul>

      </div>
      <div>{hook}</div>

    </div>
  );
}

export default App;
