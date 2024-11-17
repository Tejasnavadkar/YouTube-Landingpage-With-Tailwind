import { VideoCard } from "./VideoCard"
const TODOS = [
    {
        title: "Mission: Impossible – The Final Reckoning | Teaser Trailer (2025 Movie) - Tom Cruise",
        image: "/photo.jpg",
        logo: "/logo.jpg",
        author: "Paramount Pictures",
        views: "3.72M views",
        timestamps: "5 days ago",
    },
    {
        title: "Mission: Impossible – The Final Reckoning | Teaser Trailer (2025 Movie) - Tom Cruise",
        image: "/photo.jpg",
        logo: "/logo.jpg",
        author: "Paramount Pictures",
        views: "3.72M views",
        timestamps: "5 days ago",
    },
    {
        title: "Mission: Impossible – The Final Reckoning | Teaser Trailer (2025 Movie) - Tom Cruise",
        image: "/photo.jpg",
        logo: "/logo.jpg",
        author: "Paramount Pictures",
        views: "3.72M views",
        timestamps: "5 days ago",
    },
    {
        title: "Mission: Impossible – The Final Reckoning | Teaser Trailer (2025 Movie) - Tom Cruise",
        image: "/photo.jpg",
        logo: "/logo.jpg",
        author: "Paramount Pictures",
        views: "3.72M views",
        timestamps: "5 days ago",
    },
    {
        title: "Mission: Impossible – The Final Reckoning | Teaser Trailer (2025 Movie) - Tom Cruise",
        image: "/photo.jpg",
        logo: "/logo.jpg",
        author: "Paramount Pictures",
        views: "3.72M views",
        timestamps: "5 days ago",
    },
    {
        title: "Mission: Impossible – The Final Reckoning | Teaser Trailer (2025 Movie) - Tom Cruise",
        image: "/photo.jpg",
        logo: "/logo.jpg",
        author: "Paramount Pictures",
        views: "3.72M views",
        timestamps: "5 days ago",
    },
    {
        title: "Mission: Impossible – The Final Reckoning | Teaser Trailer (2025 Movie) - Tom Cruise",
        image: "/photo.jpg",
        logo: "/logo.jpg",
        author: "Paramount Pictures",
        views: "3.72M views",
        timestamps: "5 days ago",
    },
    {
        title: "Mission: Impossible – The Final Reckoning | Teaser Trailer (2025 Movie) - Tom Cruise",
        image: "/photo.jpg",
        logo: "/logo.jpg",
        author: "Paramount Pictures",
        views: "3.72M views",
        timestamps: "5 days ago",
    },
    {
        title: "Mission: Impossible – The Final Reckoning | Teaser Trailer (2025 Movie) - Tom Cruise",
        image: "/photo.jpg",
        logo: "/logo.jpg",
        author: "Paramount Pictures",
        views: "3.72M views",
        timestamps: "5 days ago",
    },
    {
        title: "Mission: Impossible – The Final Reckoning | Teaser Trailer (2025 Movie) - Tom Cruise",
        image: "/photo.jpg",
        logo: "/logo.jpg",
        author: "Paramount Pictures",
        views: "3.72M views",
        timestamps: "5 days ago",
    },
    {
        title: "Mission: Impossible – The Final Reckoning | Teaser Trailer (2025 Movie) - Tom Cruise",
        image: "/photo.jpg",
        logo: "/logo.jpg",
        author: "Paramount Pictures",
        views: "3.72M views",
        timestamps: "5 days ago",
    },
    {
        title: "Mission: Impossible – The Final Reckoning | Teaser Trailer (2025 Movie) - Tom Cruise",
        image: "/photo.jpg",
        logo: "/logo.jpg",
        author: "Paramount Pictures",
        views: "3.72M views",
        timestamps: "5 days ago",
    },
]

function VideoGrid() {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {TODOS.map((elem)=>{
         return <div >
              <VideoCard 
            title={elem.title}
            image={elem.image}
            logo={elem.logo}
            author={elem.author}
            views={elem.views}
            timestamps={elem.timestamps}
            />
          </div>
        })}
    </div>
}

export default VideoGrid