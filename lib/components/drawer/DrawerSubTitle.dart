import 'package:flutter_web/material.dart';

class DrawerSubTitle extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Text("Mobile Developer",
        style: TextStyle(
            fontFamily: "Lato",
            fontSize: 12,
            color: Color.fromRGBO(193, 191, 203, 1)),
        textAlign: TextAlign.center);
  }
}
