/*! For license information please see 9.b6c8256f.chunk.js.LICENSE.txt */
(this["webpackJsonpcv-geekifier"]=this["webpackJsonpcv-geekifier"]||[]).push([[9],{42:function(t,i){t.exports=function(){var t,i=!0,e=function(t,e,n,s){var o=1===n,u=document.createElement("input"),l=-1,h=function(){var i=Array.from(t.html.querySelectorAll(".user-input")).reverse();l>=i.length&&(l=i.length-1),l<0&&(l=-1),-1===l?t._inputLine.textContent=u.value="":i[l]&&(t._inputLine.textContent=u.value=i[l].innerText)};u.style.position="absolute",u.style.zIndex="-100",u.style.outline="none",u.style.border="none",u.style.opacity="0",u.style.fontSize="0.2em",t._inputLine.textContent="",t._input.style.display="block",t.html.appendChild(u),function t(i,e){var n=e._cursor;setTimeout((function(){i.parentElement&&e._shouldBlinkCursor?(n.style.visibility="visible"===n.style.visibility?"hidden":"visible",t(i,e)):n.style.visibility="visible"}),500)}(u,t),e.length&&t.print(3===n?e+" (y/n)":e),u.onblur=function(){t._cursor.style.display="none"},u.onfocus=function(){u.value=t._inputLine.textContent,t._cursor.style.display="inline"},t.html.onclick=function(){u.focus()},u.onkeydown=function(i){37===i.which||39===i.which||38===i.which||40===i.which||9===i.which?i.preventDefault():o&&13!==i.which&&setTimeout((function(){t._inputLine.textContent=u.value}),1)},u.onkeyup=function(i){if(3===n||13===i.which){t._input.style.display="none";var e=u.value;o&&t.print(e,!1,"user-input"),t.html.removeChild(u),"function"===typeof s&&s(3===n?"Y"===e.toUpperCase()[0]:e)}else"ArrowUp"===i.code?(l++,h()):"ArrowDown"===i.code&&(l--,h())},i?(i=!1,setTimeout((function(){u.focus()}),50)):u.focus()};return function(i){if(!t){var n='<source src="//www.erikosterberg.com/terminaljs/beep.';(t=document.createElement("audio")).innerHTML=n+'mp3" type="audio/mpeg">'+n+'ogg" type="audio/ogg">',t.volume=.05}this.html=document.createElement("div"),this.html.className="Terminal","string"===typeof i&&(this.html.id=i),this._innerWindow=document.createElement("div"),this._output=document.createElement("p"),this._inputLine=document.createElement("span"),this._cursor=document.createElement("span"),this._input=document.createElement("p"),this._input.classList.add("input-line"),this._shouldBlinkCursor=!0,this.beep=function(){t.load(),t.play()},this.print=function(t,i,e){var n=document.createElement("div");e&&n.classList.add(e),i?n.innerHTML=t:n.textContent=t,this._output.appendChild(n)},this.input=function(t,i){e(this,t,1,i)},this.password=function(t,i){e(this,t,2,i)},this.confirm=function(t,i){e(this,t,3,i)},this.clear=function(){this._output.innerHTML=""},this.sleep=function(t,i){setTimeout(i,t)},this.setTextSize=function(t){this._output.style.fontSize=t,this._input.style.fontSize=t},this.setTextColor=function(t){this.html.style.color=t,this._cursor.style.background=t},this.setBackgroundColor=function(t){this.html.style.background=t},this.setWidth=function(t){this.html.style.width=t},this.setHeight=function(t){this.html.style.height=t},this.blinkingCursor=function(t){t=t.toString().toUpperCase(),this._shouldBlinkCursor="TRUE"===t||"1"===t||"YES"===t},this._input.appendChild(this._inputLine),this._input.appendChild(this._cursor),this._innerWindow.appendChild(this._output),this._innerWindow.appendChild(this._input),this.html.appendChild(this._innerWindow),this.setBackgroundColor("black"),this.setTextColor("white"),this.setTextSize("1em"),this.setWidth("100%"),this.setHeight("100%"),this.html.style.fontFamily="Monaco, Courier",this.html.style.margin="0",this._innerWindow.style.padding="10px",this._input.style.margin="0",this._output.style.margin="0",this._cursor.style.background="white",this._cursor.innerHTML="C",this._cursor.style.display="none",this._input.style.display="none"}}()}}]);
//# sourceMappingURL=9.b6c8256f.chunk.js.map