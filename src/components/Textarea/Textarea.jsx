import React, { useEffect } from 'react';
import './Textarea.css';

function Textarea({ classNameDivInput, classNameSpan, descriptionTextarea, classNameTextarea, nameTextarea, idTextarea, colsText, rowsText }) {

  useEffect(() => {
    const textareaSelector = document.querySelectorAll('#textareaSelector');
    
    textareaSelector.forEach(element => {
      element.nextElementSibling.onfocus = () => {
        element.className = 'top focus';
        element.parentNode.className = 'focus';
      };
      element.nextElementSibling.onblur = () => {
        element.nextElementSibling.value = element.nextElementSibling.value.trim();
        if (element.nextElementSibling.value.trim().length === 0) {
          element.className = '';
        } else {
          element.className = 'top';
        }
        element.parentNode.className = '';
      }
    });
  }, [classNameSpan]);

  return (
    <div className={`cont-text-area ${classNameDivInput}`}>
      <label>
        <span id='textareaSelector'>{descriptionTextarea}</span>
        <textarea className={classNameTextarea} name={nameTextarea} id={idTextarea} cols={colsText} rows={rowsText}/>
      </label>
    </div>
  );
}

export default Textarea;