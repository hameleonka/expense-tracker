import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './ExpenseItem.css';

function ExpenseItem(props) {
  const onClickHandler = () => {
    props.onDeleteExpense(props.title);
  }

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
          <span className='expense-item__icon'><FontAwesomeIcon icon={faTrash} onClick={onClickHandler} /></span>
        </div>
      </Card>
    </li>
  )
}
export default ExpenseItem;