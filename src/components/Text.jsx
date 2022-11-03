import React from "react";
import { useDispatch } from "react-redux";
import { setText } from "../redux/actions";

function Text({ active }) {
    let dispatch = useDispatch()
    function handlerChange(e) {
        dispatch(setText(active, e.target.value))
    }
    return (
        <textarea className="textarea" placeholder="text" value={active.text} onChange={e => handlerChange(e)}></textarea>
    )
}
export default Text