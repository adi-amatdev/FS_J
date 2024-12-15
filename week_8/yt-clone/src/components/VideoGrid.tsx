
import VideoCard from "./VideoCard"

const VIDEOS = [{
    title:"hello world",
    author:"aaditya",
    views:"100",
    timestamp:"13 days ago",
    image:"https://images.pexels.com/photos/27054260/pexels-photo-27054260/free-photo-of-sky-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
},
{
    title:"hello not world",
    author:"not aaditya",
    views:"-100",
    timestamp:"-13 days ago",
    image:"https://images.pexels.com/photos/27054260/pexels-photo-27054260/free-photo-of-sky-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
},{
    title:"hello world",
    author:"aaditya",
    views:"100",
    timestamp:"13 days ago",
    image:"https://images.pexels.com/photos/27054260/pexels-photo-27054260/free-photo-of-sky-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
},
{
    title:"hello not world",
    author:"not aaditya",
    views:"-100",
    timestamp:"-13 days ago",
    image:"https://images.pexels.com/photos/27054260/pexels-photo-27054260/free-photo-of-sky-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
}

]
export default function VideoGrid(){

    return <div className="grid lg:grid-cols-4 md:grid-cols-2">
        {VIDEOS.map(video => <div>
            <VideoCard 
                title={video.title}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
                image={video.image}
                />
        </div>)}
    </div>


}