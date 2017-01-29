import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'bar-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {

  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private data: Array<any>;
  @Input() private width: number;
  @Input() private height: number;

  private chart: any;


  constructor() { }

  ngOnInit() {




//    this.createChart();
    //    if (this.data) {
    //      this.updateChart();
    //    }
  }

  ngOnChanges() {
    //    if (this.chart) {
    //      this.updateChart();
    //    }
  }



  createChart() {
    let element = this.chartContainer.nativeElement;
    var barPadding = 10;
    var barSpacing = this.height / this.data.length;
    var barHeight = barSpacing - barPadding;
    var maxValue = d3.max(this.data);
    var widthScale = this.width / maxValue;

    let svg = d3.select(element).append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    // chart plot area
    this.chart = svg.append('g')
      .selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('y', function (d, i) { return i * barSpacing })
      .attr('height', barHeight)
      .attr('x', 0)
      .attr('width', function (d) { return d * widthScale })
      .style('fill', 'steelblue');

  }

 


















}