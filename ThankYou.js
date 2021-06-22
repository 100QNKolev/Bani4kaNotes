import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';

class ThankYou extends Component {
    render() {
        return (
            <View>
                <Text>
                    Ти добави нова бележка! 
                </Text>
                <Button title='Назад'
                onPress={
                    () => this.props.navigation.navigate('NoteList')
                }
                />
            </View>
        )
    }
};

export default ThankYou