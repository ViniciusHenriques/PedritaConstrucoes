function myMap() {
            var mapCanvas = document.getElementById("map");
            var myCenterCiclofaixa= new google.maps.LatLng(-29.988383, -50.125102);
            var myCenterPedrita= new google.maps.LatLng(-29.9662074, -50.1347006);
            var myCenterPracaIntegracao= new google.maps.LatLng(-29.997132, -50.140366);            
            var myCenterPracaHugo= new google.maps.LatLng(-29.998038, -50.146285);
            var myCenterPracaLion= new google.maps.LatLng(-29.987005, -50.127716)

            var mapOptions = {center: myCenterPedrita, zoom: 13};
            var map = new google.maps.Map(mapCanvas, mapOptions);

            ciclofaixa(map, myCenterCiclofaixa); 
            pedrita(map, myCenterPedrita);
            pracaIntegracao(map, myCenterPracaIntegracao);
            pracaHugo(map,myCenterPracaHugo);
            pracaLion(map,myCenterPracaLion);
          }

          function ciclofaixa(map, location) {
            var marker = new google.maps.Marker({
              position: location,
              map: map,
              icon:'img/marcador-obra.png'
            });
            var infowindow = new google.maps.InfoWindow({
              content: 'Ciclofaixa' 
            });
            if(window.innerWidth>900){
              google.maps.event.addListener(marker, 'mouseover', function(event) {
                infowindow.open(map,marker);
              });
              google.maps.event.addListener(marker, 'mouseout', function(event) {
                infowindow.close(map,marker);
              });
            }else{
              infowindow.open(map,marker);
            }
          }
          function pedrita(map, location) {
            var marker = new google.maps.Marker({
              position: location,
              map: map,
              icon:'img/marcador-pedrita.png'
            });
            var infowindow = new google.maps.InfoWindow({
              content: 'Pedrita Construções' 
            });
            infowindow.open(map,marker);
            
          }
          function pracaIntegracao(map, location) {
            var marker = new google.maps.Marker({
              position: location,
              map: map,
              icon:'img/marcador-obra.png'
            });
            var infowindow = new google.maps.InfoWindow({
              content: 'Praça Integração' 
            });
            if(window.innerWidth>900){
              google.maps.event.addListener(marker, 'mouseover', function(event) {
                infowindow.open(map,marker);
              });
              google.maps.event.addListener(marker, 'mouseout', function(event) {
                infowindow.close(map,marker);
              });
            }else{
              infowindow.open(map,marker);
            }
            
          }
          function pracaLion(map, location) {
            var marker = new google.maps.Marker({
              position: location,
              map: map,
              icon:'img/marcador-obra.png'
            });
            var infowindow = new google.maps.InfoWindow({
              content: 'Praça Lions Gov.Élido Gomes Martins' 
            });
            if(window.innerWidth>900){
              google.maps.event.addListener(marker, 'mouseover', function(event) {
                infowindow.open(map,marker);
              });
              google.maps.event.addListener(marker, 'mouseout', function(event) {
                infowindow.close(map,marker);
              });
            }else{
              infowindow.open(map,marker);
            }
            
          }
          function pracaHugo(map, location) {
            var marker = new google.maps.Marker({
              position: location,
              map: map,
              icon:'img/marcador-obra.png'
            });
            var infowindow = new google.maps.InfoWindow({
              content: 'Praça Vereador Hugo Moeleck' 
            });
            if(window.innerWidth>900){
              google.maps.event.addListener(marker, 'mouseover', function(event) {
                infowindow.open(map,marker);
              });
              google.maps.event.addListener(marker, 'mouseout', function(event) {
                infowindow.close(map,marker);
              });
            }else{
              infowindow.open(map,marker);
            }
            
          }


        
      