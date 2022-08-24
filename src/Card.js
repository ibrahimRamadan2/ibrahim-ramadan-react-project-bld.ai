import './Card.css';
function Card (props){
   
 
    return (
        <div className="course-card">
            <div className="course-img-div">
              <img
                className="course-img"
                src={props.imagePath}
                alt={props.imageAlt}
              />
            </div>

            <div className="text-div">
              <h3>{props.courseName}</h3>
              <p className="author-name">{props.instructor}</p>
              <div className="rate">
                  <p className="rate-precent">{4.6}</p>
                  <i className="fa-solid fa-star star-icon"></i>
                  <i className="fa-solid fa-star star-icon"></i>
                  <i className="fa-solid fa-star star-icon"></i>
                  <i className="fa-solid fa-star star-icon"></i>
                  <i className="fa-solid fa-star-half-stroke star-icon"></i>
                  <p className="student-num">(234)</p>
               </div>
              <p className="Price">E£{props.price}</p>
            </div>
            <div className="best-seller">
                <p>Bestseller</p>
            </div>
         
          </div>  
        
    ) ; 
}
export default Card;