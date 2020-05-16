// Compiled by ClojureScript 1.10.520 {}
goog.provide('rainbow_maze.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
rainbow_maze.core.scale = (20);
rainbow_maze.core.setup = (function rainbow_maze$core$setup(){
quil.core.background.call(null,(0));

quil.core.frame_rate.call(null,(240));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
});
rainbow_maze.core.update_state = (function rainbow_maze$core$update_state(p__1825){
var map__1826 = p__1825;
var map__1826__$1 = (((((!((map__1826 == null))))?(((((map__1826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1826):map__1826);
var state = map__1826__$1;
var x = cljs.core.get.call(null,map__1826__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1826__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var new_x = (((x >= quil.core.width.call(null)))?(0):(x + rainbow_maze.core.scale));
var new_y = (((new_x === (0)))?(y + rainbow_maze.core.scale):y);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new_x,new cljs.core.Keyword(null,"y","y",-1757859776),(((new_y >= quil.core.height.call(null)))?(0):new_y)], null);
});
rainbow_maze.core.draw_state = (function rainbow_maze$core$draw_state(p__1828){
var map__1829 = p__1828;
var map__1829__$1 = (((((!((map__1829 == null))))?(((((map__1829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1829):map__1829);
var state = map__1829__$1;
var x = cljs.core.get.call(null,map__1829__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1829__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var once = cljs.core.get.call(null,map__1829__$1,new cljs.core.Keyword(null,"once","once",-262568523));
if((((x === (0))) && ((y === (0))))){
quil.core.background.call(null,(0));
} else {
}

quil.core.stroke.call(null,cljs.core.rand_int.call(null,(255)),cljs.core.rand_int.call(null,(255)),(255));

if((cljs.core.rand.call(null) > 0.5)){
return quil.core.line.call(null,x,y,(x + rainbow_maze.core.scale),(y + rainbow_maze.core.scale));
} else {
return quil.core.line.call(null,x,(y + rainbow_maze.core.scale),(x + rainbow_maze.core.scale),y);
}
});
rainbow_maze.core.rainbow_maze = (function rainbow_maze$core$rainbow_maze(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"rainbow-maze",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,rainbow_maze.core.update_state))?(function() { 
var G__1831__delegate = function (args){
return cljs.core.apply.call(null,rainbow_maze.core.update_state,args);
};
var G__1831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1832__i = 0, G__1832__a = new Array(arguments.length -  0);
while (G__1832__i < G__1832__a.length) {G__1832__a[G__1832__i] = arguments[G__1832__i + 0]; ++G__1832__i;}
  args = new cljs.core.IndexedSeq(G__1832__a,0,null);
} 
return G__1831__delegate.call(this,args);};
G__1831.cljs$lang$maxFixedArity = 0;
G__1831.cljs$lang$applyTo = (function (arglist__1833){
var args = cljs.core.seq(arglist__1833);
return G__1831__delegate(args);
});
G__1831.cljs$core$IFn$_invoke$arity$variadic = G__1831__delegate;
return G__1831;
})()
:rainbow_maze.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,rainbow_maze.core.setup))?(function() { 
var G__1834__delegate = function (args){
return cljs.core.apply.call(null,rainbow_maze.core.setup,args);
};
var G__1834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1835__i = 0, G__1835__a = new Array(arguments.length -  0);
while (G__1835__i < G__1835__a.length) {G__1835__a[G__1835__i] = arguments[G__1835__i + 0]; ++G__1835__i;}
  args = new cljs.core.IndexedSeq(G__1835__a,0,null);
} 
return G__1834__delegate.call(this,args);};
G__1834.cljs$lang$maxFixedArity = 0;
G__1834.cljs$lang$applyTo = (function (arglist__1836){
var args = cljs.core.seq(arglist__1836);
return G__1834__delegate(args);
});
G__1834.cljs$core$IFn$_invoke$arity$variadic = G__1834__delegate;
return G__1834;
})()
:rainbow_maze.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,rainbow_maze.core.draw_state))?(function() { 
var G__1837__delegate = function (args){
return cljs.core.apply.call(null,rainbow_maze.core.draw_state,args);
};
var G__1837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1838__i = 0, G__1838__a = new Array(arguments.length -  0);
while (G__1838__i < G__1838__a.length) {G__1838__a[G__1838__i] = arguments[G__1838__i + 0]; ++G__1838__i;}
  args = new cljs.core.IndexedSeq(G__1838__a,0,null);
} 
return G__1837__delegate.call(this,args);};
G__1837.cljs$lang$maxFixedArity = 0;
G__1837.cljs$lang$applyTo = (function (arglist__1839){
var args = cljs.core.seq(arglist__1839);
return G__1837__delegate(args);
});
G__1837.cljs$core$IFn$_invoke$arity$variadic = G__1837__delegate;
return G__1837;
})()
:rainbow_maze.core.draw_state));
});
goog.exportSymbol('rainbow_maze.core.rainbow_maze', rainbow_maze.core.rainbow_maze);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__1323__1324__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__1323__1324__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),rainbow_maze.core.rainbow_maze,new cljs.core.Keyword(null,"host-id","host-id",742376279),"rainbow-maze"], null));
}

//# sourceMappingURL=core.js.map
