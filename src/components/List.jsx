import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../redux/actions';
import ListItem from './ListItem';
import uniqid from 'uniqid'
const List = ({ loading }) => {
  let dispatch = useDispatch()
  let lists = useSelector(state => {
    return state.notes.notes
  })
  function handlerClick() {
    dispatch(addNote(uniqid()))
  }
  return (
    <ul className="list">
      {
        lists &&
        lists.map(res => {
          return <ListItem key={res.id} id={res.id} data={res.data} />
        })
      }
      <li onClick={() => handlerClick()}>
        <svg height="14px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="14px">
          <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
        </svg>
        Add
      </li>
    </ul>
  );
};

export default List;