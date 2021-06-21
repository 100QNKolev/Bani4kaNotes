import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';

class ThankYou extends Component {
    render() {
        return (
            <View>
                <Text>
                    You added note
                </Text>
                <Button title='Go to notes'
                onPress={
                    () => this.props.navigation.navigate('NoteList')
                }
                />
            </View>
        )
    }
};

export default ThankYou