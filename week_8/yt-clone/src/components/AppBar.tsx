import { SearchBar } from "./SearchBar"

export default function AppBar(){


    return <div className="flex justify-between p-2">
        <div> profile</div>
        <div><SearchBar/></div>
        <div>settings</div>

    </div>
}