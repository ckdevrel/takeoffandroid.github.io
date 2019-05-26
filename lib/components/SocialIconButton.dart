import 'package:flutter_web/material.dart';

class SocialIconButton extends StatelessWidget {

  String icon;

  SocialIconButton(this.icon);

  @override
  Widget build(BuildContext context) {
    return IconButton(iconSize: 40,
        padding: EdgeInsets.fromLTRB(0, 0, 10, 0),
        icon: Image.asset(icon),
        onPressed: null);
  }
}