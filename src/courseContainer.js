import Card from './Card'
import './mainContainer.css'
function CourseContainer(props){
     
        return (
        <div className='container'>
            <div className="main-courses">
            <h1>A broad selection of courses</h1>
            <p>
            Choose from 185,000 online video courses with new additions published
            every month
            </p>
            <div className="course-list">
                <div className="list-items apython">Python</div>
                <div className="list-items aexcel">Excel</div>
                <div className="list-items aweb-dev">Web Development</div>
                <div className="list-items ajavascript">JavaScript</div>
                <div className="list-items adatascience">DataScience</div>
                <div className="list-items aaws-certification">AWS Certification</div>
                <div className="list-items adrawing">Drawing</div>
            </div>
            {/* course cards section */}
            <div className="courses">
                <h2>Expand your career opportunities with Python</h2>
                <div className="courses-header">
                    <p>
                        Take one of Udemy’s range of Python courses and learn how to code
                        using this incredibly useful language. Its simple syntax and
                        readability makes Python perfect for Flask, Django, data science,
                        and machine learning. You’ll learn how to build everything from
                        games to sites to apps. Choose from a range of courses that will
                        appeal to...
                    </p>
                </div>
                <button className="btn">Explore  Python</button>
                <div id="courseCardSection" className="Cards">
                    <Card courseName="learn python from zero to hero" instructor="ibrahim ramadan"
                    imagePath="./images//courses/javascript/1.PNG" imageAlt="python course"
                    price="107" />
                    <Card courseName="learn python from zero to hero" instructor="ibrahim ramadan"
                    imagePath="./images//courses/javascript/1.PNG" imageAlt="python course"
                    price="107" />
                    <Card courseName="learn python from zero to hero" instructor="ibrahim ramadan"
                    imagePath="./images//courses/javascript/1.PNG" imageAlt="python course"
                    price="107" />
                    <Card courseName="learn python from zero to hero" instructor="ibrahim ramadan"
                    imagePath="./images//courses/javascript/1.PNG" imageAlt="python course"
                    price="107" />
                    <Card courseName="learn python from zero to hero" instructor="ibrahim ramadan"
                    imagePath="./images//courses/javascript/1.PNG" imageAlt="python course"
                    price="107" />
                    <Card courseName="learn python from zero to hero" instructor="ibrahim ramadan"
                    imagePath="./images//courses/javascript/1.PNG" imageAlt="python course"
                    price="107" />
                    <Card courseName="learn python from zero to hero" instructor="ibrahim ramadan"
                    imagePath="./images//courses/javascript/1.PNG" imageAlt="python course"
                    price="107" />
                    <Card courseName="learn python from zero to hero" instructor="ibrahim ramadan"
                    imagePath="./images//courses/javascript/1.PNG" imageAlt="python course"
                    price="107" />
                    <Card courseName="learn python from zero to hero" instructor="ibrahim ramadan"
                    imagePath="./images//courses/javascript/1.PNG" imageAlt="python course"
                    price="107" />
                    <Card courseName="learn python from zero to hero" instructor="ibrahim ramadan"
                    imagePath="./images//courses/javascript/1.PNG" imageAlt="python course"
                    price="107" />
                </div>
               
           </div>
        </div>
        </div>
    );
}
export default CourseContainer;