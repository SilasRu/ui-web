const COLORS = ['#03045e', '#023e8a', '#0077b6', '#0096c7', '#00b4d8', '#48cae4', '#90e0ef', '#ade8f4', '#caf0f8'];

const toNetworkGraph = (transcript, speakerSubset) => {
  const nodes = transcript.speaker_info.map((speaker, i) => {
    const id = speaker.id;
    const label = speaker.name;
    const color = !speakerSubset || speakerSubset.includes(id) ? COLORS[i] : '#dddddd40';
    const transcriptForSpeaker = transcript.transcript.content[0].content.filter((i) => i.attrs.speakerId == id);
    const value = transcriptForSpeaker.map((i) => i.attrs.endTime - i.attrs.startTime).reduce((a, b) => a + b);
    return { id, label, color, value };
  });
  const edgesPerSpeaker = transcript.speaker_info.map((speaker) => {
    const id = speaker.id;
    const edgesForSpeaker = [];
    transcript.transcript.content[0].content.forEach((val, i) => {
      if (val.attrs.speakerId === id && i > 0 && i < transcript.transcript.content[0].content.length - 1) {
        const prevSpeaker = transcript.transcript.content[0].content[i - 1];
        const nextSpeaker = transcript.transcript.content[0].content[i + 1];
        edgesForSpeaker.push(...[prevSpeaker.attrs.speakerId, nextSpeaker.attrs.speakerId]);
      }
    });
    return { id, edgesForSpeaker };
  });

  const edges = edgesPerSpeaker.flatMap((speaker) => {
    const connections = speaker.edgesForSpeaker.reduce((r, c) => ((r[c] = (r[c] || 0) + 1), r), {});

    return Object.keys(connections).map((key) => {
      if (speakerSubset) {
        return { from: speaker.id, to: Number(key), value: connections[key], color: { opacity: 0.0 } };
      } else {
        return { from: speaker.id, to: Number(key), value: connections[key], color: { opacity: 0.2 } };
      }
    });
  });
  return { nodes, edges };
};

const toSentimentSeries = (transcriptData) => {
  const sentiments = transcriptData.sentiments.dimensions.time;
  const lineChartData = {
    data: Object.values(sentiments),
    chartId: 'sent-series',
    name: 'Sentiment',
    interval: Object.keys(sentiments).map((i) => parseInt(i)),
  };
  return lineChartData;
};

const toHeatnessSeries = (transcriptData) => {
  const sentiments = transcriptData.sentiments.dimensions.time;
  const speakerChanges = Object.keys(transcriptData.keyphrases.dimensions.source_time_section).flatMap((key) => {
    const occuringSpeakers = transcriptData.keyphrases.dimensions.source_time_section[key].match(/.\w+:/g);
    return occuringSpeakers.map((i) => i.split(':')[0].trim()).length;
  });
  const lineChartData = {
    data: speakerChanges,
    chartId: 'heat-series',
    name: 'Speaker changes',
    interval: Object.keys(sentiments).map((i) => parseInt(i)),
  };
  return lineChartData;
};

export { toNetworkGraph, toSentimentSeries, toHeatnessSeries };
