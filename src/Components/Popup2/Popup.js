import './Popup.css'

import './style.css'

function Popup(props) {

  return (props.trigger) ? (
    <div className="popup">
        
        <div className="popup-inner">
          
            <button onClick={() => props.setTrigger(false)} className="close-btn">Exit</button>
            
            { props.children }
            

    
        </div>

        


    </div>
  ) : "";
}

export default Popup 
