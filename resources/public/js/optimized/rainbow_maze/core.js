// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('rainbow_maze.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
rainbow_maze.core.scale = (10);
rainbow_maze.core.setup = (function rainbow_maze$core$setup(){
quil.core.background.cljs$core$IFn$_invoke$arity$1((0));

quil.core.frame_rate((240));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null);
});
rainbow_maze.core.update_state = (function rainbow_maze$core$update_state(p__6634){
var map__6635 = p__6634;
var map__6635__$1 = (((((!((map__6635 == null))))?(((((map__6635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6635):map__6635);
var state = map__6635__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6635__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6635__$1,cljs.core.cst$kw$y);
var new_x = (((x >= quil.core.width()))?(0):(x + rainbow_maze.core.scale));
var new_y = (((new_x === (0)))?(y + rainbow_maze.core.scale):y);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,new_x,cljs.core.cst$kw$y,(((new_y >= quil.core.height()))?(0):new_y)], null);
});
rainbow_maze.core.draw_state = (function rainbow_maze$core$draw_state(p__6637){
var map__6638 = p__6637;
var map__6638__$1 = (((((!((map__6638 == null))))?(((((map__6638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6638):map__6638);
var state = map__6638__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6638__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6638__$1,cljs.core.cst$kw$y);
var once = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6638__$1,cljs.core.cst$kw$once);
if((((x === (0))) && ((y === (0))))){
quil.core.background.cljs$core$IFn$_invoke$arity$1((0));
} else {
}

quil.core.stroke.cljs$core$IFn$_invoke$arity$3(cljs.core.rand_int((255)),cljs.core.rand_int((255)),(255));

if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.5)){
return quil.core.line.cljs$core$IFn$_invoke$arity$4(x,y,(x + rainbow_maze.core.scale),(y + rainbow_maze.core.scale));
} else {
return quil.core.line.cljs$core$IFn$_invoke$arity$4(x,(y + rainbow_maze.core.scale),(x + rainbow_maze.core.scale),y);
}
});
rainbow_maze.core.rainbow_maze = (function rainbow_maze$core$rainbow_maze(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"rainbow-maze",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(rainbow_maze.core.update_state))?(function() { 
var G__6640__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rainbow_maze.core.update_state,args);
};
var G__6640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6641__i = 0, G__6641__a = new Array(arguments.length -  0);
while (G__6641__i < G__6641__a.length) {G__6641__a[G__6641__i] = arguments[G__6641__i + 0]; ++G__6641__i;}
  args = new cljs.core.IndexedSeq(G__6641__a,0,null);
} 
return G__6640__delegate.call(this,args);};
G__6640.cljs$lang$maxFixedArity = 0;
G__6640.cljs$lang$applyTo = (function (arglist__6642){
var args = cljs.core.seq(arglist__6642);
return G__6640__delegate(args);
});
G__6640.cljs$core$IFn$_invoke$arity$variadic = G__6640__delegate;
return G__6640;
})()
:rainbow_maze.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(rainbow_maze.core.setup))?(function() { 
var G__6643__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rainbow_maze.core.setup,args);
};
var G__6643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6644__i = 0, G__6644__a = new Array(arguments.length -  0);
while (G__6644__i < G__6644__a.length) {G__6644__a[G__6644__i] = arguments[G__6644__i + 0]; ++G__6644__i;}
  args = new cljs.core.IndexedSeq(G__6644__a,0,null);
} 
return G__6643__delegate.call(this,args);};
G__6643.cljs$lang$maxFixedArity = 0;
G__6643.cljs$lang$applyTo = (function (arglist__6645){
var args = cljs.core.seq(arglist__6645);
return G__6643__delegate(args);
});
G__6643.cljs$core$IFn$_invoke$arity$variadic = G__6643__delegate;
return G__6643;
})()
:rainbow_maze.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(rainbow_maze.core.draw_state))?(function() { 
var G__6646__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rainbow_maze.core.draw_state,args);
};
var G__6646 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6647__i = 0, G__6647__a = new Array(arguments.length -  0);
while (G__6647__i < G__6647__a.length) {G__6647__a[G__6647__i] = arguments[G__6647__i + 0]; ++G__6647__i;}
  args = new cljs.core.IndexedSeq(G__6647__a,0,null);
} 
return G__6646__delegate.call(this,args);};
G__6646.cljs$lang$maxFixedArity = 0;
G__6646.cljs$lang$applyTo = (function (arglist__6648){
var args = cljs.core.seq(arglist__6648);
return G__6646__delegate(args);
});
G__6646.cljs$core$IFn$_invoke$arity$variadic = G__6646__delegate;
return G__6646;
})()
:rainbow_maze.core.draw_state)], 0));
});
goog.exportSymbol('rainbow_maze.core.rainbow_maze', rainbow_maze.core.rainbow_maze);

if(cljs.core.truth_(cljs.core.some((function (p1__5625__5626__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__5625__5626__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,rainbow_maze.core.rainbow_maze,cljs.core.cst$kw$host_DASH_id,"rainbow-maze"], null));
}
