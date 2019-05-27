import 'package:flutter_web/material.dart';
import 'package:takeoffandroid_portfolio/components/space/Width16.dart';

class DrawerRow extends StatelessWidget {

  String icon, title;

  Function() onPressed;


  DrawerRow(this.title, this.icon, {this.onPressed});

  @override
  Widget build(BuildContext context) {
    return MaterialButton(
      padding: EdgeInsets.fromLTRB(36, 0, 0, 0),
      child: new Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            Image.asset(icon),
            Width16(),
            new Text(title,
                textAlign: TextAlign.start,
                style: TextStyle(
                    fontFamily: "Lato",
                    fontSize: 14,
                    color: Color.fromRGBO(207, 209, 233, 1),
                    fontWeight: FontWeight.w100))
          ]),
      onPressed: onPressed,
    );
  }
}
