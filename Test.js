import React, {Component} from 'react';
import {
    View, StyleSheet, Text, TouchableOpacity
} from 'react-native';

export default class Test extends Component {
    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <TouchableOpacity style={{
                    paddingVertical: 20,
                    paddingHorizontal: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'red',
                    borderTopLeftRadius:9.4,
                    borderBottomLeftRadius:5,
                }}>
                    <Text>CLick</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
