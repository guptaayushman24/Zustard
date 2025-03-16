'use client'
import { useStore } from "../store/useStore"
export default function(){
    const {fname,lname} = useStore();
    console.log(fname);
    console.log(lname);
    return(
        <div>
           First Name is : {fname}
           Last Name is : {lname}
        </div>
    )
}