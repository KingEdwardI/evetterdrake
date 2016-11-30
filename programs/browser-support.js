    isMobile(): {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent);
    }
    isMobileMessage = 'WebGL is not supported on your platform/browser.';
    
    detectBrowserType() {
      // detect browser
      var userAgent = window.navigator.userAgent;
      var browser = "";
      if userAgent.indexOf('Firefox') != -1 {
        var browser = "Firefox"; // from userAgent
      }
      if ( userAgent.indexOf('Safari') != -1 && userAgent.indexOf('Chrome') == -1 ) {
        var browser = "Safari";
      }
      if ( userAgent.indexOf('iPhone') != -1 ) {
        var browser = "iPhone";
      }
      if ( userAgent.indexOf('iPod') != -1 ) {
        var browser = "iPod";
      }
      if ( userAgent.indexOf('iPad') != -1 ) {
        var browser = "iPad";
      }     
      if ( userAgent.indexOf('Edge') != -1 ) {
        var browser = "Edge";
      }     
      if ( userAgent.indexOf('Trident') != -1 ) {
        var browser = "Trident";
      }     
      if ( userAgent.indexOf('Chrome') != -1 ) {
        var browser = "Chrome";
      }     
      if ( userAgent.indexOf('Android') != -1 ) {
        var browser = "Android";
      }     
      if ( userAgent.indexOf('BlackBerry') != -1 ) {
        var browser = "BlackBerry";
      }     
      if ( userAgent.indexOf('Opera Mini') != -1 ) {
        var browser = "Opera Mini";
      }     
    }
      // detect OS type
  detectOsType() {
      var osType = "";
      if ( userAgent.indexOf('Macintosh') != -1 ) {
        var osType = "Mac";
      }
      if ( userAgent.indexOf('Windows') != -1 ) {
        var osType = "Windows";
      }
      if ( userAgent.indexOf('Linux') != -1 ) {
        var osType = "Linux";
      }
    }
