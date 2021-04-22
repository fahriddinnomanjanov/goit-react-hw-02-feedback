function Statistics({good, neutral, bad, total, posPercentage}) {
    
    
        return (
            <>

                <div>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total: { total }</p>
                   { <p>Positive feedback: {posPercentage}%</p>}
                </div>
            </>
        )
    
}

export default Statistics;