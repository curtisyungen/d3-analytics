let dataset = [80, 100, 56, 36, 77, 12, 14];

let svgWidth = 500, svgHeight = 300, barPadding = 5;
let barWidth = (svgWidth / dataset.length);

let svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

let barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - d
    })
    .attr("height", function(d) {
        return d
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        let translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
    });