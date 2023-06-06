import React from 'react'
import up from '../../assets/up.png'
import down from '../../assets/down.png'

const Card = (props) => {
  return(

    <div {...props} >
                <div class="card w-60 mx-auto mb-5">
                  <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                  
                    <p class="card-text mt-5">
                      Référence
                    </p>
                    <p>{props.reference}</p>
                   <div className="row mt-5">
                    <div className="col" style={{textAlign:'center'}}><p className="up">+{props.conforme}%</p><img src={up} width="50%" /></div>
                    <div className="col" style={{textAlign:'center'}}><p className="down">-{props.nonConforme}%</p><img src={down} width="50%"/></div>
                   </div>
                  </div>
                </div>
              </div>

  )
}

export default Card;