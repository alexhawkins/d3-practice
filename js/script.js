'use strict';

var dataset = [1, 3, 4, 23, 45, 29];

d3.select('body').selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    .text(function(data) {
        return data;
    })
    .style('color', function(d){
      return d > 24 ? 'blue' : 'red';
    });
