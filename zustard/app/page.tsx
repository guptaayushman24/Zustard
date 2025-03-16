'use client'
import Image from "next/image";
import {useStore} from './store/useStore'
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const {  setfname,setlname } = useStore();
  return (
  
    <div>
    <input placeholder="Enter First Name" onChange={(e)=>setfname(e.target.value)}></input>
    <input placeholder="Enter Last Name" onChange={(e)=>setlname(e.target.value)}></input>
    <button onClick={()=>router.push('/showdata')}>Save Data</button>
  </div>

  );
}
