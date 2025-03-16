import {create} from 'zustand'
interface AppState{
    fname:string,
    setfname:(fname:string)=>void
    lname:string
    setlname:(lname:string)=>void
}

export const useStore = create<AppState>((set)=>({
    fname:'',
    setfname:(fname=>set({fname:fname})),
    lname:'',
    setlname:(lname=>set({lname:lname}))
}))