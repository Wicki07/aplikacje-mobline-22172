import React, {Component, Suspense} from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

const OtherComponent = React.lazy(() => import('./ComponentToLoad'))

export default class LazyLoading extends Component {
    render(){ 
        return (
            <View style={styles.content.container}>
                <View style={styles.content.example}>
                    <Text style={styles.content.code}>Przykład 'Lazy loading'.</Text>
                    <Text style={styles.content.code}>Komponent ComponentToLoad jest ładowany/umieszczany za pomocą React.lazy()</Text>
                </View>
                <View style={styles.content.example}>
                    <Suspense fallback={<Text>Ładowanie...</Text>}>
                        <OtherComponent length="1000000"/>
                    </Suspense>
                </View>
            </View>
        )
    };
}