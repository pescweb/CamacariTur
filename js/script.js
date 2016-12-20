function adSetter(){
// alert(navigator.userAgent);
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-8613086499405343~9958833704',
        interstitial: 'ca-app-pub-8613086499405343~9958833704'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-8613086499405343~9958833704',
        interstitial: 'ca-app-pub-8613086499405343~9958833704'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-8613086499405343~9958833704',
        interstitial: 'ca-app-pub-8613086499405343~9958833704'
    };
}

if(window.AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    isTesting:true,
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );

  if(window.AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );


}
  function onDeviceReady(){
  // alert("device ready");
      adSetter();
  }


function domLoaded(){
 document.addEventListener("deviceready", onDeviceReady, false);
}
