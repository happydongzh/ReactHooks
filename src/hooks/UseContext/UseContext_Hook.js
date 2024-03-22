import MyContextProvider from "./MyContext";
import UserInfo from "./UserInfo";


export default function UseContext_Hook() {
    return <MyContextProvider >
        <UserInfo />
    </MyContextProvider>;
}