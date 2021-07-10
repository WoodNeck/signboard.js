/*! For license information please see common.4a74d617.js.LICENSE.txt */
(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[592],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return f},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),c=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,_=h["".concat(u,".").concat(d)]||h[d]||l[d]||o;return n?i.createElement(_,a(a({ref:t},f),{},{components:n})):i.createElement(_,a({ref:t},f))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var i=n(2263),r=n(3919);function o(){var e=(0,i.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var o=void 0===i?{}:i,a=o.forcePrependBaseUrl,s=void 0!==a&&a,u=o.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var f=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+f:f}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},2932:function(e,t,n){"use strict";n.d(t,{gN:function(){return I}});var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var r=function(){return(r=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function o(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{u(i.next(e))}catch(t){o(t)}}function s(e){try{u(i.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((i=i.apply(e,t||[])).next())}))}function a(e,t){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var s=function(e){function t(n,i){var r=e.call(this,"(signboard.js) "+n)||this;return Object.setPrototypeOf(r,t.prototype),r.name="SignBoardError",r.code=i,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),u=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),c=new Float32Array([0,1,1,1,0,0,0,0,1,1,1,0]),f=0,l=1,h=2,d=3,_=4,g=5,p=6,b=7,m=8,v=function(e,t){return e+"("+typeof e+") is not a "+t.map((function(e){return'"'+e+'"'})).join(" or ")+"."},T=function(e,t,n){return"Given value("+e+", "+typeof e+") can't be used for option \""+t+'". Possible values are: '+n.join(", ")},x=function(e){return'Element with selector "'+e+'" not found.'},E=function(e){return"Given element <"+e.tagName+"> is not a canvas."},y=function(e){return'WebGL context creation failed with the following error - "'+e+'"'},w=function(e){return'Failed compiling shader - "'+e+'"'},O=function(e){return'Failed compiling WebGL program - "'+e+'"'},P=function(e){return'Failed to load image with src - "'+e+'"'},R="Texture is not initialized yet",S="webglcontextcreationerror",A="load",U="error",D="resize",L="loadeddata",j={IMAGE:"image",VIDEO:"video",TEXT:"text"},I={FILL:"fill",CONTAIN:"contain",COVER:"cover",NONE:"none",SCALE_DOWN:"scale-down"};var z=function(e){var t=function(e){var t=null;if("string"==typeof e){var n=document.querySelector(e);if(!n)throw new s(x(e),h);t=n}else e&&e.nodeType===Node.ELEMENT_NODE&&(t=e);return t}(e);if(!t)throw new s(v(e,["HTMLElement","string"]),f);if(!/^canvas$/i.test(t.tagName))throw new s(E(t),d);return t},F=function e(t,n,i,o){switch(i){case I.FILL:return r({x:0,y:0},n);case I.CONTAIN:if((c=n.width/t.width)>=(f=n.height/t.height)){var a=t.width*f;return{x:(n.width-a)/2,y:0,width:a,height:n.height}}var u=t.height*c;return{x:0,y:(n.height-u)/2,width:n.width,height:u};case I.COVER:var c,f;if((c=n.width/t.width)>=(f=n.height/t.height)){u=t.height*c;return{x:0,y:(n.height-u)/2,width:n.width,height:u}}a=t.width*f;return{x:o===j.TEXT?0:(n.width-a)/2,y:0,width:a,height:n.height};case I.NONE:return r({x:(n.width-t.width)/2,y:(n.height-t.height)/2},t);case I.SCALE_DOWN:return t.width>n.width||t.height>n.height?e(t,n,I.CONTAIN,o):e(t,n,I.NONE,o);default:throw new s(T(i,"objectFit",Object.keys(I).map((function(e){return I[e]}))),l)}},B=function(){function e(e,t){var n=this;this._onAnimationFrame=function(e){var t=n._signboard,i=n._lastRenderTime,r=e-i,o=1e3/t.frameRate;(r>=o||i<0)&&(n._increaseScrollOffset(),n.render(),n._lastRenderTime=i+o),n._animationID=requestAnimationFrame(n._onAnimationFrame)},this._signboard=t,this._canvas=e,this._gl=function(e){var t,n="",i=function(e){n=e.statusMessage||"Unknown Error"};if(e.addEventListener(S,i),t=e.getContext("webgl",{})||e.getContext("experimental-webgl"),e.removeEventListener(S,i),!t)throw new s(y(n),_);return e.addEventListener("webglcontextlost",(function(e){e.preventDefault()}),!1),t}(e),this._program=null,this._texture=null,this._lastRenderTime=-1,this._animationID=-1,this._prevScroll=0,this._buffers={position:null,texcoord:null},this._uniforms={uInvTileSize:null,uResolution:null,uEmission:null,uDissipation:null,uBulbSize:null,uTexOffset:null,uTexScale:null,uScrollOffset:null},this._contextLost=!1}var t=e.prototype;return Object.defineProperty(t,"animating",{get:function(){return this._animationID>=0},enumerable:!1,configurable:!0}),Object.defineProperty(t,"canvas",{get:function(){return this._canvas},enumerable:!1,configurable:!0}),Object.defineProperty(t,"gl",{get:function(){return this._gl},enumerable:!1,configurable:!0}),t.destroy=function(){var e,t;this.stop();var n=this._gl,i=null===(e=this._texture)||void 0===e?void 0:e.webGLTexture;n.deleteProgram(this._program),n.deleteBuffer(this._buffers.position),n.deleteBuffer(this._buffers.texcoord),i&&n.deleteTexture(i),null===(t=n.getExtension("WEBGL_lose_context"))||void 0===t||t.loseContext(),this._texture=null,this._contextLost=!0},t.init=function(){if(!this._contextLost){var e=this._gl,t=this._createWebGLProgram();this._program=t,e.useProgram(t),this._bindAttributes(t),this._bindUniforms(t),this.updateUniforms()}},t.setTexture=function(e){e.init(this._gl),this._texture=e,this.updateTextureOffset()},t.resize=function(){var e=this._canvas;e.width=e.clientWidth,e.height=e.clientHeight,this.updateUniforms()},t.start=function(){this._animationID=requestAnimationFrame(this._onAnimationFrame)},t.stop=function(){cancelAnimationFrame(this._animationID),this._animationID=-1,this._lastRenderTime=-1},t.render=function(){var e=this._gl,t=this._texture;if(this._signboard.initialized){if(!t)throw new s(R,m);t.upload(this._gl),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLES,0,6),e.bindTexture(e.TEXTURE_2D,null)}},t.updateUniforms=function(){var e=this._signboard,t=this._gl,n=this._canvas,i=this._uniforms;this._program&&(t.uniform1f(i.uInvTileSize,1/e.tileSize),t.uniform2f(i.uResolution,n.width,n.height),t.uniform1f(i.uEmission,e.emission),t.uniform1f(i.uDissipation,1/e.dissipation),t.uniform1f(i.uBulbSize,e.bulbSize),this._texture&&this.updateTextureOffset())},t.updateTextureOffset=function(){var e=this._signboard,t=this._gl,n=this._texture,i=this._uniforms;if(!n)throw new s(R,m);var r={width:t.drawingBufferWidth,height:t.drawingBufferHeight},o=F(n.size,r,e.objectFit,e.contentType);t.uniform2f(i.uTexOffset,o.x/r.width,o.y/r.height),t.uniform2f(i.uTexScale,r.width/o.width,r.height/o.height)},t._compileShader=function(e,t){var n=this._gl,i=n.createShader(t);if(!i)throw new s(w("Unexpected Error: "+n.getError()),g);if(n.shaderSource(i,e),n.compileShader(i),!n.getShaderParameter(i,n.COMPILE_STATUS))throw new s(w(n.getShaderInfoLog(i)),g);return i},t._createWebGLProgram=function(){var e=this._gl,t=e.createProgram(),n=this._compileShader("#define GLSLIFY 1\nattribute vec4 aPosition;attribute vec2 aTexCoord;varying vec2 vTexCoord;void main(){gl_Position=aPosition;vTexCoord=aTexCoord;}",e.VERTEX_SHADER),i=this._compileShader("precision highp float;\n#define GLSLIFY 1\nvarying vec2 vTexCoord;uniform float uInvTileSize;uniform vec2 uResolution;uniform float uEmission;uniform float uDissipation;uniform float uBulbSize;uniform vec2 uTexOffset;uniform vec2 uTexScale;uniform float uScrollOffset;uniform sampler2D uTexture;float sstep(float edge0,float edge1,float x){x=clamp((x-edge0)/(edge1-edge0),0.0,1.0);return x*x*(3.0-2.0*x);}float circulate(float x,vec2 range){float diff=range[1]-range[0];float maxOffset=mod((x-range[1]),diff);float minOffset=mod((range[0]-x),diff);float ltMin=step(x,range[0]);float gtMax=step(range[1],x);return ltMin*(range[1]-minOffset)+gtMax*(range[0]+maxOffset)+(1.0-ltMin)*(1.0-gtMax)*x;}void main(){vec2 tilesPerSide=floor(uResolution*uInvTileSize);vec2 invTilesPerSide=1.0/tilesPerSide;vec2 tileCenter=floor(vTexCoord*tilesPerSide)*invTilesPerSide+invTilesPerSide*0.5;vec2 diffToCenter=vTexCoord-tileCenter;vec2 distToCenter=diffToCenter*diffToCenter*4.0*tilesPerSide*tilesPerSide;float dist=distToCenter.x+distToCenter.y;float dissipation=1.0-sstep(0.0,pow(uBulbSize,uDissipation),pow(dist,uDissipation));vec2 scrollOffset=vec2(floor(uScrollOffset*tilesPerSide[0])*invTilesPerSide[0],0.0);float invTexScaleHalf=max(uTexScale.x*0.5,0.5);vec2 origTexRange=vec2(0.5-invTexScaleHalf,0.5+invTexScaleHalf);vec2 texUV=(tileCenter-uTexOffset+scrollOffset)*uTexScale;texUV.x=circulate(texUV.x,origTexRange);vec2 inBorderUV=step(vec2(0.0),texUV)*step(texUV,vec2(1.0));float inBorder=step(2.0,inBorderUV.x+inBorderUV.y);gl_FragColor=texture2D(uTexture,texUV)*dissipation*uEmission*inBorder;}",e.FRAGMENT_SHADER);if(e.attachShader(t,n),e.attachShader(t,i),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw new s(O(e.getProgramInfoLog(t)),p);return t},t._bindAttributes=function(e){var t=this._gl,n=t.getAttribLocation(e,"aPosition"),i=t.getAttribLocation(e,"aTexCoord"),r=t.createBuffer(),o=t.createBuffer();this._buffers.position=r,this._buffers.texcoord=o,t.enableVertexAttribArray(n),t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,u,t.STATIC_DRAW),t.vertexAttribPointer(n,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(i),t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,c,t.STATIC_DRAW),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0)},t._bindUniforms=function(e){var t=this._gl,n=this._uniforms;for(var i in n)n[i]=t.getUniformLocation(e,i)},t._increaseScrollOffset=function(){var e=this._signboard,t=this._gl,n=this._texture,i=this._uniforms,r=e.scrollSpeed;if(0!==r){if(!n)throw new s(R,m);var o=this._prevScroll+r*(1e3/e.frameRate)/t.drawingBufferWidth;this._prevScroll=o,t.uniform1f(i.uScrollOffset,o)}},e}(),C=function(){function e(e){this._image=e,this._texture=null}var t=e.prototype;return Object.defineProperty(t,"webGLTexture",{get:function(){return this._texture},enumerable:!1,configurable:!0}),Object.defineProperty(t,"size",{get:function(){return{width:this._image.naturalWidth,height:this._image.naturalHeight}},enumerable:!1,configurable:!0}),t.init=function(e){this._texture=e.createTexture()},t.upload=function(e){e.bindTexture(e.TEXTURE_2D,this._texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,this._image)},t.update=function(e){e&&(this._image.src=e)},e}(),N=function(){function e(e){this._video=e,this._texture=null}var t=e.prototype;return Object.defineProperty(t,"webGLTexture",{get:function(){return this._texture},enumerable:!1,configurable:!0}),Object.defineProperty(t,"size",{get:function(){return{width:this._video.videoWidth,height:this._video.videoHeight}},enumerable:!1,configurable:!0}),t.init=function(e){this._texture=e.createTexture(),this._video.play()},t.upload=function(e){e.bindTexture(e.TEXTURE_2D,this._texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,this._video)},t.update=function(e){if(e){var t=this._video;t.src=e,t.play()}},e}(),G=function(){function e(e){this._signboard=e,this._canvas=document.createElement("canvas"),this._context=this._canvas.getContext("2d"),this._texture=null}var t=e.prototype;return Object.defineProperty(t,"webGLTexture",{get:function(){return this._texture},enumerable:!1,configurable:!0}),Object.defineProperty(t,"size",{get:function(){return{width:this._canvas.width,height:this._canvas.height}},enumerable:!1,configurable:!0}),t.init=function(e){var t=this._signboard.src;this._texture=e.createTexture(),this._drawText(t)},t.update=function(e){var t=this._canvas;this._context.clearRect(0,0,t.width,t.height),this._drawText(null!=e?e:this._signboard.src)},t.upload=function(e){e.bindTexture(e.TEXTURE_2D,this._texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,this._canvas)},t._drawText=function(e){var t=this._canvas,n=this._context,i=this._signboard,r=this._getDrawingOptions();for(var o in r)n[o]=r[o];var a=function(e){if(Array.isArray(e)){if(2===e.length)return[e[0],e[1],e[0],e[1]];if(4===e.length)return e;throw new s(T(e,"textPadding",["number","[number, number]","[number, number, number, number]"]),l)}return[e,e,e,e]}(i.textPadding),u=n.measureText(e);for(var o in t.width=u.actualBoundingBoxRight-u.actualBoundingBoxLeft+a[1]+a[3],t.height=u.actualBoundingBoxDescent-u.actualBoundingBoxAscent+a[0]+a[2],r)n[o]=r[o];n.fillText(e,a[3],a[0])},t._getDrawingOptions=function(){var e=this._signboard;return r({font:"32pt serif",textAlign:"left",fillStyle:"red",textBaseline:"top"},e.textOptions)},e}(),X=function(){function e(e){this._signboard=e}var t=e.prototype;return t.load=function(){return o(this,void 0,Promise,(function(){var e;return a(this,(function(t){switch(e=this._signboard.contentType){case j.IMAGE:return[2,this._loadImage()];case j.VIDEO:return[2,this._loadVideo()];case j.TEXT:return[2,new G(this._signboard)];default:throw new s(T(e,"contentType",Object.keys(j).map((function(e){return j[e]}))),l)}}))}))},t._loadImage=function(){return o(this,void 0,Promise,(function(){var e,t,n;return a(this,(function(i){return e=this._signboard,t=new Image,n=e.src,[2,new Promise((function(i,o){t.addEventListener(A,(function(){i(new C(t))})),t.addEventListener(U,(function(){o(new s(P(n),b))}));var a=r({crossOrigin:"anonymous"},e.contentAttribs);for(var u in a)t.setAttribute(u,a[u]);t.src=n}))]}))}))},t._loadVideo=function(){return o(this,void 0,Promise,(function(){var e,t,n;return a(this,(function(i){return e=this._signboard,t=document.createElement("video"),n=e.src,[2,new Promise((function(i,o){t.addEventListener(L,(function(){i(new N(t))})),t.addEventListener(U,(function(){o(new s(P(n),b))}));var a=r({loop:!0,playsInline:!0,autoplay:!0,crossOrigin:"anonymous"},e.contentAttribs);for(var u in a)t.setAttribute(u,a[u]);t.src=n}))]}))}))},e}(),M=function(){function e(e,t,n){var i=void 0===n?{}:n,r=i.contentType,o=void 0===r?j.IMAGE:r,a=i.contentAttribs,s=void 0===a?{}:a,u=i.autoResize,c=void 0===u||u,f=i.autoInit,l=void 0===f||f,h=i.frameRate,d=void 0===h?60:h,_=i.tileSize,g=void 0===_?8:_,p=i.emission,b=void 0===p?1.5:p,m=i.dissipation,v=void 0===m?.5:m,T=i.bulbSize,x=void 0===T?.7:T,E=i.objectFit,y=void 0===E?I.FILL:E,w=i.textOptions,O=void 0===w?{}:w,P=i.textPadding,R=void 0===P?0:P,S=i.scrollSpeed,A=void 0===S?0:S,U=i.initOnFontLoad,D=void 0!==U&&U;this._renderer=new B(z(e),this),this._src=t,this._texture=null,this._initialized=!1,this._contentType=o,this._contentAttribs=s,this._autoResize=c,this._autoInit=l,this._frameRate=d,this._tileSize=g,this._emission=b,this._dissipation=v,this._bulbSize=x,this._objectFit=y,this._textOptions=O,this._textPadding=R,this._scrollSpeed=A,this._initOnFontLoad=D,this.resize=this.resize.bind(this);var L=Array.isArray(D)?D[0]:D;l&&!L&&this.init(),L&&this._checkFontLoad()}var t=e.prototype;return Object.defineProperty(t,"renderer",{get:function(){return this._renderer},enumerable:!1,configurable:!0}),Object.defineProperty(t,"src",{get:function(){return this._src},enumerable:!1,configurable:!0}),Object.defineProperty(t,"initialized",{get:function(){return this._initialized},enumerable:!1,configurable:!0}),Object.defineProperty(t,"texture",{get:function(){return this._texture},enumerable:!1,configurable:!0}),Object.defineProperty(t,"contentType",{get:function(){return this._contentType},set:function(e){this._contentType=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"contentAttribs",{get:function(){return this._contentAttribs},set:function(e){this._contentAttribs=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"autoResize",{get:function(){return this._autoResize},set:function(e){this._updateAutoResize(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"autoInit",{get:function(){return this._autoInit},enumerable:!1,configurable:!0}),Object.defineProperty(t,"frameRate",{get:function(){return this._frameRate},set:function(e){this._frameRate=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"tileSize",{get:function(){return this._tileSize},set:function(e){this._tileSize=e,this._renderer.updateUniforms(),this._renderer.render()},enumerable:!1,configurable:!0}),Object.defineProperty(t,"emission",{get:function(){return this._emission},set:function(e){this._emission=e,this._renderer.updateUniforms(),this._renderer.render()},enumerable:!1,configurable:!0}),Object.defineProperty(t,"dissipation",{get:function(){return this._dissipation},set:function(e){this._dissipation=e,this._renderer.updateUniforms(),this._renderer.render()},enumerable:!1,configurable:!0}),Object.defineProperty(t,"bulbSize",{get:function(){return this._bulbSize},set:function(e){this._bulbSize=e,this._renderer.updateUniforms(),this._renderer.render()},enumerable:!1,configurable:!0}),Object.defineProperty(t,"objectFit",{get:function(){return this._objectFit},set:function(e){this._objectFit=e,this._renderer.updateTextureOffset(),this._renderer.render()},enumerable:!1,configurable:!0}),Object.defineProperty(t,"textOptions",{get:function(){return this._textOptions},set:function(e){this._textOptions=e,this.update()},enumerable:!1,configurable:!0}),Object.defineProperty(t,"textPadding",{get:function(){return this._textPadding},set:function(e){this._textPadding=e,this.update()},enumerable:!1,configurable:!0}),Object.defineProperty(t,"scrollSpeed",{get:function(){return this._scrollSpeed},set:function(e){this._scrollSpeed=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"initOnFontLoad",{get:function(){return this._initOnFontLoad},enumerable:!1,configurable:!0}),t.destroy=function(){this._renderer.destroy(),this._updateAutoResize(!1),this._initialized=!1},t.init=function(){return o(this,void 0,Promise,(function(){var e,t;return a(this,(function(n){switch(n.label){case 0:return e=this._renderer,[4,new X(this).load()];case 1:return t=n.sent(),this._texture=t,e.resize(),e.init(),e.setTexture(t),this._autoResize&&(this._autoResize=!1,this._updateAutoResize(!0)),this._initialized=!0,this.start(),[2,this]}}))}))},t.resize=function(){var e=this._renderer;return e.resize(),e.render(),this},t.start=function(){var e=this._renderer;return this._contentType===j.VIDEO||0!==this._scrollSpeed?e.start():e.render(),this},t.stop=function(){return this._renderer.stop(),this},t.update=function(e){var t=this._texture;if(!t)throw new s(R,m);return t.update(e),this._renderer.updateUniforms(),this},t._updateAutoResize=function(e){this._autoResize!==e&&(e?window.addEventListener(D,this.resize):window.removeEventListener(D,this.resize),this._autoResize=e)},t._checkFontLoad=function(){var e=this,t=this._textOptions.font;if(t&&!document.fonts.check(t)){var n=this._initOnFontLoad,i=Array.isArray(n)?n[1]:"a";document.fonts.load(t,i).then((function(){e.init()}))}else this.init()},e}();t.ZP=M},8546:function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.d(t,{Z:function(){return s}});var r=n(3552),o=n(7294),a=n(2932),s=function(e){function t(t){var n;return(n=e.call(this,t)||this)._src=t.src,n._canvas=o.createRef(),n}(0,r.Z)(t,e);var n,s,u,c=t.prototype;return c.componentWillUnmount=function(){this._instance.destroy()},c.componentDidMount=function(){this._instance=new a.ZP(this._canvas.current,this._src,Object.assign({},this.props))},c.render=function(){var e=this.props.className;return o.createElement("canvas",{className:e,ref:this._canvas})},n=t,(s=[{key:"instance",get:function(){return this._instance}}])&&i(n.prototype,s),u&&i(n,u),t}(o.Component)}}]);