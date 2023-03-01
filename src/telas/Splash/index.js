import { View } from 'react-native'
import styles from './styles'
import AnimatedLottieView from 'lottie-react-native'
import splashMedical from '../../assets/splash-aluramed.json'

export default function Splash({navigation}) {

    function animationFinished() {
        navigation.reset({
            index: 0,
            routes: [{name: 'Onboarding'}]
        })
    }

    return <View style={styles.cotainer}>
        <AnimatedLottieView source={splashMedical} loop={false} autoPlay={true} onAnimationFinish={animationFinished} />
    </View>
}