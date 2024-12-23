import style from './Options.module.css';


const Options = ({ updateFeedback, resetFeedBack, totalFeedback }) => {  
    return (
        <>
            <div>
                <ul className={style.btnlist}>
                    <button onClick={()=> updateFeedback('good')}>Good</button>
                    <button onClick={()=> updateFeedback('neutral')}>Neutral</button>
                    <button onClick={()=> updateFeedback('bad')}>Bad</button>
                    {totalFeedback <= 0 ? null: <button onClick={() => resetFeedBack()}>Reset</button>}
                </ul>
            </div>
        </>
    )
    } 

export default Options;
