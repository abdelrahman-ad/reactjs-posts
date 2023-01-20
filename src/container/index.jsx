import './index.scss'

import React from 'react'


 const Container = ({date,description,iconpicture,name,likeicon,shareicon,commenticon,sorce,children}) => {
  return (
    
    <div className='container'>      
                <div className='icon' > {iconpicture}</div>
                <div className='name' > {name}
                
                <span className='date'>{date}</span>
                
                </div>

        <div classname='describtion'> {children? children : <p>{description}</p>  } </div>
        <img src={sorce} alt="Paris"></img>
        
        <div className='buttons'>
            <span className='like'>{likeicon}</span>
            <span className='comment'>{commenticon}</span>
            <span className='share'>{shareicon}</span>
        </div>
       

    </div>
    

  )
}

export default Container ;
