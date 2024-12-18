import React from "react"

export  const  RevenueCard = (props) => {
    return <>
    <div  className="grid grid-cols-10 p-2" >
        <div className="bg-blue-500 p-4 rounded shadow-md cols col-span-4 p-1 text-white hover:bg-blue-800">
                <div className="flex gap-3 p-4 "> 
                    <div>
                    Next Payout
                    </div>
                    <div className="pt-1">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg> 
                    </div>
                </div>
                <div className="flex justify-between p-3">
                    <h2 className="text-6xl">
                    ₹{props.revamt}
                    </h2>
                    <div className="flex text-lg p-2 underline">
                        <a href="#">{props.ordernum} orders &gt;   </a> 
                    </div>
                </div>
                <div className="flex justify-between bg-blue-800 p-3 m-0">
                    <div>
                    Next payment date: 

                    </div>
                    <div>
                        {props.timings}
                    </div>
                </div>

        
                
        </div>
    </div>
        

    </>
}