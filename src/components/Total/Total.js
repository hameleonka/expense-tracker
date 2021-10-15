import './Total.css';

function Total(props) {
  return (
    <div className="total">
      <h2 className='total__title'>Total:</h2>
      <div className='total__amount'>{props.totalAmount}</div>
    </div>
  )
}

export default Total;