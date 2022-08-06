import { DataApi } from "src/Services/DataFetching"

import SentimentChart from '../Components/SentimentChart/SentimentChart'
import React from "react"
import { ITranscriptData } from "src/Services/types";

const Dev = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const sectionLength = 175
    const config = {transcript:null, baseUrl, sectionLength}
    const dataApi = new DataApi(config)
    const [transcriptData, setTranscriptData] = React.useState<ITranscriptData | {}>({});

    React.useEffect(() => {
        dataApi.fetchAll('nexoya daily standup 2022-03-17').then(res=>setTranscriptData(res))
    }, [])

    return <SentimentChart transcriptData={transcriptData}/>
}

export default Dev