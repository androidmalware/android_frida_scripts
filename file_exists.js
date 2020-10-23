//author @lukasstefanko
//idea @_bagipro

Java.perform(function() {
    
    var file = Java.use("java.io.File")
    var fileInput = Java.use("java.io.FileInputStream")

    
    file.exists.implementation = function(){
       	if ( (this.getAbsolutePath().startsWith("/data/data/")) && (this.getAbsolutePath().endsWith(".so")) ){
                console.log("[+ Native Library - exists() - internal storage] " +this.getAbsolutePath())
	        return this.exists()
	}else{
	        return this.exists()
	}
        
    }

    file.$init.overload("java.lang.String").implementation = function (s) {
        if ( (s.startsWith("/storage/emulated/0/") || s.startsWith("/sdcard")) && (s.endsWith(".7z") || s.endsWith(".zip")) ) {
	    console.log("[*] ZIP File opened: " + s.toString());

	}
	return file.$init.apply(this, arguments);
    }

    fileInput.$init.overload('java.lang.String').implementation = function(a){
        if ( (a.startsWith("/storage/emulated/0/") || a.startsWith("/sdcard")) && (a.endsWith(".7z") || a.endsWith(".zip")) ) {
        	console.log("[+] ZIP FileInputStream: " + a)
        }
        return this.$init(a)
    }

});
