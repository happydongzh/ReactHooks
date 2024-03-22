
import React, { useContext, useState } from 'react';

const MyContext = React.createContext();
const MyContextUpdater = React.createContext();

const MyContextProvider = ({ children }) => {
    const [ctxData, setCtxData] = useState({ userId: '123', userName: 'liyuanDong' });

    // 也可以把初始化操作放进到useEffect里。
    // useEffect(()=> {
    //     // 初始化state数据 如fetch(url).then();
    // },[]);

    return <MyContext.Provider value={ctxData}>
        <MyContextUpdater.Provider value={setCtxData}>
            {children}
        </MyContextUpdater.Provider>
    </MyContext.Provider>
}

export const useMyContext = () => { return useContext(MyContext) };
export const useMyContextUpdater = () => { return useContext(MyContextUpdater) };

export default MyContextProvider;