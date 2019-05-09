import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realtime-content',
  templateUrl: './realtime-content.component.html',
  styleUrls: ['./realtime-content.component.css']
})
export class RealtimeContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Average page views';
  type = 'LineChart';
  data = [
     ["Jan",  70 ],
     ["Feb",  60],
     ["Mar",  90],
     ["Apr",  140],
     ["May",  180],
     ["Jun",  210],
     ["Jul",  250],
     ["Aug",  260],
     ["Sep",  230],
     ["Oct",  180],
     ["Nov",  130],
     ["Dec",  900 ]
  ];
  columnNames = ["Month", "views"];

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

 stacked_title = 'Traffic in year';  
   stacked_type = 'ColumnChart';  
   stacked_data = [  
     ["2014", 1000, 200, 899],  
     ["2015", 450, 560, 899],  
     ["2016", 600, 150, 899],  
     ["2017", 250, 100, 899],  
     ["2018", 2000, 480, 899]  
   ];  
   stacked_columnNames = ['Year', 'India','USA','UK'];  
   stacked_options = {     
     hAxis: {  
        title: 'Year'  
     },  
     vAxis:{  
        minValue:0  
     },  
     isStacked:true,
     bar: { groupWidth: "100%" }    
  }; 
  round_title = 'World wide access based on the country';
  round_type = 'PieChart';
  round_data = [
     ['India', 45.0],
     ['America', 26.8],
     ['China', 12.8],
     ['Japan', 8.5],
     ['Africa', 6.2],
     ['Kenia', 0.7] 
  ];
  round_columnNames = ['Browser', 'Percentage'];
  round_options = {    
     pieHole:0.4
  };

     line_title = 'Active users';
  line_type = 'LineChart';
  line_data = [
     ["Jan",  7.0, -0.2, -0.9, 3.9],
     ["Feb",  6.9, 0.8, 0.6, 4.2],
     ["Mar",  9.5,  5.7, 3.5, 5.7],
     ["Apr",  14.5, 11.3, 8.4, 8.5],
     ["May",  18.2, 17.0, 13.5, 11.9],
     ["Jun",  21.5, 22.0, 17.0, 15.2],
     ["Jul",  25.2, 24.8, 18.6, 17.0],
     ["Aug",  26.5, 24.1, 17.9, 16.6],
     ["Sep",  23.3, 20.1, 14.3, 14.2],
     ["Oct",  18.3, 14.1, 9.0, 10.3],
     ["Nov",  13.9,  8.6, 3.9, 6.6],
     ["Dec",  9.6,  2.5,  1.0, 4.8]
  ];
  line_columnNames = ["Month", "Tokyo", "New York","Berlin", "Paris"];
  line_options = {   
     hAxis: {
        title: 'Month'
     },
     vAxis:{
        title: 'Temperature'
     },
  };
      public map_ChartData = [
       ['Country', 'Popularity'],
       ['Germany', 200],
       ['United States', 300],
       ['Brazil', 400],
       ['Canada', 500],
       ['France', 600],
       ['RU', 700]
   ];
       public map_ChartOptions = {};

  bar_title = 'Page views';
  bar_type = 'BarChart';
  bar_data = [
     ["March", 900],
     ["April", 1000]
  ];
  bar_columnNames = ['Year', 'Asia'];
   width = '100%';
   height = '200%';
  options = {
   width: '100%',
   height: '200%'
}
myData = [
  ['Germany', 200],
  ['United States', 300],
  ['Brazil', 400],
  ['Canada', 500],
  ['France', 600],
  ['RU', 700]
];
myColumnNames =     ['Country', 'Popularity'];

}
