import React from 'react';
import { useDispatch } from 'react-redux';
import { addNoteTitle } from '../redux/actions';
import Text from './Text';

const Title = ({ active }) => {
  let dispatch = useDispatch()
  function handlerChange(e) {
    dispatch(addNoteTitle(e.target.value, active.id))
  }
  return (
    <>
      <input placeholder="Title" className="title-input" type="text" value={active.data} onChange={e => handlerChange(e)} />
      <Text active={active}/>
    </>
  )
};

export default Title;