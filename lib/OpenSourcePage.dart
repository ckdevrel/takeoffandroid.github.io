import 'package:flutter_web/material.dart';

class OpenSourcePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(48.0),
      child: new ListView(
        children: <Widget>[
          Text('MASTERING ANDROID STUDIO TEMPLATE CREATION',
              style: TextStyle(color: Colors.pinkAccent, fontSize: 40)),
          SizedBox(height: 24),
          Text('FLUTTER',
              style: TextStyle(color: Colors.grey, fontSize: 18)),
          SizedBox(height: 4),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('Flutter Examples', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),

          SizedBox(height: 24),
          Text('ANDROID STUDIO TEMPLATES',
              style: TextStyle(color: Colors.grey, fontSize: 18)),
          SizedBox(height: 4),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('Recyclerview Template', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('Material Tabs Template', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('Login Template', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),

          SizedBox(height: 24),
          Text('ANDROID',
              style: TextStyle(color: Colors.grey, fontSize: 18)),
          SizedBox(height: 4),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('App Intro Animation', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('Material Dialog Searchview', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('Material Dialog Bottomsheet', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('URL Linkview', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('Seat Booking Recyclerview', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('Video ChatHeads', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('Material Pager Recycler Gridview', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('Icon Color Changer', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('Material Percent Drawer', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('SnackBar', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('Material Circle Progressbar', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('MultiSelect Recycler Gallery gridview', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('Spannable Textview', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('Shimmer Contactsview', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('Header Footer Recyclerview', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
        ],
      ),
    );
  }

  openLink(String url) async {
//    if (await canLaunch(url)) {
//      await launch(url);
//    } else {
//      throw 'Could not launch $url';
//    }
  }
}
