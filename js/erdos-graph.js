
data = {
    "nodes": [
      {
        "id": "Paul Erdös", x:0, y:100
      },
      {
        "id": "Dieter Kratsch", x:100, y:150
      },
      {
        "id": "Andreas Brandstädt", x:200, y:100
      },
      {
        "id": "Franz-Josef Brandenburg", x:300, y:150
      },
      {
        "id": "Daniel Gmach", x:400, y:100
      },
      {
        "id": "Thomas Zimmermann", x:500, y:150
      },
      {
        "id": "Manish Shetty", x:600, y:100
      }
    ],
    "edges": [
      { "from": "Paul Erdos", "to": "Dieter Kratsch" },
      { "from": "Dieter Kratsch", "to": "Andreas Brandstädt" },
      { "from": "Andreas Brandstädt", "to": "Franz-Josef Brandenburg" },
      { "from": "Franz-Josef Brandenburg", "to": "Daniel Gmach" },
      { "from": "Daniel Gmach", "to": "Thomas Zimmermann" },
      { "from": "Thomas Zimmermann", "to": "Manish Shetty" },
    ]
  }

// create a chart from the loaded data
var chart = anychart.graph(data);
chart.layout().type("fixed");
chart.background().fill({
  src: "https://manishshettym.github.io/images/SubtleGreyBackground.jpg",
  mode: "fit"
});
chart.interactivity().zoomOnMouseWheel(false);
chart.interactivity().scrollOnMouseWheel(false);

// set the title
var nodes = chart.nodes();

// set the size of nodes
nodes.normal().height(30);
nodes.hovered().height(45);
nodes.selected().height(45);

// set the fill of nodes
nodes.normal().fill("#00ff99");
nodes.hovered().fill("white");
nodes.selected().fill("#ffa000");

// set the stroke of nodes
nodes.normal().stroke(null);
nodes.hovered().stroke("#333333", 3);
nodes.selected().stroke("#333333", 3);

// configure the visual settings of edges
chart.edges().normal().stroke("#ffa000", 2, "10 5", "round");
chart.edges().hovered().stroke("#ffa000", 4, "10 5", "round");
chart.edges().selected().stroke("#ffa000", 4);

// enable the labels of nodes
nodes.labels().enabled(true);

// configure the labels of nodes
nodes.labels().format("{%id}");
nodes.labels().fontSize(10);
nodes.labels().fontWeight(300);

// draw the chart
chart.container("erdoscontainer").draw();