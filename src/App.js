import React, { useState, useEffect } from 'react';
import Card from './LessonCard';
import './App.css';



function useFetchData(link) {
  const [data, setData] = useState();


  useEffect(() => {
    fetch(link)
      .then((response) => {
        return response.json();
      })
      .then((lessons) => {
        setData(lessons);
      });
  }, []);
  
  return data;
}

  const url = 'https://raw.githubusercontent.com/Drag13/react-learning-course-short/master/course.json';

function App() {

  const courseData = useFetchData(url);



  
  

  return (
    <div className="App">
      
      <h1>React for begginers:</h1> 
      <div className='cards_wrapper'>
      {courseData ? courseData.lessons.map((lesson, index) => 
        <Card
          index={index+1}
          theme={lesson.title}
          type={lesson.type}
          keyPoints={lesson.keyPoints}
          links={lesson.links}
          youtubeLink={lesson.youtube}
          />
         
        
      ) : 'Loading...'}
      
      </div>
      </div>
  );
}

export default App;


