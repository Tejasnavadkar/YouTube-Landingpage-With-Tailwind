

export function VideoCard (props:any){
    return <div className="p-3">
        <img className="rounded-xl" src={props.image} />
        <div className="grid grid-cols-12">
            <div className="col-span-1 "> 
                <img className="rounded-full h-12 w-12 " src={props.logo}/>
            </div>
            <div className="col-span-11 pl-1">
              <div>{props.title} </div>
              <div className=" text-gray-400 text-base">{props.author}</div>
              <div className=" text-gray-400 text-base">{props.views} | {props.timestamps}</div>
            </div>
            
        </div>
    </div>
}

