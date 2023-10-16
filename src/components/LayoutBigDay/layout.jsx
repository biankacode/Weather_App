import './layoutStyle.css'
function LayoutBigDay({temperatura}) {
    return(
        <div className="container_layout">
          <span className='number_text'>{temperatura}</span>
          <span className='text_layout'>°c</span>
          
        </div>
        
    ) 
}
export default LayoutBigDay