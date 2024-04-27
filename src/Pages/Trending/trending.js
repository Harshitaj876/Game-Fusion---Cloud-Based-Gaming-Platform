import React from 'react'
import '../Trending/trending.css'
import news1 from '../../Assets/news1.png'
import news2 from '../../Assets/news2.jpg'
import news3 from '../../Assets/news3.jpg'
import news4 from '../../Assets/news4.jpg'
import news5 from '../../Assets/news5.jpg'
import news6 from '../../Assets/news6.png'

const trending = () => {

  const handleClick = (link) => {
    window.open(link, '_blank'); 
  };


  return (
    <div className='wholet'>
      <h1>Latest Trending News</h1>
      <div className='scrolldiv'>
      <div className='newsBlock'>
        <img src={news1} alt=''></img>
        <div className='newstitles'> 
          <h2>WWE 2K24 video game is trending after shocking development. Details here</h2>
          <h3>WWE 2K24 video game, which has been launched very recently, has already found its place in the top ranking gaming shelves for some time, after being developed by 2K Games. The game allows players to explore countless creative aspects along with creating custom wrestlers, arenas and some handy in-game content creation tools, according to a Dexerto report.</h3>
          <h4 onClick={()=>handleClick('https://economictimes.indiatimes.com/news/international/us/wwe-2k24-video-game-is-trending-after-shocking-development-details-here/articleshow/109569608.cms')}>Read more</h4>
        </div>
        
        </div>

        <div className='newsBlock'>
        <img src={news2} alt=''></img>
        <div className='newstitles'> 
          <h2>Best game consoles for gaming fun and entertainment</h2>
          <h3>Looking for the ideal gaming console for your children opens up a world of possibilities. In this article, we present you with options tailored to suit the unique needs and interests of young gamers. From consoles brimming with family-friendly titles to those emphasizing interactive learning experiences, we present a diverse selection designed to captivate and entertain kids of all ages.</h3>
          <h4 onClick={()=>handleClick('https://economictimes.indiatimes.com/top-trending-products/gaming-consoles/gaming/best-gaming-consoles-for-immersive-gaming-experience-at-best-price/articleshow/109481553.cms')}>Read more</h4>
        </div>
        
        </div>

        <div className='newsBlock'>
        <img src={news3} alt=''></img>
        <div className='newstitles'> 
          <h2>GTA 6 release date, characters, gameplay, trailer, all you need to know</h2>
          <h3>GTA 6 marks the return of Rockstar Games into the gamers forum with a bang after a tumultuous success of its predecessor, GTA V. There has been no shortage of rumors and leaks around this upcoming mega gaming experience.</h3>
          <h4 onClick={()=>handleClick('https://economictimes.indiatimes.com/news/international/us/gta-6-release-date-characters-gameplay-trailer-all-you-need-to-know/articleshow/109356124.cms')}>Read more</h4>
        </div>
        </div>

        <div className='newsBlock'>
        <img src={news4} alt=''></img>
        <div className='newstitles'> 
          <h2>PlayStation 5, Xbox X/S, PC offers new video game this week. Details here</h2>
          <h3>PlayStation 5, Xbox X/S and PC gamers have a good news as there will be a new video game.</h3>
          <h4 onClick={()=>handleClick('https://economictimes.indiatimes.com/news/international/us/playstation-5-xbox-x/s-pc-offers-new-video-this-week-details-here/articleshow/109277097.cms')}>Read more</h4>
        </div>
        </div>

        <div className='newsBlock'>
        <img src={news5} alt=''></img>
        <div className='newstitles'> 
          <h2>Wuthering Waves release date, download, requirements, platforms availability, compatibility, all you need to know</h2>
          <h3>Wuthering Waves, open world 3d action game set to launch soon this year is currently the talk of the town due to the high expectations from gamers around this game set in a post apocalyptic world.</h3>
          <h4 onClick={()=>handleClick('https://economictimes.indiatimes.com/news/international/us/wuthering-waves-release-date-download-requirements-platforms-availability-compatibility-all-you-need-to-know/articleshow/108984581.cms')}>Read more</h4>
        </div>
        </div>

        <div className='newsBlock'>
        <img src={news6} alt=''></img>
        <div className='newstitles'> 
          <h2>Take-Two Interactive to acquire Borderlands maker Gearbox for $460 million</h2>
          <h3>The Swedish group is selling the game developer for a steep discount, having bought it in a deal that valued the business at up to $1.4 billion in 2021.
28 Mar, 2024, 10:41 AM IST</h3>
          <h4 onClick={()=>handleClick('https://economictimes.indiatimes.com/tech/startups/take-two-interactive-to-acquire-borderlands-maker-gearbox-for-460-million/articleshow/108838316.cms')}>Read more</h4>
        </div>
        </div>
      </div>
    </div>
  )
}

export default trending