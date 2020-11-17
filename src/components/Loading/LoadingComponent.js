import * as React from 'react';
import { View } from 'react-native';
import { LoadingStyles as styles } from './LoadingComponentStyles';

const Loading = (props) => {

    let height = props.height || 15;
    let width = props.width || 'auto';

    return(
        <View style={styles.container}>
            <View style={{
                backgroundColor: `#d6d6d6`,
                borderRadius: 5,
                height: height,
                marginRight: 5,
                width: width
            }} />
        </View>
    )
}

export default Loading;