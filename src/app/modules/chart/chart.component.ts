import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';


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








}