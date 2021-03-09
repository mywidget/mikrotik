(function(b){function c(a,b){this.options=b;this.root=a}c.prototype.init=function(){var a="",d="",c="auto",g="",h="",e,f,a=a+('<img src="'+this.root.find("img").first().attr("src")+'" class="hsmap-image">');this.root.find(".hs-spot-object").each(function(){"rect"==b(this).data("type")?(d="hs-rect",e=b(this).data("x"),f=b(this).data("y")):(d="hs-spot",e=b(this).data("x")-b(this).data("width")/2,f=b(this).data("y")-b(this).data("height")/2);g="visible"==b(this).data("visible")?"visible":"";c=!1==b(this).data("tooltip-auto-width")?
b(this).data("tooltip-width")+"px":"auto";h=b(this).data("popup-position");a+='<div class="'+d+" "+g+" "+h+' hs-spot-object" style="left: '+e+"px; top: "+f+"px; width: "+b(this).data("width")+"px; height: "+b(this).data("height")+'px;">';a+='\t<div class="hs-spot-shape"></div><div class="hs-spot-shape-inner"></div><div class="hs-spot-shape-inner-two"></div>';a+='\t<div class="hs-spot-tooltip-outer">';a+='\t\t<div class="hs-tooltip-buffer"></div>';a+='\t\t<div class="hs-tooltip-wrap" style="width: '+
c+';">';a+='\t\t\t<div class="hs-tooltip">';a+=b(this).html();a+="\t\t\t</div>";a+="\t\t</div>";a+="\t</div>";a+="</div>"});this.root.html(a);this.root.removeClass("hs-loading");this.root.addClass(this.options.show_on);this.root.addClass(this.options.color_scheme);this.options.transparent_spots&&this.root.addClass("transparent-spots");if("click"==this.options.show_on)b(".hs-spot-object").on("click",function(){b(this).toggleClass("visible-tooltip")});"mouseover"==this.options.show_on&&(b(".hs-spot-object").on("mouseover",
function(){b(this).addClass("visible-tooltip")}),b(".hs-spot-object").on("mouseout",function(){b(this).removeClass("visible-tooltip")}));this.root.addClass("hs-loaded")};b.fn.hotspot=function(a){O=b.extend(!0,{show_on:"mouseover",transparent_spots:!0,color_scheme:"red"},a);return this.each(function(){(new c(b(this),O)).init()})}})(jQuery);
var myArray = [
{"judul": "Messaging",
"harga":"Rp.2.000",
"quota":"Durasi 2 Jam / 1 Hari / Speed up 512k",
"warna":"yellow",
"gambar":"message-ico.png"},
{"judul": "Browsing",
"harga":"Rp.5.000",
"quota":"Durasi 5 Jam / Aktif 3 Hari / Speed up 512k",
"warna":"orange",
"gambar":"screen-ico.png"},
{"judul": "Streaming",
"harga":"Rp.10.000",
"quota":"Durasi 15 Jam / Aktif 7 Hari / Speed up 512k",
"warna":"red",
"gambar":"vid-ico.png"},
{"judul": "Games",
"harga":"Rp.25.000",
"quota":"Kuota 750Mb / Aktif 1 Hari / Speed up 512kb",
"warna":"green",
"gambar":"game-ico.png"},
{"judul": "Download",
"harga":"Rp.50.000",
"quota":"Unlimited / 30 Hari / Speed up 512 Kbps",
"warna":"blue",
"gambar":"cloud-ico.png"},
{"judul": "Share",
"harga":"Rp. 150.000",
"quota":"Kouta 3Gb / Aktif 30 Hari / Speed up 1 Mbps",
"warna":"violet",
"gambar":"infinity-ico.png"}
]
//
myFunction(myArray);
function myFunction(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    out += '<div class="col-md-6"><div class="box-type '+arr[i].warna +'"><div class="images"><div><img src="dist/img/ico/'+arr[i].gambar +'" /></div><span>'+arr[i].judul +'</span></div><div class="desc"><h3>'+arr[i].harga +'</h3><p class="default">'+arr[i].quota +'</p></div></div></div>';
  }
  document.getElementById("pilihan").innerHTML = out;
}