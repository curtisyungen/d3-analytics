let dataset = [1, 2, 3, 4, 5];

let svgWidth = 500, svgHeight = 300, barPadding = 5;
let barWidth = (svgWidth / dataset.length);
let leftPadding = 30;
let bottomPadding = 20;

// Set dimensions for chart
let svg = d3.select("svg")
    .attr("width", svgWidth + leftPadding * 2)
    .attr("height", svgHeight + bottomPadding * 2);

// Add horizontal scale to chart
let xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgWidth]);

// Add vertical scale to chart
let yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([svgHeight, 0]);

// Add x axis to chart
let x_axis = d3.axisBottom()
    .scale(xScale);
    
svg.append("g")
    .attr("transform", `translate(${leftPadding}, ${svgHeight + bottomPadding})`)
    .call(x_axis);

// Add y axis to chart
let y_axis = d3.axisLeft()
    .scale(yScale);

svg.append("g")
    .attr("transform", `translate(${leftPadding}, ${bottomPadding})`)
    .call(y_axis);

// Add data to bar chart
let barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return yScale(d)
    })
    .attr("height", function(d) {
        return svgHeight - yScale(d)
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        let translate = [barWidth * i + leftPadding, bottomPadding];
        return `translate(${translate})`;
    });

// Add data labels to bar chart
let text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("y", function(d, i) {
        return svgHeight - yScale(d);
    })
    .attr("x", function(d, i) {
        return barWidth * i;
    })
    .attr("fill", "white");