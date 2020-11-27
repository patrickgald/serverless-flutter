//:::  Função de cálculo da distância extraído de :                           :::
//:::  https://www.geodatasource.com                                          :::
//:::                                                                         :::
//:::  GeoDataSource.com (C) All Rights Reserved 2018                         :::
//:::                                                                         :::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


const campus = {
  "unidades": [{
    "name": "PUC Minas Betim",
    "lat": -19.9550665,
    "long": -44.2006218
  },
  {
    "name": "PUC Minas Contagem",
    "lat": -19.9392565,
    "long": -44.0785583
  },
  {
    "name": "PUC Minas Coração Eucarístico",
    "lat": -19.9228571,
    "long": -43.9947837
  },
  {
    "name": "PUC Minas Praça da Liberdade",
    "lat": -19.9332735,
    "long": -43.9393371
  },
  {
    "name": "PUC Minas São Gabriel",
    "lat": -19.8594004,
    "long": -43.9211194
  },
  {
    "name": "PUC Minas Serro",
    "lat": -18.6065523,
    "long": -43.3859671
  },
  {
    "name": "PUC Minas Poços de Caldas",
    "lat": -21.7992514,
    "long": -46.6007147
  },
  {
    "name": "PUC Minas Uberlandia",
    "lat": -18.9240915,
    "long": -48.2975936
  }]
}

const latMe = -19.954131421451592;
const longMe = -44.198834108726565;

function distance(lat1, lon1, lat2, lon2) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		let radlat1 = Math.PI * lat1/180;
		let radlat2 = Math.PI * lat2/180;
		let theta = lon1-lon2;
		let radtheta = Math.PI * theta/180;
		let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		dist = dist * 1.609344
		return dist;
	}
}

function getDistanceToCampus(latNow, longNow){
    
    for (let index in campus.unidades){
        let latSearch = campus.unidades[index].lat;
        let longSearch = campus.unidades[index].long;
        
        let distanceCalc = distance(latNow, longNow, latSearch, longSearch);
        
        if(distanceCalc < 0.3) 
            return campus.unidades[index].name;
    }
    
    return false;
}

console.log(getDistanceToCampus(latMe, longMe));
