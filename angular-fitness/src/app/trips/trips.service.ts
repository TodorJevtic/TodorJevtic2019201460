import { Trips } from "./trips.model";

export class TripsService{
    private trips: Trips [] = [
        {
            id: 1,
            destination: 'Paris',
            type_of_travel: 'bus',
            distance: 150,
            price: 200,
            date: new Date("April 21, 2023 14:15:00"),
            description: 'Pariz, jedna od najlepših i najznačanijih svetskih metropola, najposećeniji je grad na planeti; njegovim elegantnim bulevarima i avenijama godišnje prošeta gotovo trideset miliona turista. Najpoznatiji pariski kvartovi i spomenici, deo su svetske kulturne baštine pod zaštitom UNESCO-a.',
            rating: 5,
            comment:'Stvarno lep grad',
            status:'done',
            imageUrl: 'assets/images/1.jpg'
        },
        {
            id: 2,
            destination: 'London',
            type_of_travel: 'plane',
            distance: 350,
            price: 300,
            date: new Date("July 01, 2023 15:10:00"),
            description: 'London je glavni grad Velike Britanije, sa istorijom starom više od 2000 godina. To je grad koji, bez preterivanja, barem jednom u životu morate posetiti. Ovo je grad koji na svakom koraku odiše britanskom istorijom, ali i svetom u malom. Ipak, London u proleće predstavlja nešto savim, sasvim drugo. U pravom smislu reči, to je megapolis “u cvatu”. Glavni grad Evrope i top 3 metropola sveta, koju u proleće krase boje i osmesi čitave planete.',
            rating: 2,
            comment:'Stvarno lep grad',
            status:'done',
            imageUrl: 'assets/images/2.jpg'
        },
        {
            id: 3,
            destination: 'Atina',
            type_of_travel: 'bus',
            distance: 100,
            price: 100,
            date: new Date("July 27, 2023 08:15:00"),
            description: 'Glavni i najveći grad, smešten na poluostvu Atika na krajnjem jugu kontinentalnog dela teritorije Grčke i samom kraju Balkanskog poluostrva. Dobio je ime po Ateni, mitološkoj boginji mudrosti. ',
            rating: 4,
            comment:'Stvarno lep grad',
            status:'next',
            imageUrl: 'assets/images/3.jpg'
        },
        {
            id: 4,
            destination: 'Budva',
            type_of_travel: 'bus',
            distance: 150,
            price: 200,
            date: new Date("June 2, 2023 01:15:00"),
            description: 'Budva se nalazi u centru Budvanske rivijere i jedan je od napoznatijih turističkih gradova i drevnih naselja na Jadranu. Ovo je idealno mesto za mlade i aktivan odmor. Stari grad čini jedinstvenu arhitektonsku i urbanističku celinu, opasanu srednjovekovnim bedemima, sa tvrđavom, kulama i kapijama. Omiljeno je mesto mladih i prepun zanimljivih kafića. Sveti Stefan, jedno od najekskluzivnijih letovališta na Mediteranu, nastao je adaptacijom kamenih kuća na ostrvu, sagrađenih pre više od pet vekova za zaštitu stanovništva iz okolnih sela u slučaju napada od gusara',
            rating: 5,
            comment:'Stvarno lep grad',
            status:'done',
            imageUrl: 'assets/images/4.jpg'
        },
        {
            id: 5,
            destination: 'Moskva',
            type_of_travel: 'plane',
            distance: 1100,
            price: 500,
            date: new Date("July 25, 2023 01:45:00"),
            description: 'Moskva je  jedan od najstarijih gradova u Evropi. Prvi put se pominje 1147. godine, a od petnaestog veka postaje prestonica ruske države. Taj status Moskva je imala do 1712. kada se glavni grad seli u Sankt Peterburg. Značaj grada nije opadao, a Moskva je postala centar brojnih značajnih događaja za ruski narod. Dvadesetih godina prošlog veka Moskva je postala glavni grad Sovjetskog Saveza i od tada nije gubila taj status.',
            rating: 4,
            comment:'Stvarno lep grad',
            status:'next',
            imageUrl: 'assets/images/5.jpg'
        },
        {
            id: 6,
            destination: 'Dublin',
            type_of_travel: 'plane',
            distance: 350,
            price: 250,
            date: new Date("September 21, 2023 01:00:00"),
            description: 'Prestonicu irske republike Dablin, još ne tako davno su nazivali „kućom za siromašne“ ili „pospanim gradom“. Danas od svega toga nema ni traga. Pun života Dablin nosi epitet „glavnog grada smaragdnog ostrva“. I nema dileme: polovina cele zemlje je prekrivena zelenim lugovima. U prirodi ima mnogo nijansi zelene a simbol države je i zeleni list deteline. Dablin je vrlo komforan i stari grad, bez solitera, koji se prostire na obalama reke Lafi',
            rating: 2,
            comment:'Stvarno lep grad',
            status:'next',
            imageUrl: 'assets/images/6.jpg'
        },
        {
            id: 7,
            destination: 'Abu Dhabi',
            type_of_travel: 'plane',
            distance: 800,
            price: 400,
            date: new Date("January 11, 2023 11:15:00"),
            description: 'Abu Dhabi je glavni grad Ujedinjenih Arapskih Emirata (UAE). Sa 1,5 miliona stanovnika predstavlja jedan od najmodernijih metropola  na svetu, sedište je najvećih svetski naftnih kompanija i amasada. Grad je prepun parkova, zelenih bulevara i svojom sofisticiranom arhitekturom, bulevarima, luksuznom lancima hotela, sigurno će vas  ostavlti   bez daha. Jezgro Abu Dhabija leži na ostrvu klinastog oblika i povezano je sa kopnom mostovima Maqta i Musaffah',
            rating: 5,
            comment:'Stvarno lep grad',
            status:'done',
            imageUrl: 'assets/images/7.jpg'
        },
        {
            id: 8,
            destination: 'Dubai',
            type_of_travel: 'plane',
            distance: 850,
            price: 420,
            date: new Date("January 21, 2023 12:00:00"),
            description: 'Zakoračite u ono što nas čeka već sutra. Doživite čaroliju arapskog sveta, otputujte u Dubai... Uživajte u gradu kontrasta, blistavoj metropoli Persijskog zaliva fascinantne orijentalne gostoprimljivosti. Uostalom, nigde kao u Dubaiju nećete doživeti tako uzbudljiv spoj tradicije i modernog.',
            rating: 4,
            comment:'Stvarno lep grad',
            status:'done',
            imageUrl: 'assets/images/8.jpg'
        },
        {
            id: 9,
            destination: 'NewYork',
            type_of_travel: 'plane',
            distance: 1350,
            price: 700,
            date: new Date("July 21, 2023 02:40:00"),
            description: 'Posetite Njujork, najpoznatiji grad na svetu takođe poznat i kao „grad koji nikada ne spava,“ jedan od najvažnijih privrednih, ekonomskih, političkih i kulturnih centara današnjice, idealan grad za posetioce najrazličitijih životnih opredeljenja, ukusa i afiniteta, jer se u njemu može naći za svakoga ponešto.',
            rating: 5,
            comment:'Stvarno lep grad',
            status:'next',
            imageUrl: 'assets/images/9.jpg'
        },
        {
            id: 10,
            destination: 'Seul',
            type_of_travel: 'plane',
            distance: 1500,
            price: 600,
            date: new Date("October 7 , 2023 17:00:00"),
            description: 'Južna Koreja zauzima južni deo Korejskog poluostrva, a nastala je u doba Hladnog rata kada je poluopstrvo podeljeno na komunistički sever i kapitalistički jug. Južna Koreja je zemlja prožeta tradicijom. Više od stotinu kraljeva vladalo je ovom zemljom i ostavilo iza sebe veliki broj palata. Neke planine su i dalje domaćini šamanskih rituala, a različite ceremonije nastavljaju da igraju važnu ulogu u lokalnom životu. Seul – glavni i najveći grad Južne Koreje koji ima oko 11 miliona stanovnika i sve što možete poželeti od jedne od vodećih svetskih metropola. ',
            rating: 3,
            comment:'Stvarno lep grad',
            status:'done',
            imageUrl: 'assets/images/10.jpg'
        }
        
    ];
    
    getTrips(){
        return this.trips;
    }
}
