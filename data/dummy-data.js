import Category from '../models/category';
import Player from '../models/player';

export const CATEGORIES = [
    new Category('c1','Forwards','#E05A25'),
    new Category('c2','Midfielders','#85E025'),
    new Category('c3','Defenders','#2592E0'),
    new Category('c4','Goal Keepers','#1AE2E8'),
    new Category('c5','Managers','#CCCCCC')
];

export const PLAYERS = [
    new Player('p1',['c1'],'Cristiano Ronaldo','ST','Portugal','https://wallpaperaccess.com/full/1935782.jpg','Manchester United','37','8 Goals & 3 Assists in 19 PL Games',false,false),
    new Player('p2',['c1'],'Zlatan Ibrahimovic','ST','Sweden','https://library.sportingnews.com/2021-08/zlatan-ibrahimovic-napoli-v-milan-serie-a-11222020_zlatan_ibrahimovic_napoli_v_milan_serie_a_11222020_1r9ufcolwlxj5ziine8ubrnls.jpg','AC Milan','40','8 Goals & 2 Assists in 15 Serie A matches',false,true),
    new Player('p3',['c1'],'Mohammed Salah','RWF','Egypt','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpybBptAyMNgjyP5_ZFF31cPS9WNh6PdOCcQ&usqp=CAU','Liverpool','29','Current Top Scorer of PL with 16 Goals',false,false),
    new Player('p4',['c1'],'Neymar','LWF','Brazil','https://s.yimg.com/ny/api/res/1.2/kG3qMdpY5MJ13EUq19allQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/uu/api/res/1.2/MQscF6timLuak59_DmrStQ--~B/aD0yMjc3O3c9MzQxNTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/1a190be67727480f3319fe49000e4f71','PSG','30','Most expensive signing (222 million Euros) from Barcelona to PSG',false,true),
    new Player('p5',['c1'],'Sergio Aguero','ST','Argentina','https://e0.365dm.com/20/10/1600x900/skysports-sergio-aguero-manchester-city_5141755.jpg?20201017191114','Barcelona','33','Scored 260 Goals for Manchester City in 390 Games',true,true),
    
    new Player('p6',['c2'],'Toni Kroos','CM','Germany','https://weallfollowunited.com/wp-content/uploads/2017/05/Toni-Kroos-HD-Background-.jpg','Real Madrid','32','Won the FIFA World Cup 2014 and a hattrick of UCL',false,false),
    new Player('p7',['c2'],'N\'Golo Kante','CDM','France','https://images.alphacoders.com/113/1138489.jpg','Chelsea','30','Won the FIFA World Cup 2018',false,false),
    new Player('p8',['c2'],'Kevin De Bruyne','CAM','Belgium','https://www.thesun.co.uk/wp-content/uploads/2021/01/1ce311ff-0d2f-4ebe-865e-043b72b3fccb.jpg?strip=all&w=960','Manchester City','30','Provided 20 assists in a single 38 Games PL season',false,false),
    new Player('p9',['c2'],'Bastian Schweinsteiger','CM','Germany','https://getwalls.io/media/large/2020/01/hd-bastian-schweinsteiger-wallpapers-and-photos-large-121141386.jpg','Bayern Munich','35','Won the FIFA World Cup 2014',true,false),
    new Player('p10',['c2'],'Paul Pogba','CM','France','https://www.teahub.io/photos/full/129-1293532_paul-pogba-photos-download.jpg','Manchester United','28','Won the FIFA World Cup 2018',false,false),
    new Player('p11',['c2'],'Patrick Vieira','CDM','France','https://wallpapercave.com/wp/wp4614548.jpg','Arsenal','45','Was the captain of "The Invincibles" Arsenal Team in 2003/04',true,false),
    
    new Player('p12',['c3'],'Sergio Ramos','CB','Spain','https://images3.alphacoders.com/106/1061700.jpg','PSG','35','Is a Real Madrid Legend playing more than 650 Games for the Club',false,true),
    new Player('p13',['c3'],'Virgil Van Dijk','CB','Netherlands','https://wallpapercave.com/wp/wp4329325.jpg','Liverpool','30','Won the UCL and PL with Liverpool',false,false),
    new Player('p14',['c3'],'Andrew Robertson','LB','Scotland','https://media.gettyimages.com/photos/andrew-robertson-of-liverpool-looks-on-during-the-uefa-champions-d-picture-id1287684079?s=612x612','Liverpool','27','Scottish captain who won the PL and UCL with Liverpool',false,false),
    new Player('p15',['c3'],'Trent Alexander Arnold','RB','England','https://cdn.resfu.com/scripts/tmp_images/goal_taa-cropped_7r9fol9luwwo1rcnkwpmpz4wz.jpg','Liverpool','23','Currently has the highest number of assists in the PL 2021/22 season',false,false),
    new Player('p16',['c3'],'Theo Hernandez','LB','France','https://www.footballwood.com/wp-content/uploads/2020/12/theo-hernandez.jpg','AC Milan','24','Has 9 G+A contirbutions in 20 Serie A matches',false,false),
    new Player('p17',['c3'],'Ruben Dias','CB','Portugal','https://wallpaperaccess.com/full/6179508.jpg','Manchester City','24','Won the PL with Manchester City in 2020-21 Season',false,false),
    new Player('p18',['c3'],'Javier Zanetti','RB','Argentina','https://wallpapercave.com/wp/wp2369263.jpg','Inter Milan','48','Won the Treble as the captain of Inter Milan in 2009/10 Season',true,true),
    
    new Player('p19',['c4'],'Alisson Becker','GK','Brazil','https://static.toiimg.com/thumb/msid-81203766,width-1200,height-900,resizemode-4/.jpg','Liverpool','29','Has 11 clean sheets with Liverpool in 21 Matches this season',false,false),
    new Player('p20',['c4'],'Ederson Moraes','GK','Brazil','https://w0.peakpx.com/wallpaper/496/516/HD-wallpaper-sports-ederson-moraes-manchester-city-f-c.jpg','Manchester City','28','Won multiple PL titles with Manchester City',false,false),
    new Player('p21',['c4'],'Iker Casillas','GK','Spain','https://www.teahub.io/photos/full/113-1135770_iker-casillas.jpg','Real Madrid','38','Played in Real Madrid for 16 years',true,true),
    new Player('p22',['c4'],'Manuel Neuer','GK','Germany','https://wallpapercave.com/wp/wp1830780.jpg','Bayern Munich','35','Germany\'s No.1 has won multiple Bundesliga Title with Bayern Munich',false,true),
    new Player('p23',['c4'],'Kasper Schmeichel','GK','Denmark','https://1x.news/wp-content/uploads/2021/06/kasper-schmeichel.jpeg','Leicester City','35','Reached the Semi-Finals of Euro 2020 as the Denmark Captain',false,false),

    new Player('p24',['c5'],'Jurgen Klopp','MANAGER','Germany','https://images.daznservices.com/di/library/GOAL_INTERNATIONAL/df/a9/hd-jurgen-klopp_nz5ihhrtp2ez11tjj4pi1wyty.jpg?t=-436233993&quality=100','Liverpool','54','Is regarded as one of the best German Coaches in the world',false,false),
    new Player('p25',['c5'],'Pep Guardiola','MANAGER','Spain','https://wallpapercave.com/wp/wp2298253.jpg','Manchester City','51','Managed Barcelona, Bayern Munich and Manchester City successfully adding trophies to his cabinet.',false,false),
    new Player('p26',['c5'],'Arsene Wenger','MANAGER','France','https://www.arsenal.com/sites/default/files/styles/large/public/images/csp_weng_app_220996_0015.jpg?itok=7upUIQkk','Arsenal','72','Managed "The Invincibles" Arsenal Team in 2003/04 season',true,false),
    new Player('p27',['c5'],'Sir Alex Ferguson','MANAGER','Scotland','https://c4.wallpaperflare.com/wallpaper/664/563/705/alex-ferguson-football-player-football-coach-ayr-united-manchester-united-men-s-black-jacket-wallpaper-preview.jpg','Manchester United','80','Is regarded as one of the best managers of all time.',true,false),
];