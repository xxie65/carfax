var username = 'xxie65@gmail.com';
var password = 'carfaxpassword';

var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36',
    pageSettings: {
        loadImages: false,//The script is much faster when this field is set to false
        loadPlugins: false
    }
});

casper.start('https://www.carfax.com/showroom/#/login', function() {
    this.fill('form[name="form"]', {
        'username': username,
        'password': password
    });
    this.click('#loginButton')
});

//Wait to be redirected to the Home page, and then make a screenshot
casper.waitForUrl(/dashboard/,function(){
    this.capture('AfterLogin.png');
    this.echo(this.fetchText('#username'));
});

casper.run();