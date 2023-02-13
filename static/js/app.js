// Get data endpoint
const bellybutton_url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(bellybutton_url).then(function(data) {
console.log(data);

  // Create dropdown menu and create elements in dropdown for all "options" from names array
  let dropdown = d3.select("#selDataset")
    .selectAll("option")
    .data(data.names)
    .enter()
    .append("option")
    .text(function(x) {
      return x;
    })

  // Display first name on page load
  getData(data.names[0]);

  // Create Function called by DOM changes
  function getData(selectedName) {
    
    // Filter for selected name
    let nameData = data.samples.filter(sample => sample.id === selectedName)[0];
    console.log(nameData);

    // Update bar chart
    let barChart = [{
      x: nameData.sample_values.slice(0,10).reverse(),
      y: nameData.otu_ids.slice(0,10).map(otu_id => "OTU " + otu_id).reverse(),
      text: nameData.otu_labels.slice(0,10).reverse(),
      orientation: "h",
      type: "bar"
    }];

    Plotly.newPlot("bar", barChart);

    // Update bubble chart  
    let bubbleTrace = {
      x: nameData.otu_ids,
      y: nameData.sample_values,
      mode: "markers",
      marker: {
        size: nameData.sample_values,
        color: nameData.otu_ids,
      },
        text: nameData.otu_labels,
    };
    let bubbleData = [bubbleTrace];

    let bubbleLayout = {
      xaxis: {title: "OTU ID"},
    };

    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    // Add metadata for selectedName to #sample-metadata element
    let nameMetadata = data.metadata.find(metadta => metadta.id == selectedName);
    d3.select("#sample-metadata").html(""); // Clear contents of html element
    for (let key in nameMetadata) { // Loop through key-value pairs and append "p" element for each
      d3.select("#sample-metadata")
      .append("p")
      .text(`${key}: ${nameMetadata[key]}`);
}
  }  
  // Call getData() when a change takes place to the DOM
  d3.select("#selDataset").on("change", function() {
    let selectedName = d3.select(this).property("value");
    getData(selectedName);

  })
});
