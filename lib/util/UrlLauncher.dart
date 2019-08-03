import 'dart:html' as html;

class UrlLauncher {

   static void openUrl (String url, String name){
     html.window.open(url, name);
   }
}