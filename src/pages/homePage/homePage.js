 
import Container from "../../components/home/container/Container";
import {useParams} from "react-router-dom" 
 

function HomePage() {
 let {searchStr} = useParams();
 
   if(searchStr === undefined)
      searchStr="";
    
  return (
    <div>
     <Container searchBarValue = {searchStr}/>
    </div>
  );
}

export default HomePage;
