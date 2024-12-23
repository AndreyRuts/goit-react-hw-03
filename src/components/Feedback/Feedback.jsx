import style from './Feedback.module.css'


const Feedback = ({ feedback, totalFeedback, positiveFeedBack }) => { 
    return (
        <div>
            <ul className={style.fblist}>
                <li>Good: {feedback.good}</li>
                <li>Neutral: {feedback.neutral}</li>
                <li>Bad: {feedback.bad}</li>
                <li>Total: {totalFeedback}</li>
                <li>Positive: {positiveFeedBack}%</li>
            </ul>
        </div>
    )
}
export default Feedback;