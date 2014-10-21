'use strict';

var dataset = [25, 7, 5, 26, 11, 8, 25, 14, 23, 19, 14, 11, 22, 29, 11, 13, 12, 17, 18, 10, 24, 18, 25, 9, 3];

/** BASIC BAR GRAPH SCALED x 4 */
d3.select('section.set1').selectAll('div')
    .data(dataset)
    .enter()
    .append('div')
    .attr('class', 'bar')
    .style('height', function(d) {
        return d * 4 + 'px';
    });


d3.select('section.set2').selectAll('div')
    .data(dataset.sort(function(x, y) {
        return x - y;
    }))
    .enter()
    .append('div')
    .attr('class', 'bar')
    .style('height', function(d) {
        return d * 4 + 'px';
    })
    .style('background-color', function(d) {
        var hue = Math.floor(Math.random() * 153);
        return 'rgb(153,' + hue + ',' + hue + ')';
    });

var newData = [];
var newData = dataset.map(function(el) {
    return el + Math.floor(Math.random() * 30);
});

d3.select('section.set3').selectAll('div')
    .data(newData)
    .enter()
    .append('div')
    .attr('class', 'bar')
    .style('height', function(d) {
        return d * 4 + 'px';
    })
    .style('background-color', function(d) {
        var hue = Math.floor(Math.random() * 254);
        return 'rgb(254,' + hue + ',' + hue + ')';
    });

/*
d3.select('body').selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    .text(function(data) {
        return data;
    })
    .style('color', function(d) {
        return d > 24 ? 'blue' : 'red';
    });*/
var w = 500,
    h = 80;

var svg = d3.select('section.svg1')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

var dataset = [5, 10, 15, 20, 25];
var circles = svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', function(d, i) {
        return (i * 50) + 25;
    })
    .attr('cy', h / 2)
    .attr('r', function(d) {
        return d;
    })
    .attr('fill', 'yellow')
    .attr('stroke', 'orange')
    .attr('stroke-width', function(d) {
        return d / 2;
    });

/* BAR CHART */
var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 23, 25];

/** Establish height of our new SVG */
var w = 500,
    h = 100,
    barPadding = 2;
/** Create an empty SVG Element and add to the DOM */
var svg = d3.select('.bar-chart')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr({
        x: function(d, i) {
            return (i * (w / dataset.length));
        },
        y: function(d) {
            return (h - d * 4);
        },
        width: w / dataset.length - barPadding,
        height: function(d) {
            return d * 4;
        },
        fill: function(d) {
            return 'rgb(0, 0, ' + (d * 10) + ')';
        }
    });
