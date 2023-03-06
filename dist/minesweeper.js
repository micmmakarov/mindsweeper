!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("MyLibrary",[],t):"object"==typeof exports?exports.MyLibrary=t():e.MyLibrary=t()}(this,(()=>(()=>{"use strict";var e={d:(t,s)=>{for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>o});const s=[{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1}],i=[{x:-1,y:-1},{x:1,y:1},{x:1,y:-1},{x:-1,y:1},...s],o=class{constructor(e={size:{height:1,width:1},mines:0}){this.lost=!1;const{size:t,mines:s}=e;this.size=t,this.minesCount=s,this.generate()}generate(){const e=[];for(let t=0;t<this.size.height;t++){const s=[];for(let e=0;e<this.size.width;e++){const i={x:e,y:t};s.push({opened:!1,hasMine:!1,marked:!1,mines:0,location:i})}e.push(s)}this.field=e,this.setMines()}setMines(){const e=this.field.slice().flat();this.mines=[];for(let t=0;t<this.minesCount;t++){const t=e.splice(~~(Math.random()*e.length),1)[0];t.hasMine=!0,this.mines.push(t)}this.mines.forEach((e=>{const{x:t,y:s}=e.location;i.forEach((e=>{const i=this.getCell({x:t+e.x,y:s+e.y});i&&!i.hasMine&&i.mines++}))}))}getCell(e){var t;return null===(t=this.field[e.y])||void 0===t?void 0:t[e.x]}traverse(e,t={}){const i=Object.values(e).join("-");if(!((e,t)=>e.x>=0&&e.y>=0&&e.x<t.width&&e.y<t.height)(e,this.size)||t[i])return;t[i]=!0;const o=this.getCell(e);o.hasMine||(o.opened=!0,s.forEach((s=>{return this.traverse((o=s,{x:(i=e).x+o.x,y:i.y+o.y}),t);var i,o})))}open(e){this.getCell(e).hasMine?this.lost=!0:this.traverse(e)}mark(e){this.getCell(e).marked=!0}openAll(){this.field.flat().forEach((e=>e.opened=!0))}};return t})()));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL015TGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL015TGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL015TGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL015TGlicmFyeS8uL3NyYy9nYW1lLnRzIiwid2VicGFjazovL015TGlicmFyeS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIk15TGlicmFyeVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJNeUxpYnJhcnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTXlMaWJyYXJ5XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3Qgd2l0aGluRmllbGQgPSAoY29vcmRpbmF0ZSwgc2l6ZSkgPT4ge1xuICAgIHJldHVybiBjb29yZGluYXRlLnggPj0gMCAmJiBjb29yZGluYXRlLnkgPj0gMCAmJiBjb29yZGluYXRlLnggPCBzaXplLndpZHRoICYmIGNvb3JkaW5hdGUueSA8IHNpemUuaGVpZ2h0O1xufTtcbmNvbnN0IHN1bUNvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGUxLCBjb29yZGluYXRlMikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGNvb3JkaW5hdGUxLnggKyBjb29yZGluYXRlMi54LFxuICAgICAgICB5OiBjb29yZGluYXRlMS55ICsgY29vcmRpbmF0ZTIueVxuICAgIH07XG59O1xuY29uc3QgZGlyZWN0aW9ucyA9IFtcbiAgICB7IHg6IC0xLCB5OiAwIH0sXG4gICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgeyB4OiAwLCB5OiAtMSB9LFxuICAgIHsgeDogMCwgeTogMSB9XG5dO1xuY29uc3QgYWxsRGlyZWN0aW9ucyA9IFt7IHg6IC0xLCB5OiAtMSB9LCB7IHg6IDEsIHk6IDEgfSwgeyB4OiAxLCB5OiAtMSB9LCB7IHg6IC0xLCB5OiAxIH0sIC4uLmRpcmVjdGlvbnNdO1xuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7XG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIGhlaWdodDogMSxcbiAgICAgICAgICAgIHdpZHRoOiAxXG4gICAgICAgIH0sXG4gICAgICAgIG1pbmVzOiAwXG4gICAgfSkge1xuICAgICAgICB0aGlzLmxvc3QgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgeyBzaXplLCBtaW5lcyB9ID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5taW5lc0NvdW50ID0gbWluZXM7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGUoKTtcbiAgICB9XG4gICAgZ2VuZXJhdGUoKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gW107XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5zaXplLmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb2wgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5zaXplLndpZHRoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHsgeCwgeSB9O1xuICAgICAgICAgICAgICAgIGNvbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaGFzTWluZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1pbmVzOiAwLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmllbGQucHVzaChjb2wpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcbiAgICAgICAgdGhpcy5zZXRNaW5lcygpO1xuICAgIH1cbiAgICBzZXRNaW5lcygpIHtcbiAgICAgICAgY29uc3QgZmllbGRDb3B5ID0gdGhpcy5maWVsZC5zbGljZSgpLmZsYXQoKTtcbiAgICAgICAgdGhpcy5taW5lcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWluZXNDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByYW5kb20gPSBmaWVsZENvcHkuc3BsaWNlKH5+KE1hdGgucmFuZG9tKCkgKiBmaWVsZENvcHkubGVuZ3RoKSwgMSlbMF07XG4gICAgICAgICAgICByYW5kb20uaGFzTWluZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1pbmVzLnB1c2gocmFuZG9tKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgbnVtYmVyIG9mIG1pbmVzIHRvIGFsbCBub24tbWluZXMgZmllbGRzXG4gICAgICAgIHRoaXMubWluZXMuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBtLmxvY2F0aW9uO1xuICAgICAgICAgICAgYWxsRGlyZWN0aW9ucy5mb3JFYWNoKChkaXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5nZXRDZWxsKHsgeDogeCArIGRpci54LCB5OiB5ICsgZGlyLnkgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsIHx8IGNlbGwuaGFzTWluZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNlbGwubWluZXMrKztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q2VsbChjb29yZGluYXRlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuZmllbGRbY29vcmRpbmF0ZS55XSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2Nvb3JkaW5hdGUueF07XG4gICAgfVxuICAgIHRyYXZlcnNlKGNvb3JkaW5hdGUsIHZpc2l0ZWQgPSB7fSkge1xuICAgICAgICBjb25zdCBrZXkgPSBPYmplY3QudmFsdWVzKGNvb3JkaW5hdGUpLmpvaW4oJy0nKTtcbiAgICAgICAgaWYgKCF3aXRoaW5GaWVsZChjb29yZGluYXRlLCB0aGlzLnNpemUpIHx8IHZpc2l0ZWRba2V5XSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmlzaXRlZFtrZXldID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuZ2V0Q2VsbChjb29yZGluYXRlKTtcbiAgICAgICAgaWYgKGNlbGwuaGFzTWluZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY2VsbC5vcGVuZWQgPSB0cnVlO1xuICAgICAgICBkaXJlY3Rpb25zLmZvckVhY2goKGQpID0+IHRoaXMudHJhdmVyc2Uoc3VtQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZSwgZCksIHZpc2l0ZWQpKTtcbiAgICB9XG4gICAgb3Blbihjb29yZGluYXRlKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldENlbGwoY29vcmRpbmF0ZSk7XG4gICAgICAgIGlmIChjZWxsLmhhc01pbmUpIHtcbiAgICAgICAgICAgIHRoaXMubG9zdCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmF2ZXJzZShjb29yZGluYXRlKTtcbiAgICB9XG4gICAgbWFyayhjb29yZGluYXRlKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdldENlbGwoY29vcmRpbmF0ZSk7XG4gICAgICAgIGNlbGwubWFya2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgb3BlbkFsbCgpIHtcbiAgICAgICAgdGhpcy5maWVsZC5mbGF0KCkuZm9yRWFjaCgoYykgPT4gKGMub3BlbmVkID0gdHJ1ZSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2dhbWUnO1xuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJ0aGlzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJkaXJlY3Rpb25zIiwieCIsInkiLCJhbGxEaXJlY3Rpb25zIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwic2l6ZSIsImhlaWdodCIsIndpZHRoIiwibWluZXMiLCJsb3N0IiwibWluZXNDb3VudCIsImdlbmVyYXRlIiwiZmllbGQiLCJjb2wiLCJsb2NhdGlvbiIsInB1c2giLCJvcGVuZWQiLCJoYXNNaW5lIiwibWFya2VkIiwic2V0TWluZXMiLCJmaWVsZENvcHkiLCJzbGljZSIsImZsYXQiLCJpIiwicmFuZG9tIiwic3BsaWNlIiwiTWF0aCIsImxlbmd0aCIsImZvckVhY2giLCJtIiwiZGlyIiwiY2VsbCIsImdldENlbGwiLCJjb29yZGluYXRlIiwiX2EiLCJ0cmF2ZXJzZSIsInZpc2l0ZWQiLCJ2YWx1ZXMiLCJqb2luIiwid2l0aGluRmllbGQiLCJkIiwiY29vcmRpbmF0ZTIiLCJjb29yZGluYXRlMSIsIm9wZW4iLCJtYXJrIiwib3BlbkFsbCIsImMiXSwic291cmNlUm9vdCI6IiJ9