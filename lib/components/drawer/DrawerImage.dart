import 'package:flutter_web/material.dart';

class DrawerImage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SizedBox(
        width: 90,
        height: 90,
        child: CircleAvatar(
          backgroundImage: NetworkImage('https://i.imgur.com/R0Rzcsv.png'),
        ));
  }
}
