(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{369:function(t,o,e){},406:function(t,o,e){"use strict";var a=e(369);e.n(a).a},424:function(t,o,e){"use strict";e.r(o);var a={name:"eg-drawing-manager",data:function(){return{mapCenter:{lat:4.5,lng:99},mapMode:null,toolbarPosition:"TOP_CENTER",mapDraggable:!0,mapCursor:null,shapes:[],rectangleOptions:{fillColor:"#777",fillOpacity:.4,strokeWeight:2,strokeColor:"#999",draggable:!1,editable:!1,clickable:!0},circleOptions:{fillColor:"#777",fillOpacity:.4,strokeWeight:2,strokeColor:"#999",draggable:!1,editable:!1,clickable:!0},polylineOptions:{fillColor:"#777",fillOpacity:.4,strokeWeight:2,strokeColor:"#999",draggable:!1,editable:!1,clickable:!0}}},watch:{mapMode:function(t,o){if("ready"===t&&"edit"===o)return this.mapDraggable=!0,void(this.mapCursor=null);"edit"===t&&(this.mapDraggable=!1,this.mapCursor="default")}},mounted:function(){this.mapMode="ready"},methods:{setPos:function(){var t=["TOP_CENTER","TOP_LEFT","TOP_RIGHT","LEFT_TOP","RIGHT_TOP","LEFT_CENTER","RIGHT_CENTER","LEFT_BOTTOM","RIGHT_BOTTOM","BOTTOM_CENTER","BOTTOM_LEFT","BOTTOM_RIGHT"];this.toolbarPosition=t[Math.floor(Math.random()*t.length)]},setMapMode:function(){"edit"===this.mapMode?this.mapMode="ready":this.mapMode="edit"}}},i=(e(406),e(9)),l=Object(i.a)(a,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"container"}},[e("h3",[t._v("Drawing Manager Example")]),t._v(" "),e("div",{staticStyle:{width:"100%",display:"flex","flex-direction":"column"}},[e("span",{staticStyle:{width:"auto"}}),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Mode:")]),t._v(" "+t._s(t.mapMode)+"\n      ")]),t._v(" "),e("li",[e("strong",[t._v("Position:")]),t._v(" "+t._s(t.toolbarPosition)+"\n      ")])]),t._v(" "),e("span",{staticStyle:{width:"auto"}}),t._v(" "),e("div",[e("button",{on:{click:t.setPos}},[t._v("Position")]),t._v(" "),e("button",{on:{click:t.setMapMode}},[t._v(t._s("ready"===t.mapMode?"change to Edit":"change to Ready"))])])]),t._v(" "),e("br"),t._v(" "),e("gmap-map",{ref:"mapRef",staticStyle:{width:"100%",height:"500px"},attrs:{center:t.mapCenter,zoom:7,"map-type-id":"roadmap",options:{zoomControl:!0,mapTypeControl:!0,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1,draggable:t.mapDraggable,draggableCursor:t.mapCursor}},scopedSlots:t._u([{key:"visible",fn:function(){return["edit"===t.mapMode?e("gmap-drawing-manager",{attrs:{position:t.toolbarPosition,"rectangle-options":t.rectangleOptions,"circle-options":t.circleOptions,"polyline-options":t.polylineOptions,shapes:t.shapes}}):t._e()]},proxy:!0}])})],1)}),[],!1,null,"652e18b3",null);o.default=l.exports}}]);