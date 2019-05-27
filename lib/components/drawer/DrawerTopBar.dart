import 'package:flutter_web/material.dart';
import 'package:takeoffandroid_portfolio/components/space/Height24.dart';
import 'package:takeoffandroid_portfolio/components/space/Height4.dart';

import '../../AppColors.dart';
import 'DrawerImage.dart';
import 'DrawerSubTitle.dart';
import 'DrawerTitle.dart';

class DrawerTopBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
            color: AppColors.colorSecondary,
            boxShadow: [BoxShadow(color: Color.fromRGBO(2, 4, 16, 1))]),
        margin: EdgeInsets.fromLTRB(0, 0, 0, 16),
        child: Padding(
          padding: const EdgeInsets.all(36.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              DrawerImage(),
              Height24(),
              DrawerTitle(),
              Height4(),
              DrawerSubTitle(),
            ],
          ),
        ));
  }
}
