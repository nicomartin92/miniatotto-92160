import Vuex from 'vuex'
import axios from 'axios'
import {auth, GoogleProvider} from '@/services/fireinit.js'

const createStore = () => {
    return new Vuex.Store({
        state: {
            user: null,
            overlay: false,
            toast: {
                "succes": "Véhicule ajouté",
                "text": "",
                "image": "",
                "url": "",
                "error": "Error"
            },
            countries: [],
            visibleContent: true,
            countCar: 0,
            loadedCars: [
                {
                    "id": 1,
                    "country": "fr",
                    "brandshop": "Ottomobile",
                    "brand": "Peugeot",
                    "model": "305",
                    "version": "GTX",
                    "year": "1985",
                    "reference": "OT104",
                    "color": "#868C8C",
                    "colorname": "Winchester Grey",
                    "image": "/cars/peugeot/peugeot-305-gtx.jpg",
                    "views": [
                        {
                            "image1": "/cars/peugeot/peugeot-305-gtx-profil.jpg",
                            "image2": "/cars/peugeot/peugeot-305-gtx-rear.jpg"
                        }
                    ],
                    "available": false,
                    "sold": false,
                    "keep": true,
                    "price": "90€",
                    "size": "1/18",
                    "description": "",
                    "new": false,
                    "stock": 0,
                    "preference": 3
                },
                {
                    "id": 2,
                    "country": "fr",
                    "brandshop": "Ottomobile",
                    "brand": "Peugeot",
                    "model": "505",
                    "version": "v6",
                    "year": "1987",
                    "reference": "OT057",
                    "color": "#373F52",
                    "colorname": "Bleu Delft",
                    "image": "/cars/peugeot/peugeot-505-v6.jpg",
                    "views": [
                        {
                            "image1": "/cars/peugeot/peugeot-505-v6-profil.jpg",
                            "image2": "/cars/peugeot/peugeot-505-v6-rear.jpg"
                        }
                    ],
                    "available": false,
                    "sold": false,
                    "keep": true,
                    "price": "130€",
                    "size": "1/18",
                    "description": "",
                    "new": false,
                    "stock": 0,
                    "preference": 12
                },
                {
                    "id": 3,
                    "country": "fr",
                    "brandshop": "Ottomobile",
                    "brand": "Renault",
                    "model": "Megane 4",
                    "version": "RS",
                    "year": "2017",
                    "reference": "OT751",
                    "color": "#B92B29",
                    "colorname": "Rouge Flamme",
                    "image": "/cars/renault/renault-megane-rs-trophy.jpg",
                    "views": [
                        {
                            "image1": "/cars/renault/renault-megane-rs-trophy-profil.jpg",
                            "image2": "/cars/renault/renault-megane-rs-trophy-rear.jpg"
                        }
                    ],
                    "available": false,
                    "sold": true,
                    "keep": true,
                    "price": "90€",
                    "size": "1/18",
                    "description": "La Megane RS Trophy de 2018 est la plus puissante des Megane jamais construite. Pour passer la barre des 300 chevaux elle se dote du moteur de sa cousine Alpine dans une version retravaillée. La puissance augmente de 20 chevaux tandis que le couple progresse lui de 20 Nm. La transmission est confiée à une boîte EDC à double embrayage et 6 rapports. Avec une vitesse de pointe de 260 km/h, cette Megane n’a plus grand chose de commun avec une paisible compacte.",
                    "new": false,
                    "stock": 0,
                    "preference": 10
                },
                {
                    "id": 4,
                    "country": "fr",
                    "brandshop": "Ottomobile",
                    "brand": "Alpine",
                    "model": "A110",
                    "version": "v6",
                    "year": "2017",
                    "reference": "OT278",
                    "color": "#0043B2",
                    "colorname": "Bleu Alpine",
                    "image": "/cars/alpine/alpine-a110-premiere-edition.jpg",
                    "views": [
                        {
                            "image1": "/cars/alpine/alpine-a110-premiere-edition-profil.jpg",
                            "image2": "/cars/alpine/alpine-a110-premiere-edition-rear.jpg"
                        }
                    ],
                    "available": false,
                    "sold": true,
                    "keep": true,
                    "price": "90€",
                    "size": "1/18",
                    "description": "Réinterprétation moderne de la Berlinette originale, la Première Edition est lancée au printemps 2017 et marque le retour tant espéré et attendu de la marque. Produite à 1955 exemplaires seulement, cette série limitée rend hommage à l’année de création d’Alpine par Jean Rédélé.",
                    "new": false,
                    "stock": 0,
                    "preference": 7
                },
                {
                    "id": 5,
                    "country": "de",
                    "brandshop": "Ottomobile",
                    "brand": "Bmw",
                    "model": "E36",
                    "version": "M3",
                    "year": "1998",
                    "reference": "OT307",
                    "color": "#4B3F4D",
                    "colorname": "Daytona Violet",
                    "image": "/cars/bmw/bmw-e36-m3-4-doors.jpg",
                    "views": [
                        {
                            "image1": "/cars/bmw/bmw-e36-m3-4-doors-profil.jpg",
                            "image2": "/cars/bmw/bmw-e36-m3-4-doors-rear.jpg"
                        }
                    ],
                    "available": true,
                    "sold": false,
                    "keep": true,
                    "price": "110€",
                    "size": "1/18",
                    "description": "",
                    "new": false,
                    "stock": 3,
                    "preference": 14
                },
                {
                    "id": 6,
                    "country": "de",
                    "brandshop": "Ottomobile",
                    "brand": "Bmw",
                    "model": "E34",
                    "version": "M5 phase 1",
                    "year": "1989",
                    "reference": "OT690",
                    "color": "#101010",
                    "colorname": "Black I 086",
                    "image": "/cars/bmw/bmw-e34-m5-phase-i.jpg",
                    "views": [
                        {
                            "image1": "/cars/bmw/bmw-e34-m5-phase-i-profil.jpg",
                            "image2": "/cars/bmw/bmw-e34-m5-phase-i-rear.jpg"
                        }
                    ],
                    "available": false,
                    "sold": true,
                    "keep": true,
                    "price": "90€",
                    "size": "1/18",
                    "description": "",
                    "new": false,
                    "stock": 0,
                    "preference": 15
                },
                {
                    "id": 7,
                    "country": "fr",
                    "brandshop": "Ottomobile",
                    "brand": "Renault",
                    "model": "Megane 4",
                    "version": "RS Trophy",
                    "year": "2018",
                    "reference": "OT807",
                    "color": "#000000",
                    "colorname": "Noir étoilé",
                    "image": "/cars/renault/renault-megane-rs-trophy-n.jpg",
                    "views": [
                        {
                            "image1": "/cars/renault/renault-megane-rs-trophy-n-profil.jpg",
                            "image2": "/cars/renault/renault-megane-rs-trophy-n-rear.jpg"
                        }
                    ],
                    "available": false,
                    "sold": false,
                    "keep": true,
                    "price": "100€",
                    "size": "1/18",
                    "description": "La Megane RS Trophy de 2018 est la plus puissante des Megane jamais construite. Pour passer la barre des 300 chevaux elle se dote du moteur de sa cousine Alpine dans une version retravaillée.",
                    "new": true,
                    "stock": 0,
                    "preference": 9
                },
                {
                    "id": 8,
                    "country": "it",
                    "brandshop": "Ottomobile",
                    "brand": "Alfa Romeo",
                    "model": "Giulia",
                    "version": "QV Quadrifoglio",
                    "year": "2018",
                    "reference": "OT284",
                    "color": "#AF3432",
                    "colorname": "Rosso Competizione",
                    "image": "/cars/alfa-romeo/alfa-romeo-giulia-quadrifoglio.jpg",
                    "views": [
                        {
                            "image1": "/cars/alfa-romeo/alfa-romeo-giulia-quadrifoglio-profil.jpg",
                            "image2": "/cars/alfa-romeo/alfa-romeo-giulia-quadrifoglio-rear.jpg"
                        }
                    ],
                    "available": false,
                    "sold": true,
                    "keep": true,
                    "price": "120€",
                    "size": "1/18",
                    "description": "L’Alfa Romeo Giulia Quadrifoglio est bouillante comme un volcan italien en éruption. Avec ses 4 sorties d’échappement format XXL, son diffuseur arrière, ses disques en carbone céramique, son capot en carbone, elle renferme une pièce d'orfèvrerie.",
                    "new": false,
                    "stock": 0,
                    "preference": 8
                },
                {
                    "id": 9,
                    "country": "de",
                    "brandshop": "Ottomobile",
                    "brand": "Audi",
                    "model": "RS4",
                    "version": "B7",
                    "year": "2006",
                    "reference": "OT721",
                    "color": "#8F8F91",
                    "colorname": "Daytona Grey",
                    "image": "/cars/audi/audi-rs4-b7.jpg",
                    "views": [
                        {
                            "image1": "/cars/audi/audi-rs4-b7-profil.jpg",
                            "image2": "/cars/audi/audi-rs4-b7-rear.jpg"
                        }
                    ],
                    "available": true,
                    "sold": false,
                    "keep": false,
                    "price": "90€",
                    "size": "1/18",
                    "description": "Soucieux de proposer une sportive à tout type de clientèle, Audi propose son fameux label RS et transforme le tranquille break des familles. Animé par le V8 420ch, vous ne rechignerez plus pour aller faire (la) les courses !",
                    "new": false,
                    "stock": 1
                },
                {
                    "id": 10,
                    "country": "de",
                    "brandshop": "Ottomobile",
                    "brand": "Bmw",
                    "model": "E46",
                    "version": "M3 CSL",
                    "year": "2003",
                    "reference": "G034",
                    "color": "#000000",
                    "colorname": "Black",
                    "image": "/cars/bmw/bmw-e46-m3-csl.jpg",
                    "views": [
                        {
                            "image1": "/cars/bmw/bmw-e46-m3-csl-profil.jpg",
                            "image2": "/cars/bmw/bmw-e46-m3-csl-rear.jpg"
                        }
                    ],
                    "available": false,
                    "sold": false,
                    "keep": true,
                    "price": "200€",
                    "size": "1/12",
                    "description": "(R)évolution de la M3 E46, la CSL se veut plus puissante (360ch), plus précise (trains revus) et plus légère (1385kg) que sa grande sœur. Le kit carrosserie évolue pour la rendre plus bestiale (pare-chocs, malle arrière avec becquet intégré, jantes en 19 et toit tout carbone). ",
                    "new": true,
                    "stock": 0,
                    "preference": 2
                },
                {
                    "id": 11,
                    "country": "fr",
                    "brandshop": "Ottomobile",
                    "brand": "Renault",
                    "model": "Clio 4",
                    "version": "R.S. 16 Concept",
                    "year": "2016",
                    "reference": "OT629",
                    "color": "#F0C80E",
                    "colorname": "Jaune Sirius",
                    "image": "/cars/renault/concept-car-clio-rs-16.jpg",
                    "views": [
                        {
                            "image1": "/cars/renault/concept-car-clio-rs-16-profil.jpg",
                            "image2": "/cars/renault/concept-car-clio-rs-16-rear.jpg"
                        }
                    ],
                    "available": true,
                    "sold": false,
                    "keep": false,
                    "price": "110€",
                    "size": "1/18",
                    "description": "(R)évolution de la M3 E46, la CSL se veut plus puissante (360ch), plus précise (trains revus) et plus légère (1385kg) que sa grande sœur. Le kit carrosserie évolue pour la rendre plus bestiale (pare-chocs, malle arrière avec becquet intégré, jantes en 19 et toit tout carbone). ",
                    "new": true,
                    "stock": 1,
                    "preference": 22
                },
                {
                    "id": 12,
                    "country": "fr",
                    "brandshop": "Ottomobile",
                    "brand": "Renault",
                    "model": "Clio 4",
                    "version": "R.S",
                    "year": "2015",
                    "reference": "OT257",
                    "color": "#E1E5E4",
                    "colorname": "Blanc perle Mica",
                    "image": "/cars/renault/renault-clio-4-rs.jpg",
                    "views": [
                        {
                            "image1": "/cars/renault/renault-clio-4-rs-profil.jpg",
                            "image2": "/cars/renault/renault-clio-4-rs-rear.jpg"
                        }
                    ],
                    "available": false,
                    "sold": false,
                    "keep": true,
                    "price": "110€",
                    "size": "1/18",
                    "description": "La version RS de la Renault Clio 4 se distingue de ses sœurs par un bouclier et un becquet spécifiques, de nouvelles jantes et un diffuseur d’air. ",
                    "new": true,
                    "stock": 0,
                    "preference": 16
                },
                {
                    "id": 13,
                    "country": "fr",
                    "brandshop": "Ottomobile",
                    "brand": "Renault",
                    "model": "Clio 2",
                    "version": "R.S",
                    "year": "2004",
                    "reference": "OT552",
                    "color": "#F6EC6D",
                    "colorname": "Sirius Yellow",
                    "image": "/cars/renault/renault-clio-2-rs-ph-3.jpg",
                    "views": [
                        {
                            "image1": "/cars/renault/renault-clio-2-rs-ph-3-profil.jpg",
                            "image2": "/cars/renault/renault-clio-2-rs-ph-3-rear.jpg"
                        }
                    ],
                    "available": false,
                    "sold": false,
                    "keep": true,
                    "price": "140€",
                    "size": "1/18",
                    "description": "",
                    "new": false,
                    "stock": 0,
                    "preference": 5
                },
                {
                    "id": 14,
                    "country": "jp",
                    "brandshop": "Ottomobile",
                    "brand": "Nissan",
                    "model": "Patrol",
                    "version": "GR Y60",
                    "year": "1992",
                    "reference": "OT265",
                    "color": "#2F2C46",
                    "colorname": "Blue & Silver",
                    "image": "/cars/nissan-patrol-gr.jpg",
                    "views": [
                        {
                            "image1": "/cars/nissan-patrol-gr-profil.jpg",
                            "image2": "/cars/nissan-patrol-gr-rear.jpg"
                        }
                    ],
                    "available": false,
                    "sold": true,
                    "keep": false,
                    "price": "90€",
                    "size": "1/18",
                    "description": "(R)évolution de la M3 E46, la CSL se veut plus puissante (360ch), plus précise (trains revus) et plus légère (1385kg) que sa grande sœur. Le kit carrosserie évolue pour la rendre plus bestiale (pare-chocs, malle arrière avec becquet intégré, jantes en 19 et toit tout carbone). ",
                    "new": false,
                    "stock": 0
                },
                {
                    "id": 15,
                    "country": "de",
                    "brandshop": "GT Spirit",
                    "brand": "Bmw",
                    "model": "M235",
                    "version": "I",
                    "year": "2014",
                    "reference": "GT039",
                    "color": "#700C0E",
                    "colorname": "red",
                    "image": "/cars/bmw/bmw-m235i-01-3.jpg",
                    "views": [
                        {
                            "image1": "/cars/bmw/bmw-m235i-01-3-profil.jpg",
                            "image2": "/cars/bmw/bmw-m235i-01-3-rear.jpg"
                        }
                    ],
                    "available": false,
                    "sold": false,
                    "keep": true,
                    "price": "115€",
                    "size": "1/18",
                    "description": "Derrière son aspect extérieur relativement sage, la M 235i cache un précieux atout qui saurait convaincre n’importe quel amateur de conduite sportive : un moteur 6 cylindres de 326 chevaux délivré aux seules roues arrières. Un coupé véritablement conçu pour le plaisir.",
                    "new": true,
                    "stock": 1
                },
                {
                    "id": 16,
                    "country": "fr",
                    "brandshop": "Ottomobile",
                    "brand": "Peugeot",
                    "model": "306",
                    "version": "Maxi MK1 - Panizzi",
                    "year": "1996",
                    "reference": "OT664",
                    "color": "#053CB1",
                    "colorname": "#7 Panizzi - Tour de Corse",
                    "image": "/cars/peugeot/peugeot-306-maxi-mk1.jpg",
                    "views": [
                        {
                            "image1": "/cars/peugeot/peugeot-306-maxi-mk1-profil.jpg",
                            "image2": "/cars/peugeot/peugeot-306-maxi-mk1-rear.jpg"
                        }
                    ],
                    "available": true,
                    "sold": true,
                    "keep": false,
                    "price": "115€",
                    "size": "1/18",
                    "description": "La 306 Maxi fut la reine des Kit-cars, notamment sur l’asphalte. Aux mains de Gilles et Hervé Panizzi, elle gagna plusieurs championnats de France des rallyes. Elle fit également plusieurs apparitions remarquées en championnat du monde.",
                    "new": false,
                    "stock": 1
                },
                {
                    "id": 17,
                    "country": "de",
                    "brandshop": "Ottomobile",
                    "brand": "Audi",
                    "model": "RS2",
                    "version": "RS",
                    "year": "1994",
                    "reference": "OT831",
                    "color": "#000000",
                    "colorname": "Noir Brillant Vernis",
                    "image": "/cars/audi/audi-rs2.jpg",
                    "views": [
                        {
                            "image1": "/cars/audi/audi-rs2-profil.jpg",
                            "image2": "/cars/audi/audi-rs2-rear.jpg"
                        }
                    ],
                    "available": true,
                    "sold": true,
                    "keep": true,
                    "price": "104€",
                    "size": "1/18",
                    "description": "Présentée à Francfort en 1993, l’Audi RS2 apparaît sous les traits d’un banal break Audi 80. Pourtant cette sportive va révolutionner le créneau des familiales.",
                    "new": false,
                    "stock": 2
                },
                {
                    "id": 18,
                    "country": "fr",
                    "brandshop": "Ottomobile",
                    "brand": "Renault",
                    "model": "Clio",
                    "version": "16v ph2",
                    "year": "1995",
                    "reference": "OT744",
                    "color": "#141B40",
                    "colorname": "Monaco Blue",
                    "image": "/cars/renault/renault-clio-16v-ph2.jpg",
                    "views": [
                        {
                            "image1": "/cars/renault/renault-clio-16v-ph2-profil.jpg",
                            "image2": "/cars/renault/renault-clio-16v-ph2-rear.jpg"
                        }
                    ],
                    "available": true,
                    "sold": false,
                    "keep": true,
                    "price": "95€",
                    "size": "1/18",
                    "description": "La Clio 16 soupapes avait une lourde tâche à assumer. Succéder aux mythiques Renault 5 Turbo et Supercinq GT Turbo dans la dynastie des petites sportives du constructeur.",
                    "new": true,
                    "stock": 2
                },
                {
                    "id": 19,
                    "country": "fr",
                    "brandshop": "Ottomobile",
                    "brand": "Peugeot",
                    "model": "205",
                    "version": "GTI 1.9 ph2",
                    "year": "1989",
                    "reference": "G041",
                    "color": "#184DAD",
                    "colorname": "Blue Miami",
                    "image": "/cars/peugeot/peugeot-205-gti-19.jpg",
                    "views": [
                        {
                            "image1": "/cars/peugeot/peugeot-205-gti-19-profil.jpg",
                            "image2": "/cars/peugeot/peugeot-205-gti-19-rear.jpg"
                        }
                    ],
                    "available": true,
                    "sold": false,
                    "keep": true,
                    "price": "199€",
                    "size": "1/12",
                    "description": "On dit de cette voiture qu’elle a sauvé la marque au lion dans les années 80. Si la Peugeot 205 est depuis longtemps devenue une icône, c’est en grande partie grâce à cette version GTI, sortie le 1er mars 1984.",
                    "new": true,
                    "stock": 1,
                    "preference": 1
                },
                {
                    "id": 20,
                    "country": "it",
                    "brandshop": "Ottomobile",
                    "brand": "Alfa Romeo",
                    "model": "Stelvio",
                    "version": "Quadrifoglio",
                    "year": "2017",
                    "reference": "OT830",
                    "color": "#D0CFCA",
                    "colorname": "White",
                    "image": "/cars/alfa-romeo/alfa-romeo-stelvio-quadrifoglio-w.jpg",
                    "views": [
                        {
                            "image1": "/cars/alfa-romeo/alfa-romeo-stelvio-quadrifoglio-w-profil.jpg",
                            "image2": "/cars/alfa-romeo/alfa-romeo-stelvio-quadrifoglio-w-rear.jpg"
                        }
                    ],
                    "available": true,
                    "sold": false,
                    "keep": false,
                    "price": "95€",
                    "size": "1/18",
                    "description": "Le Stelvio porte à sa sortie en 2017, tous les espoirs de la marque Alfa Romeo. Ce SUV sportif reprend tous les codes de la catégorie mais pas seulement.",
                    "new": true,
                    "stock": 1,
                    "preference": 19
                },
                {
                    "id": 21,
                    "country": "it",
                    "brandshop": "Ottomobile",
                    "brand": "Alfa Romeo",
                    "model": "Stelvio",
                    "version": "Quadrifoglio",
                    "year": "2017",
                    "reference": "OT285",
                    "color": "#710507",
                    "colorname": "Rosso Competizione",
                    "image": "/cars/alfa-romeo/alfa-romeo-stelvio-quadrifoglio.jpg",
                    "views": [
                        {
                            "image1": "/cars/alfa-romeo/alfa-romeo-stelvio-quadrifoglio-profil.jpg",
                            "image2": "/cars/alfa-romeo/alfa-romeo-stelvio-quadrifoglio-rear.jpg"
                        }
                    ],
                    "available": false,
                    "sold": false,
                    "keep": true,
                    "price": "95€",
                    "size": "1/18",
                    "description": "Le Stelvio porte à sa sortie en 2017, tous les espoirs de la marque Alfa Romeo. Ce SUV sportif reprend tous les codes de la catégorie mais pas seulement.",
                    "new": false,
                    "stock": 0,
                    "preference": 17
                },
                {
                    "id": 22,
                    "country": "fr",
                    "brandshop": "Ottomobile",
                    "brand": "Peugeot",
                    "model": "205",
                    "version": "GTI Gutmann",
                    "year": "1988",
                    "reference": "OT796",
                    "color": "#000000",
                    "colorname": "Black",
                    "image": "/cars/peugeot/peugeot-205-gti-gutmann.jpg",
                    "views": [
                        {
                            "image1": "/cars/peugeot/peugeot-205-gti-gutmann-profil.jpg",
                            "image2": "/cars/peugeot/peugeot-205-gti-gutmann-rear.jpg"
                        }
                    ],
                    "available": true,
                    "sold": false,
                    "keep": true,
                    "price": "110€",
                    "size": "1/18",
                    "description": "Pour la génération qui lisait Option Auto dans les années 80, le nom de Gutmann rappellera un certain Kurt Gutmann. Celui-ci, après avoir fait ses armes dans la préparation de Talbot se penche sur les voitures du Lion à la sortie de la 205 GTI.",
                    "new": true,
                    "stock": 2,
                    "preference": 11
                },
                {
                    "id": 23,
                    "country": "de",
                    "brandshop": "Paragon",
                    "brand": "Bmw",
                    "model": "X4",
                    "version": "Xdrive",
                    "year": "2014",
                    "reference": "PA01",
                    "color": "#5C6063",
                    "colorname": "sophisto gris métallique",
                    "image": "/cars/bmw/x4.jpg",
                    "views": [
                        {
                            "image1": "/cars/bmw/x4-profil.jpg",
                            "image2": "/cars/bmw/x4-rear.jpg",
                            "image3": "/cars/bmw/x4-open.jpg"
                        }
                    ],
                    "available": true,
                    "sold": false,
                    "keep": false,
                    "price": "55",
                    "size": "1/18",
                    "description": "Les BMW X4 M sont des voitures de caractère. Elles combinent l'athlétisme d'une voiture M avec le tempérament expressif d'une BMW X4. Le résultat : quatre voitures de sport très impressionnantes pour un maximum de passion et d'adrénaline.",
                    "new": true,
                    "stock": 1,
                    "preference": 20
                },
                {
                    "id": 24,
                    "country": "fr",
                    "brandshop": "Ottomobile",
                    "brand": "Citroen",
                    "model": "Xsara",
                    "version": "Sport Ph.1",
                    "year": "2000",
                    "reference": "OT305",
                    "color": "#CC3A32",
                    "colorname": "rouge",
                    "image": "/cars/citroen/citroen-xsara-sport-ph1.jpg",
                    "views": [
                        {
                            "image1": "/cars/citroen/citroen-xsara-sport-ph1-profil.jpg",
                            "image2": "/cars/citroen/citroen-xsara-sport-ph1-rear.jpg"
                        }
                    ],
                    "available": true,
                    "sold": false,
                    "keep": false,
                    "price": "90",
                    "size": "1/18",
                    "description": "La Xsara venait remplacer la ZX en gardant la même recette. Une allure discrète mais un châssis exceptionnel. Pourtant, grâce à ses multiples victoires en rallyes avec Sébastien Loeb, la marque aux chevrons n’oublie pas la sportivité.",
                    "new": true,
                    "stock": 2,
                    "preference": 21
                },
                {
                    "id": 25,
                    "country": "fr",
                    "brandshop": "Ottomobile",
                    "brand": "Renault",
                    "model": "5",
                    "version": "Baccara",
                    "year": "1984",
                    "reference": "OT764",
                    "color": "#584848",
                    "colorname": "Brun Arabica",
                    "image": "/cars/renault/renault-super-5-baccara.jpg",
                    "views": [
                        {
                            "image1": "/cars/renault/renault-super-5-baccara-profil.jpg",
                            "image2": "/cars/renault/renault-super-5-baccara-rear.jpg"
                        }
                    ],
                    "available": true,
                    "sold": false,
                    "keep": true,
                    "price": "90",
                    "size": "1/18",
                    "description": "En 1988, 4 ans après son lancement, Renault offre à sa Super 5 une version haut de gamme. Celle-ci reçoit le quatre cylindres de 1721 cm3 de 90 ch.",
                    "new": true,
                    "stock": 2,
                    "preference": 23
                },
                {
                    "id": 26,
                    "country": "fr",
                    "brandshop": "Ottomobile",
                    "brand": "Peugeot",
                    "model": "405",
                    "version": "MI 16 Le Mans",
                    "year": "1993",
                    "reference": "OT756",
                    "color": "#840000",
                    "colorname": "Rouge Lucifer",
                    "image": "/cars/peugeot/peugeot-405-mi16-le-mans.jpg",
                    "views": [
                        {
                            "image1": "/cars/peugeot/peugeot-405-mi16-le-mans-profil.jpg",
                            "image2": "/cars/peugeot/peugeot-405-mi16-le-mans-rear.jpg"
                        }
                    ],
                    "available": true,
                    "sold": false,
                    "keep": true,
                    "price": "100",
                    "size": "1/18",
                    "description": "La Peugeot 405 Mi16 Le Mans est une série limitée à 150 exemplaires, en exclusivité pour le marché français. Disponible uniquement en rouge, elle arbore des logos “Le Mans” et une silhouette de 905 sur les portes avant.",
                    "new": true,
                    "stock": 3,
                    "preference": 13
                },
                {
                    "id": 27,
                    "country": "de",
                    "brandshop": "Ottomobile",
                    "brand": "Bmw",
                    "model": "Z3",
                    "version": "M coupe 3.2",
                    "year": "1999",
                    "reference": "OT318",
                    "color": "#233E95",
                    "colorname": "Estoril Blau",
                    "image": "/cars/bmw/bmw-z3-m-coupe-32.jpg",
                    "views": [
                        {
                            "image1": "/cars/bmw/bmw-z3-m-coupe-32-profil.jpg",
                            "image2": "/cars/bmw/bmw-z3-m-coupe-32-rear.jpg"
                        }
                    ],
                    "available": true,
                    "sold": false,
                    "keep": true,
                    "price": "100",
                    "size": "1/18",
                    "description": "La BMW Z3 Coupé arrive après la déclinaison roadster. Cela ne l’empêche pas d’acquérir instantanément le statut de BMW inoubliable. La ligne de break de chasse est atypique et permet de partir en vacances avec sa sportive préférée.",
                    "new": true,
                    "stock": 1,
                    "preference": 18
                },
                {
                    "id": 28,
                    "country": "fr",
                    "brandshop": "Ottomobile",
                    "brand": "Renault",
                    "model": "21",
                    "version": "turbo ph1",
                    "year": "1986",
                    "reference": "OT798",
                    "color": "#000000",
                    "colorname": "Noir",
                    "image": "/cars/renault/renault-21-turbo-ph1.jpg",
                    "views": [
                        {
                            "image1": "/cars/renault/renault-21-turbo-ph1-profil.jpg",
                            "image2": "/cars/renault/renault-21-turbo-ph1-rear.jpg"
                        }
                    ],
                    "available": true,
                    "sold": false,
                    "keep": false,
                    "price": "90",
                    "size": "1/18",
                    "description": "Véritable emblème de son époque, la version la plus sportive de la gamme Renault 21 apparaît en 1987.",
                    "new": true,
                    "stock": 1,
                    "preference": 24
                }
            ],
            newCars: []
        },
        mutations: {
            setUser(state, payload) {
                state.user = payload
            },

            setCars(state, cars) {
                state.loadedCars = cars
            },

            addCar(state, car) {
                state.loadedCars.push(car)
            },

            incrementCar(state) {
                state.countCar++
            },

            addCountry(state, name) {
                state.countries.push(name)
            },

            newCars(state, cars) {
                state.newCars = cars
            },

            overlay(state, value) {
                state.overlay = value
            }
        },
        actions: {
            signInWithGoogle({ commit }) {
                return new Promise((resolve, reject) => {
                    auth.signInWithRedirect(GoogleProvider)
                    this.$router.push('/admin')
                    resolve()
                })
            },

            increment(context) {
                setTimeout(() => {
                    context.commit('incrementCar')
                    console.warn('increment car')
                }, 1000)
            },

            getCountry({ commit }, name) {
                axios.get('https://restcountries.eu/rest/v2/name/' + name)
                    .then(function (response) {
                        if (response.data[0]) {
                            commit('addCountry', response.data[0].name)
                        }
                    })
            },

            loadCars({ commit }) {
                commit('overlay', true);
                axios.get('http://localhost:3001/cars')
                    .then((response) => {
                        if (response.data[0]) {
                            commit('newCars', response.data[0]);
                            commit('overlay', false);
                        }
                    })

            }

            /* async fetch ({ store, params }) {
              let { data } = await axios.get('../api/cars')
              store.commit('setCars', data)
            },
            setCars({ commit }, cars) {
              commit('setCars', cars)
            } */
        },
        getters: {
            loadedCars(state) {
                return state.loadedCars
            },

            frenchCars(state) {
                return state.loadedCars.filter(car => car.country === 'fr')
            },

            germanCars(state) {
                return state.loadedCars.filter(car => car.country === 'de')
            },

            italianCars(state) {
                return state.loadedCars.filter(car => car.country === 'it')
            },

            sizeCars18(state) {
                return state.loadedCars.filter(car => car.size === '1/18')
            },

            sizeCars12(state) {
                return state.loadedCars.filter(car => car.size === '1/12')
            },

            preferenceCars(state) {
                let sort = state.loadedCars.filter(car => car.preference > 0).sort((a, b) => {
                    return a.preference - b.preference
                })
                return sort
            },

            stockCars(state) {
                let stock = state.loadedCars.filter(car => car.available === true && car.stock > 0)
                return stock
            },

            getCorrectCarById: (state) => (id) => {
                let result = state.loadedCars.filter(car => car.id === id)
                return result
            },

            getCorrectCarByRef: (state) => (ref) => {
                let result = state.loadedCars.filter(car => car.reference === ref)
                return result
            },

            countCar(state) {
                return state.countCar
            },

            getVisibleContent(state) {
                return state.visibleContent
            }
        }
    })
}

export default createStore
