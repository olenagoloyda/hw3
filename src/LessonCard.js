import React, {useState} from "react";

const showBlock = (state, setState) => {
     setState(!state);
}


export default function Card({ index,theme, type, keyPoints, links, youtubeLink, homeTask}) {
     const [checked, setChecked] = useState(false),
          [note, setNote] = useState(false),
          [inputValue, setInputValue] = useState(''),
          [showUsefulLinks, setShowUsefulLinks] = useState(false),
          [showHomework, setShowHomework] = useState(false),
          [showKeyPoints, setShowKeyPoints] = useState(false);
     
     const homeWork = homeTask;

     const handleChange = () => {
          setChecked(!checked);
     }

     const handleSubmit = (e) => {
          e.preventDefault();
          setNote(inputValue);
          setInputValue('');
     }

     const handleInputChange = (e) => {
          e.preventDefault();
          setInputValue(e.target.value)
     }

     const handleNoteClick = () => {
          setNote(!note);
     }
     
     return (
          <div className={checked ? 'lesson_card completed_card':'lesson_card'} key={index}>
               <h3>Lesson {index}</h3>
               <ul className='card_content'>
                    <li key={theme+index}><span>Theme:  </span>{theme}</li>
                    <li key={type+index }><span>Type of lesson  </span> {type}</li>
                    <li key ={index+'key'}><span>Key points of lesson {keyPoints ? <button className="show_more_btn keypoints_arrow" onClick={() => showBlock(showKeyPoints, setShowKeyPoints)}>+</button> : ''}</span>
                         <ul className='additionalUl'>
                              {keyPoints && showKeyPoints ? keyPoints.map((theme, index) => <li key={index}>{theme}</li>) : ''}
                         </ul>
                    </li>
                    <li>
                         <span>Useful links: {links ? <button className="show_more_btn links_arrow"
                              onClick={() => showBlock(showUsefulLinks, setShowUsefulLinks)}> + </button> : ''}</span>
                         <ul className='additionalUl'>
                              {links && showUsefulLinks ? links.map((link, index) => <li key={index}>{<a href={link[1]}>{link[0]}</a>}</li>) : ''}
                         </ul>
                    </li>
                    <li key ={index+'youtube'}><span>Youtube link: </span> <a href={youtubeLink} target='__blank'>{youtubeLink}</a></li>
                    <li key ={index+'hometask'}><span>Homework:  {homeTask ? <button className="show_more_btn keypoints_arrow" onClick={() => showBlock(showHomework, setShowHomework)}>+</button> : ''}</span>
                         <ul key ={index+'addui'} className='additionalUl'>
                             {showHomework ? <li dangerouslySetInnerHTML={{__html:homeWork}}></li> : ''}
                    </ul>
                    </li>
                    <li key ={index+'checkbox'} className='lesson_checkbox'>
                         <label>
                              <span>Completed</span>
                              <input type={'checkbox'}
                                   checked={checked}
                                   onChange={() => handleChange()}></input>
                         </label>
                    </li>
                    {note ? <li key ={index+'note'} className='lesson_additional_info'><span>Note:</span>{note} <span className="clear_btn" title="clear note" onClick={()=>handleNoteClick()}>×</span></li> : ''}
                    <li key ={index+'input'} className='lesson_input'>
                         <form onSubmit={handleSubmit}>
                              <input type={'text'}
                                   value={inputValue}
                                   onChange={(e) => handleInputChange(e)} />
                              <input type="submit"
                                   value={note?'Change note':'Add note'}
                              className='submit_btn'/>
                         </form>
                    </li>
               </ul>
          </div>
     );
}
