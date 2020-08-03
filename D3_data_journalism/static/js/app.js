


// bring in the data and store to arrays
alldata = d3.csv("static/data/data.csv").then(function(data){
    console.log(data)

    states = data.map(function(d) { 
    return d.state

})
id = data.map(function(d) { 
    return d.id

})
abbr = data.map(function(d) { 
    return d.abbr

})
poverty = data.map(function(d) { 
    return d.poverty

})
povertyMoe = data.map(function(d) { 
    return d.povertyMoe

})
age= data.map(function(d) { 
    return d.age

})
ageMoe = data.map(function(d) { 
    return d.ageMoe

})
income = data.map(function(d) { 
    return d.income

})
incomeMoe = data.map(function(d) { 
    return d.idcomeMoe

})
healthcare = data.map(function(d) { 
    return d.healthcare

})
healthcareLow = data.map(function(d) { 
    return d.healthcareLow

})
healthcareHigh = data.map(function(d) { 
    return d.healthcareHigh

})
obesity = data.map(function(d) { 
    return d.obesity

})
obesityLow = data.map(function(d) { 
    return d.obesityLow

})
obesityHigh = data.map(function(d) { 
    return d.obesityHigh

})
smokes = data.map(function(d) { 
    return d.smokes

})
smokesLow = data.map(function(d) { 
    return d.smokesLow

})
smokesHigh = data.map(function(d) { 
    return d.smokesHigh

})

//define the width and hight of svgbox
svgHeight=400
svgWidth=600

//set some margins
var margin = {
    top: 60,
    right: 60,
    bottom: 60,
    left: 60
  };
  
 // Define chart area
  var chartWidth = svgWidth - margin.left - margin.right;
  var chartHeight = svgHeight - margin.top - margin.bottom;

//scale the data in preparation for circle-i-fication
var xScale = d3.scaleLinear()
  .domain(d3.extent(income))
  .range([0, chartWidth]);

  var yScale = d3.scaleLinear()
  .domain(d3.extent(obesity))
  .range([0, chartHeight]);

 //create variables to be axis in preparation for chart-i-fication
  var bottomAxis = d3.axisBottom(xScale);
  var leftAxis = d3.axisLeft(yScale);

//draw a circle and append it to the chartGroup
//create an svg box
var svg = d3.select("#scatter")
  .append("svg")
  .attr("height", chartHeight)
  .attr("width", chartWidth);
  var chartGroup = svg.append("g")
  //.attr("transform", `translate(${margin.left}, ${margin.top})`); FIX THIS

chartGroup.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", 2)
    .attr("cx", (d => xScale(d.income)))
    .attr("cy", (d => yScale(d.obesity)))
    .attr("stroke", "black")
    .attr("stroke-width", "5")
    .attr("fill", "red");

chartGroup.append("g")
    .classed("axis", true)
    .call(leftAxis);

chartGroup.append("g")
    .classed("axis", true)
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(bottomAxis);
});




//var newarray=dataArray.forEach(element => console.log(element.x));