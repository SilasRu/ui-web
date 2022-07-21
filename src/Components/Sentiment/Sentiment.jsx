import React from 'react'
import './Sentiment.css'
import { PieChart } from "react-minimal-pie-chart";

const Sentiment = (props) => {
    const positive = props.sentimentData.filter(i=>i.label === 'POSITIVE')
    const negative = props.sentimentData.filter(i=>i.label === 'NEGATIVE')
    const data = [
        { title: 'Positive', value: positive.length, color: '#89EB89' },
        { title: 'Negative', value: negative.length, color: '#FF8E90' }
    ]
    return (
        <div className='sentiment-pie'>
        <PieChart data={data} lineWidth={50} paddingAngle={2} style={{ height: "12vw" }}/>
        </div>
    )
}

export default Sentiment