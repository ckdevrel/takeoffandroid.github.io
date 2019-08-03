import 'package:flutter_web/material.dart';

import 'HomeMobilePage.dart';
import 'HomeWebPage.dart';
import 'ResponsiveWidget.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Chandrasekar Portfolio',
      theme: ThemeData(
        primarySwatch: Colors.indigo,
      ),
      home: ResponsiveWidget(largeScreen: HomeWebPage(), smallScreen: HomeMobilePage(), mediumScreen: HomeMobilePage())
    );
  }
}

