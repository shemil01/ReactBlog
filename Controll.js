
import { Link, useParams } from 'react-router-dom'


const Controll = () => {
  const id = useParams()
  console.log(id)

  return (
    <>    
    <div style={{display:"flex",justifyContent:"center"}}>
      <nav >
        <div >
        <Link to="Createblog" style={{textDecoration:"none" ,fontWeight:'bold'}}  >createblog</Link>
        <Link to="Blogid" style={{textDecoration:"none", fontWeight:'bold'}}>blog id</Link>
        <Link to="Blogs" style={{textDecoration:"none", fontWeight:'bold'}}>Blogs</Link>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Controll