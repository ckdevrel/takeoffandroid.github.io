import 'package:flutter_web/material.dart';

class SocialView extends StatelessWidget {
  List<Widget> socialIconButtons;

  SocialView({@required this.socialIconButtons});

  @override
  Widget build(BuildContext context) {
    return  Container(
      height: 50,
      child: ListView(
        scrollDirection: Axis.horizontal, children: socialIconButtons),
    );
  }
}