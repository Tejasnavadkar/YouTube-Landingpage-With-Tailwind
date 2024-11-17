import SearchBar from "./SearchBar"


const AppBar = () =>{

    return <>

    <div className="flex justify-between mt-2 p-3">
        <div className="inline-flex items-center">YouTube</div>
        <div><SearchBar/></div>
        <div className="inline-flex items-center">Signin</div>
    </div>

    </>
}

export default AppBar