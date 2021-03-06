/*
Enlarge for jQuery v1.0
Abel Yao, 2013
*/
(function(e) {
	var i = {
		shadecolor: "#FFD24D",
		shadeborder: "#FF8000",
		shadeopacity: .5,
		cursor: "move",
		layerwidth: 400,
		layerheight: 300,
		layerborder: "#DDD",
		fade: true,
		largewidth: 1280,
		largeheight: 960
	};
	var t = function(t) {
		t = e.extend({}, i, t);
		e(this).each(function() {
			var i = e(this).css("position", "relative");
			var h = i.children().first();
			var r = {
				x: h.width() / t.largewidth,
				y: h.height() / t.largeheight
			};
			var o = {
				shade: {
					width: t.layerwidth * r.x - 2,
					height: t.layerheight * r.y - 2
				}
			};
			var a = e("<div>").css({
				position: "absolute",
				left: "0px",
				top: "0px",
				"background-color": t.shadecolor,
				border: "1px solid " + t.shadeborder,
				width: o.shade.width,
				height: o.shade.height,
				opacity: t.shadeopacity,
				cursor: t.cursor
			});
			a.hide().appendTo(i);
			var d = e("<img>").css({
				position: "absolute",
				display: "block",
				width: t.largewidth,
				height: t.largeheight
			});
			var s = e("<div>").css({
				position: "absolute",
				left: i.width() + 5,
				top: 0,
				"background-color": "#111",
				overflow: "hidden",
				width: t.layerwidth,
				height: t.layerheight,
				border: "1px solid " + t.layerborder
			});
			d.attr("src", i.attr("href"));
			d.appendTo(s);
			s.hide().appendTo(i);
			var n = {
				x: o.shade.width / 2,
				y: o.shade.height / 2
			};
			var l = {
				width: i.innerWidth() - a.outerWidth(),
				height: i.innerHeight() - a.outerHeight()
			};
			var g = function() {
				a.show();
				if (t.fade) s.stop().fadeIn(300);
				else s.show()
			};
			var c = function() {
				a.hide();
				s.hide()
			};
			var f = i.offset();
			i.mousemove(function(e) {
				var t = e.pageX - f.left;
				var h = e.pageY - f.top;
				if (t < 0 || t > i.innerWidth()) return c();
				if (h < 0 || h > i.innerHeight()) return c();
				t = t - n.x;
				h = h - n.y;
				if (t < 0) t = 0;
				if (h < 0) h = 0;
				if (t > l.width) t = l.width;
				if (h > l.height) h = l.height;
				a.css({
					left: t,
					top: h
				});
				d.css({
					left: 0 - t / r.x,
					top: 0 - h / r.y
				})
			}).mouseenter(g).mouseleave(c)
		})
	};
	e.fn.extend({
		enlarge: t
	})
})(jQuery);