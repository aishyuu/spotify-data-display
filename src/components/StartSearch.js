export default function StartSearch() {
    return(
        <div className="pt-10">
            <img 
                className="w-60 m-auto"
                src={'./images/Spotify_Logo.png'}
                alt="Spotify Logo"
            />
            <div className="text-center pt-5">
                <h2 className="font-bold text-lg">User ID</h2>
                <form className="">
                        <input 
                            type="text" 
                            size={40} 
                            className="rounded-lg p-1"
                        />
                </form>
            </div>
        </div>
    )
}