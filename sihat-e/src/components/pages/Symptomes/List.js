import React from "react";


const List = (props, state) => (
  console.log(props),
  (
    <a class="dropdown-item" id={props.index}>
      <div className="list_item_container">
        <div className="label">
          <h4 ref={props.myRef} onClick={props.Click} id="thesearch">
            {props.post}
          </h4>
        </div>
      </div>
    </a>
  )
);

export default List;
