import 'dart:async';

import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:http/http.dart';


void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {


  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: LocationPage(),
    );
  }
}

class LocationPage extends StatefulWidget{
  @override _LocationPageState createState() => _LocationPageState();

}

class _LocationPageState extends State<LocationPage>{
  Position _position;
  StreamSubscription<Position> _positionStream;

  @override
  void initState(){
    super.initState();
    var locationOptions = LocationOptions(accuracy: LocationAccuracy.high,
        distanceFilter: 10);

    _positionStream = Geolocator().getPositionStream(locationOptions)
        .listen((Position position) {
          setState(() {
            print(position);
            _position = position;
          });
    });
  }

  @override
  void dispose(){
    super.dispose();
    _positionStream.cancel();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: AppBar(
      title: Text("LDAMD - Serverless"),
    ),
    body: Center(
      child: Text("Localização: ${_position?.latitude?? '-'}, "
          "${_position?.longitude?? '-'}"),
    ),
    );
  }
}