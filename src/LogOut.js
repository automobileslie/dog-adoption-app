export default function LogOut({logout}) {
    return (
        <div>
            <button onClick={() => logout()}>Log Out</button>
        </div>
    )
}