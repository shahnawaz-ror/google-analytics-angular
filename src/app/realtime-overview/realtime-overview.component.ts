import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realtime-overview',
  templateUrl: './realtime-overview.component.html',
  styleUrls: ['./realtime-overview.component.css']
})
export class RealtimeOverviewComponent implements OnInit {

  coulumn_options = {   
    hAxis: {
       title: 'Month'
    },
    vAxis:{
       title: 'Page View'
    },
     backgroundColor: '#96b6f9',
    is3D: true
  };
  coulumn_title = 'Page views';
  coulumn_type = 'ColumnChart';
  coulumn_data = [
    ["2012", 900],
    ["2013", 1000],
    ["2014", 1170],
    ["2015", 1250],
    ["2016", 1530]
  ];
  coulumn_columnNames = ['Year', 'Over all'];
  constructor() { }

  ngOnInit() {
    
  }

}
