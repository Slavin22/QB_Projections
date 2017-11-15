var trace1 = {
	x: qbData.map(row => row.adjPA),
	y: qbData.map(row => row.adjPF),
	mode: 'markers',
	type: 'scatter',
	text: matchups,
	marker: {size: 20, bordercolor: 'black'},
	hoverinfo: 'text',
	hoverlabel: {bgcolor: 'orange', bordercolor: 'black'},
	hoveron: {bgcolor: 'orange'},
	fillcolor: "black"
}

var data = [trace1];

var layout = {
  xaxis: {
    range: [4.5, 25],
    title: 'Defense - Adjusted QB Points Allowed'
  },
  yaxis: {
    range: [4.5, 25],
    title: 'QB - Adjusted Points Scored'
  },
  title:'Week 11 QB Projections (hover over bubbles to find the QB + matchup info)',
  hovermode: 'closest'
};

Plotly.newPlot("plot", data, layout)

renderTable()