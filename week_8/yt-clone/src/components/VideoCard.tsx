
export default function VideoCard(props:any){
    return <div className="pl-4 pr-3">
        <img className="rounded-xl pt-2 " src={props.image} alt="does not exist.." />
        <div className="grid grid-cols-12 pt-3">
            <div className="col-span-3 ">
            <img className="rounded-full w-15 h-20" src={props.image} alt="does not exist..." />
            </div>
            <div className="col-span-9 pl-2 " >
                {props.title}

                <div className="text-gray-600">
                    {props.author}
                </div> 
                <div className="text-gray-600 text-base">
                    {props.views} | {props.timestamp}
                </div>
            </div>
        </div>
    </div>
}