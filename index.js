let dataset = [80, 100, 56, 36, 77, 12, 14];

let svgWidth = 500, svgHeight = 300, barPadding = 5;
let barWidth = (svgWidth / dataset.length);

// Set dimensions for chart
let svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Add vertical scale to chart
let yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight]);

// Add data to bar chart
let barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - yScale(d)
    })
    .attr("height", function(d) {
        return yScale(d)
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        let translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
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
        return svgHeight - yScale(d) + 18;
    })
    .attr("x", function(d, i) {
        return barWidth * i;
    })
    .attr("fill", "white");