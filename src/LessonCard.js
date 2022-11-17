import React, {useState} from "react";

const showBlock = (state, setState) => {
     setState(!state);
}


export default function Card({ index,theme, type, keyPoints, links, youtubeLink}) {
     const[checked, setChecked] = useState(false),
          [note, setNote] = useState(false),
          [inputValue, setInputValue] = useState(''),
          [showUsefulLinks, setShowUsefulLinks] = useState(false),
          [showKeyPoints, setShowKeyPoints] = useState(false);

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
          <div className='lesson_card'>
               <h3>Lesson {index}</h3>
               <ul className='card_content'>
                    <li className='lesson_theme'><span>Theme:  </span>{theme}</li>
                    <li className='lesson_type'><span>Type of lesson  </span> {type}</li>
                    <li className='lesson_key_points'><span>Key points of lesson  <button className="show_more_btn keypoints_arrow" onClick={() => showBlock(showKeyPoints, setShowKeyPoints)}>+</button></span>
                         <ul className='additionalUl'>
                              {keyPoints && showKeyPoints ? keyPoints.map((theme, index) => <li key={index}>{theme}</li>) : ''}
                         </ul>
                    </li>
                    <li className='lesson_links'>
                         <span>Useful links: <button className="show_more_btn links_arrow"
                              onClick={() => showBlock(showUsefulLinks, setShowUsefulLinks)}> + </button></span>
                         <ul className='additionalUl'>
                              {links && showUsefulLinks ? links.map((link, index) => <li key={index}>{<a href={link[1]}>{link[0]}</a>}</li>) : ''}
                         </ul>
                    </li>
                    <li className='lesson_youtube_link'><span>Youtube link:  </span> <a href={youtubeLink}>{youtubeLink}</a></li>
                    <li className='lesson_checkbox'>
                         <label>
                              <span>Completed</span>
                              <input type={'checkbox'}
                                   checked={checked}
                                   onChange={() => handleChange()}></input>
                         </label>
                    </li>
                    {note ? <li className='lesson_additional_info'><span>Note:</span>{note} <span className="clear_btn" title="clear note" onClick={()=>handleNoteClick()}>×</span></li> : ''}
                    <li className='lesson_input'>
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
