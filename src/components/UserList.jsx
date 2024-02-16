import { List } from "./List"

export function UserList (props){

    

    return (
<>
<ul className="cont_users">

    {
        props.data.map ((user,index)=> {
            return <List datass={user} key = {index}/>
            
        })
    }
   
</ul>
</>

    )
}