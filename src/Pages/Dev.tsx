import { DataApi } from "src/Services/DataFetching"

import React from "react"

const Dev = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const sectionLength = 175
    const config = {transcript:null, baseUrl, sectionLength}
    const dataApi = new DataApi(config)
    
    React.useEffect(() => {
        // dataApi.fetchEntities().then(res=>console.log(res))
        dataApi.importTranscript('nexoya daily standup 2022-03-17').then(() => {
            dataApi.fetchEntities().then(res=>console.log(res))
        })
    })
    return <div>
        <h1>DEV</h1>
    </div>
}

export default Dev