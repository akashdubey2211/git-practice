// import React from "react"
// // import { useState } from "react"
// // import UserData from "../../../models/UserData"
// // interface Istate{
// //     name : string,
// //     age : number,
// // }
// interface IProps{
//     name : string,
//     age : number,
// }

// const User : React.FC<IProps> = ({name , age}) =>{
//     // const [data, setData] = useState<Istate>({
//     //     user:{
//     //         name:"",
//     //         age : 0,
//     //         male : truesa
//     //     }
//     // })

//     return(
// <div>
//     <h1>
//     user : {name}
//     age : {age}</h1>
// </div>
//     )
// }

// export default User;
import React from 'react';

interface IProps{
    name : string;
    age : number;
    title : string;
}

let User:React.FC<IProps> = ({name , age , title}) => {
    return(
        <React.Fragment>
            <h2>User Component</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    Name : {name}
                </li>
                <li className="list-group-item">
                    Age : {age}
                </li>
                <li className="list-group-item">
                    Title : {title}
                </li>
            </ul>
        </React.Fragment>
    )
};
export default User;