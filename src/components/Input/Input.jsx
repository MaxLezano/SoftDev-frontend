import React, { useEffect } from 'react';
import './Input.css';

function Input({ classNameDivInput, nameInput, typeInput, idInput, labelText, onChangeInput, onFocusInput, onBlurInput }) {
  
  useEffect(() => {
    const inputSelector = document.querySelectorAll('#inputSelector');
    
    inputSelector.forEach(element => {
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
  }, []);

  return (
    <div className={`cont-input ${classNameDivInput}`}>
      <label>
        <span id='inputSelector'>{labelText}</span>
        <input type={typeInput} name={nameInput} id={idInput} onChange={onChangeInput} onFocus={onFocusInput} onBlur={onBlurInput} />
      </label>
    </div>
  );
}

export default Input;