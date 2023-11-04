import React from 'react'

export default function Card(props) {
  return (
    <> 
    <div className="card item" style={{width: "15rem"}} >
  <img src={props.img} className="card-img-top zoom" alt="..."/>
  <div className="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">  {props.Price}</li>  
    <li class="list-group-item">  {props.author}</li>
  </ul>
  <div class="card-footer">
  {props.title}
  </div>

  </div>
</div>
    </>
  )
}
