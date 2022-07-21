const COLORS = ["#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#48cae4", "#90e0ef", "#ade8f4", "#caf0f8"];

const toNetworkGraph = (transcript, statistics) => {
  const nodes = transcript.speaker_info.map((speaker, i) => {
    const id = speaker.id;
    const label = speaker.name;
    const color = COLORS[i];
    const transcriptForSpeaker = transcript.transcript.content[0].content.filter(i=>i.attrs.speakerId == id)
    const value = transcriptForSpeaker.map(i=>i.attrs.endTime - i.attrs.startTime).reduce((a,b)=>a+b)
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
      return { from: speaker.id, to: Number(key), value: connections[key], color: { opacity: 0.2 } };
    });
  });
  return { nodes, edges };
};

export { toNetworkGraph };
