import { useNavigate } from "react-router-dom"

export function useNavs() {
    let navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        await submitForm(event.target)
        navigate("../success", { replace: true })
    }

    return (
        <form onSubmit={handleSubmit}>
            {navigate("../", { replace: true })}
        </form>
    )
}
