@echo off


:: Navigate to the 'dist' folder where Angular build output is located
cd .\dist\new-app\


:: Concatenate the JavaScript files into a single bundle.js
copy runtime*.js .\..\..\..\app\angular2\runtime.js
copy polyfills*.js .\..\..\..\app\angular2\polyfills.js
copy main*.js .\..\..\..\app\angular2\main.js
copy vendor*.js .\..\..\..\app\angular2\vendor.js


:: Optionally, remove the individual files if you no longer need them
:: del runtime*.js polyfills*.js main*.js


exit

