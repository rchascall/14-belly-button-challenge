// Get data endpoint
const bellybutton_url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(bellybutton_url).then(function(data) {
console.log(data);

  // Create dropdown menu
  //let dropdown = d3.select("#selDataset")
  //  .selectAll("option")
  //  .data(data.names)



});
