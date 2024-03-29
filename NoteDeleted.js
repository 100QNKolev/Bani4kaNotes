import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';

class NoteDeleted extends Component {
    render() {
        return (
            <View>
                <Text>
                    The note has been deleted.
                </Text>
                <Button title='Към бележки'
                onPress={
                    () => this.props.navigation.navigate('NoteList')
                }
                />
            </View>
        )
    }
};

export default NoteDeleted