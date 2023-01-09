import { ScrollView } from 'react-native';
import HomeFooterNavigation from '../Reusable/HomeFooterNavigation';
import { HomeHeader, HomeSalon, HomeAdvantageSalon, HomeMarketing, HomeFeatures, HomeFeatureAppoinment, HomeDigitalSalon, HomeWorks, HomeOffer } from './inedx'

const Home = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <HomeHeader heading={"Hellow Marcel,"} smText={"Welcome to Salonnz, Your Salonnz digital partner"} />
            <HomeSalon />
            <HomeAdvantageSalon />
            <HomeMarketing markText={"Marketing features of our app"} />
            <HomeFeatures
                textHeading={"Features of our website "}
                textOne={"Cool & Attractive Minimal DEsign"}
                textTwo={"Online Booking  Options"}
                textThree={"Dislaying Google & Facebook Review"}
                textfour={"Seo Optimization & Mobile Friendly"}
            />
            <HomeFeatureAppoinment />
            <HomeDigitalSalon />
            <HomeWorks />
            <HomeOffer offerText={"We Offer Trail For 120 Days"} dummyText={"For a limited time we are offering free trial for 120 days for first 25 days salon with $0 set-up free"} />
            <HomeFooterNavigation />
        </ScrollView>
    );
}
export default Home;
