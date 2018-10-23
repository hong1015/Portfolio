/*---------------- Loading ----------------*/
/*create a new event
var body = new Event('body');

//check if body is available 
var intID = setInterval(function(){
    if(document.body){
        document.dispatchEvent(body);
        clearInterval(intID);
    }
}, 10);
    
//create HTML fragment

var newFragment = function (html){
    var fragment = document.createDocumentFragment();
    var temp = document.createElement('div');
    
    temp.innerHTML = html;
    
    while(temp.firstChild)
        fragment.appendChild(temp.firstChild);
    return fragment;
};

//preloader markup
var preloader = newFragment('<div id="loadScreen"><div id="loading"><img src="images/loading.gif"></div></div>');

//insert preloader when body is ready
document.addEventListener('body', function(){
    document.body.insertBefore(preloader, document.body.childNodes[0]);
}); 
*/
//remove preloader markup
function removePreloader(){
    var preloader = document.getElementById('loadScreen');
    preloader.style.opacity = 1;    
    
    var loaderAnimationID = setInterval(function(){
        preloader.style.opacity -= 0.1;
        if(preloader.style.opacity <= 0.2){
            preloader.parentNode.removeChild(preloader);
            clearInterval(loaderAnimationID);
        }
    }, 70);
};

if (window.addEventListener){
    window.addEventListener("load", removePreloader, false);       
}else if (window.attachEvent){ // IE 8 or lower
    window.attachEvent( "on"+ "load", removePreloader);
} else {
      alert("Loading error!");
};
/*---------------- animation frame rate ----------------*/

window.requestAnimFrame = (function () {	      
    return  window.requestAnimationFrame       || 	              
        window.webkitRequestAnimationFrame || 	             
        window.mozRequestAnimationFrame    || 	              
        window.oRequestAnimationFrame      || 	             
        window.msRequestAnimationFrame     || 	             
        function(/* function */ callback, /* DOMElement */ element){	              
        window.setTimeout(callback, 1000 / 60);		              
    };		    
})();

/*---------------- boucing aniamtion ----------------*/

var bouces = document.getElementById("bouce");
    bouceText = 0;
    y = -2;
    fade=0;
    oPvalue=1;

function boucing(){			
    bouceText += (y - bouceText) * 0.02; 
    bouces.style.top = bouceText + 'em';
    fade += (oPvalue - fade) *0.02;
    bouces.style.opacity = fade;
              
    if(Math.abs(y - bouceText ) <1){
        y = 2;
		oPvalue=0.2;
         
        if(Math.abs(y - bouceText ) <1){        
             y = -2;   
             oPvalue=1;       
         }
    }  
    requestAnimFrame(boucing);	

};

if(window.addEventListener){
    window.addEventListener("load", boucing, false); 
}else if(window.attachEvent){ // IE 8 || lower
    window.attachEvent("on" + "load", boucing);
}else{
    window["on"+"load"] = boucing;
};

/*---------------- skill bars ----------------*/

var aboutMe = document.getElementById("about");
    bhtml = document.getElementById("barHtml");
    css = document.getElementById("css3");
    jScript = document.getElementById("js");
    jq = document.getElementById("jq");
    rea = document.getElementById("react");
    ngr = document.getElementById("angular");
    ps = document.getElementById("photoshop");
    illustrator = document.getElementById("il");
    ph = document.getElementById("php");
    bhw = 0;
    csw = 0;
    jsw = 0;
    jqw = 0;
    phw = 0;
    psw = 0;
    ilw = 0;
    ngrw = 0;
    reaw = 0;

function moveIt() {	
    bhw += (99 - bhw) * 0.025;	
    bhtml.style.width = bhw + "%";
    bhtml.style.background = "#8acbf1";          
    
    csw += (99 - csw) * 0.025;			
    css.style.width = csw + "%";           
    css.style.background = "#8acbf1";
    
    jsw += (90 - jsw) * 0.025;
    jScript.style.width = jsw + "%";  
    jScript.style.background = "#8acbf1";
    
    jqw += (95 - jqw) * 0.025;
    jq.style.width = jqw + "%";
    jq.style.background = "#8acbf1";

    reaw += (60 - reaw) * 0.025
    rea.style.width = reaw + "%";
    rea.style.background = "#8acbf1";

    ngrw += (60 - ngrw) * 0.025
    ngr.style.width = ngrw + "%";
    ngr.style.background = "#8acbf1";

    phw += (50 - phw) * 0.025
    ph.style.width = phw + "%";
    ph.style.background = "#8acbf1";
    
    psw += (90 - psw) * 0.025
    ps.style.width = psw + "%";
    ps.style.background = "#8acbf1";
    
    ilw += (75 - ilw) * 0.025
    illustrator.style.width = ilw + "%";
    illustrator.style.background = "#8acbf1";
    

    
    requestAnimFrame(moveIt, aboutMe);
    
    if (aboutMe.removeEventListener){ 
        aboutMe.removeEventListener('mouseover', moveIt,false);
    }else if (aboutMe.detachEvent ) {// IE 8 or lower
        aboutMe.detachEvent ("on"+'mouseover', moveIt);
    }else {
        alert("Event cant be remove!");
    }
		
};

   if (aboutMe.addEventListener){
      aboutMe.addEventListener("mouseover", moveIt,false);
   }else if (aboutMe.attachEvent) { // IE 8 or lower
      aboutMe.attachEvent("on"+"mouseover", moveIt);
   }
   else { 
      aboutMe["on"+"mouseover"] = moveIt;
   };


/*---------------- smooth scroll ----------------*/

var allLinks = document.getElementsByTagName('a');
var ss = {
  checkLinks: function() {

    for (var i=0;i<allLinks.length;i++) {
      var link = allLinks[i];
      if ((link.href && link.href.indexOf('#') != -1) && 
          ( (link.pathname == location.pathname) ||
	    ('/'+link.pathname == location.pathname) ) && 
          (link.search == location.search)) {
        /* If link are begins with '#' use the smoothScroll function as an onclick event */
          ss.addEvent(link,'click',ss.smoothScroll);
      }
    }
  },

  smoothScroll: function(e) {

    if (window.event) {
      target = window.event.srcElement;
    } else if (e) {
      target = e.target;
    } else return;

    // Check if the target is an element, not a text node within an element
    if (target.nodeName.toLowerCase() != 'a') {
      target = target.parentNode;
    }
  
    //  Double check this is an A tag
    if (target.nodeName.toLowerCase() != 'a') return;
  
    /* Find the <a name> tag corresponding to this href and strip off the hash (first character) using by -1 */
    anchor = target.hash.substr(1);
    // Now loop all A tags until we find one with that name
    var destinationLink = null;
    for (var i=0;i<allLinks.length;i++) {
      var link = allLinks[i];
      if (link.name && (link.name == anchor)) {
        destinationLink = link;
        break;
      }
    }
    if (!destinationLink) destinationLink = document.getElementById(anchor);

    // If destination is not found, let the browser search it automatically
      
    if (!destinationLink) return true;
  
    // Find the destination's position
    var destx = destinationLink.offsetLeft; 
    var desty = destinationLink.offsetTop -10; /* - 10px can add space at the top */
    var thisNode = destinationLink;
    while (thisNode.offsetParent && 
          (thisNode.offsetParent != document.body)) {
      thisNode = thisNode.offsetParent;
      destx += thisNode.offsetLeft;
      desty += thisNode.offsetTop;
    }
  
    // Stop scrolling
    clearInterval(ss.INTERVAL);
  
    cypos = ss.getCurrentYPos();
  
    ss_stepsize = parseInt((desty-cypos)/ss.STEPS);
    ss.INTERVAL =
setInterval('ss.scrollWindow('+ss_stepsize+','+desty+',"'+anchor+'")',20);
  
    if (window.event) {
      window.event.cancelBubble = true;
      window.event.returnValue = false;
    }
    if (e && e.preventDefault && e.stopPropagation) {
      e.preventDefault();
      e.stopPropagation();
    }
  },

  scrollWindow: function(scramount,dest,anchor) {
    wascypos = ss.getCurrentYPos();
    isAbove = (wascypos < dest);
    window.scrollTo(0,wascypos + scramount);
    iscypos = ss.getCurrentYPos();
    isAboveNow = (iscypos < dest);
    if ((isAbove != isAboveNow) || (wascypos == iscypos)) {
      // if we've just scrolled past the destination, or
      // we haven't moved from the last scroll (i.e., we're at the
      // bottom of the page) then scroll exactly to the link
      window.scrollTo(0,dest);
      // cancel the repeating timer
      clearInterval(ss.INTERVAL);
      /* jump to the link directly so the URL's right
      location.hash = anchor; grey out to add spcae at the top */
    }
  },

  getCurrentYPos: function() {
    if (document.body && document.body.scrollTop)
      return document.body.scrollTop;
    if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
    if (window.pageYOffset)
      return window.pageYOffset;
    return 0;
  },

  addEvent: function(elm, evType, fn, useCapture) {
    // add and remove event
      
    if (elm.addEventListener){
      elm.addEventListener(evType, fn, useCapture);
      return true;
    } else if (elm.attachEvent){
      var r = elm.attachEvent("on"+evType, fn);
      return r;
    } else {
      alert(" Event Handler not removed");
    }
  } 
}

ss.STEPS = 30;

ss.addEvent(window,"load",ss.checkLinks);

