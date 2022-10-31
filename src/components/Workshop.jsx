import { useParams } from "react-router-dom"


export default function Workshop() {
    const workshopName = useParams();
    return (
        <>
            <h2>Workshop Sessions</h2>
            <p>Workshop session content displays here...</p>
        </>
    );


}
