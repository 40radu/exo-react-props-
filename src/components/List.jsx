export function List (props){


    return (
        <li className="userlist">
            <p className="userlist__name">{props.datass.name}</p>
            <p className="userlist__email">{props.datass.email}</p>
            <p className="userlist__company">{props.datass.company.name}</p>
        </li>
    )
}