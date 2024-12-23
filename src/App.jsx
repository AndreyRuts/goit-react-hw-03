import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import { useState, useEffect } from "react";


const feedBackState = {
        good: 0,
        neutral: 0,
        bad: 0
    }
   
const App = () => { 
    const savedData = JSON.parse(localStorage.getItem('data'));


    const [optData, setOptData] = useState(savedData || feedBackState);

    useEffect(() => {
       localStorage.setItem('data', JSON.stringify(optData)) 
    }, [optData]);

    const updateFeedback = feedbackType => {
        setOptData((prev) => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));       
    }

    const totalFeedback = optData.good + optData.neutral + optData.bad;
    const positiveFeedBack = Math.round((optData.good / totalFeedback) * 100);

    const resetFeedBack = () => {
        setOptData(feedBackState)
    }

    return (
        <>
            <Description />
            <Options
                resetFeedBack={resetFeedBack}
                updateFeedback={updateFeedback}
                totalFeedback={totalFeedback} />
            {totalFeedback <= 0 ? <Notification /> : <Feedback
                feedback={optData}
                totalFeedback={totalFeedback}
                positiveFeedBack={positiveFeedBack} />}
        </>
    );
};
export default App;