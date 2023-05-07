import { ArrowBack } from "@mui/icons-material"
import { Link } from "react-router-dom"

export const ChangeEmail = () =>{
    return (
    <div className='p-4 h-screen w-screen ml:w-full gap-y-4 flex flex-col'>
         <Link to='/settings'>
         <div className="flex items-center ">
            <ArrowBack/> back
         </div>
         </Link>
         <div>
            A link has been sent to your email account, check it to confirm.
            <div>
                <i className="text-blue-400">Resend Link</i>
            </div>
         </div>
    </div>
    )
}