'use client'

//import {ErrorPageProps} from "../../types/note"
interface ErrorPageProps{
    error:Error    
}

const ErrorMessage = ({error}:ErrorPageProps) => {
  return <p style={{color:'red'}}>Could not fetch note details. {error.message}</p>
}

export default ErrorMessage


