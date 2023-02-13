# 14-belly-button-challenge

The Belly Button Biodiversity project was launched in January 2011 to study the microbes inhabiting our navels.  Detailed information can be found at http://robdunnlab.com/projects/belly-button-biodiversity/.

For this challenge, an interactive dashboard is created to explore the microbial species that colonize human navels.  The dataset shows that a small number of species were present in more than 70% of people.

The first task was to create a horizontal bar chart using the D3.js library from the included url from which the JSON data was fetched.  The initial sample name (940) is loaded and a dropdown provided for all other names in the dataset.  Once the DOM is changed to another sample name from the dropdown, the javascript detects this change and updates the data for the selected name on the bar chart and metadata content.

The bar chart shows each sample name, along with its metadata and the top 10 OTU's found in the sample name data.

The last task was to create a bubble chart to display the OTU's with marker sizes based on their frequency amongst the sample names.