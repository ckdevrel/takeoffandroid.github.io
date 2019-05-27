import 'package:flutter_web/material.dart';

class DrawerTitle extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Text(
      "CHANDRASEKAR K",
      style: TextStyle(
          fontFamily: "Lato",
          fontSize: 14,
          color: Colors.white,
          fontWeight: FontWeight.w100),
      textAlign: TextAlign.center,
    );
  }
}