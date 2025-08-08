import { useParams } from "react-router-dom"


export default function UserProfile(){

    const Param = useParams()

return<>
<h1>{Param.Id}</h1>
</>
}