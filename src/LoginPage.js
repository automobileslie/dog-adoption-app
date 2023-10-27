export default function LoginPage({getAuthorized}) {
    return (
        <div>
            <form>
                <input name="Name" />
                <input name="Email" />
                <button onClick={() => getAuthorized()} type="submit">Login</button>
            </form>
        </div>
    )
}