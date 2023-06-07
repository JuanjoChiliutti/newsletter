import '../styles/Success.css'


const Success = (props) => {
    
    const handleClick = (e) => {
        e.preventDefault()
        props.setDismiss(true)
    }
 
    return (
    <div className='contenedor-success'>
        <div className='tilde'>
            <img src="../assets/images/icon-list.svg" alt="" />
        </div>
        <div>
            <p className='thanks-text'>Thanks for subscribing!</p>
            <p className='thanks-text-desc'>A confirmation email has been sent to <span className='email-input'>{props.mail}</span>. Please open it and click the button inside to confirm your subscription</p>
        </div>
        <div className='button-d'>
            <button className='btn-dismiss' onClick={handleClick}>Dismiss message</button>
        </div>
    </div>
  )
}

export default Success
