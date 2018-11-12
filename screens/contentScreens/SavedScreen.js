import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { explores } from '../../contentImages';
class SavedScreen extends Component {
    state = {
        ExploreItems: explores
    }

    render() {
        return (
            <ScrollView>
                <Text style={styles.textStyle}> {this.state.ExploreItems[1].name}</Text>
                <View style={styles.container}>
                    <Image source={{uri: this.state.ExploreItems[1].img}}
                    style={styles.imageStyle}>
                </Image>
                </View>

                <Text style={styles.textStyle}> {this.state.ExploreItems[2].name}</Text>
                <View style={styles.container}>
                    <Image source={{uri: this.state.ExploreItems[2].img}}
                    style={styles.imageStyle}></Image>
                </View>

                <Text style={styles.textStyle}> {this.state.ExploreItems[4].name}</Text>
                <View style={styles.container}>
                    <Image source={{uri: this.state.ExploreItems[4].img}}
                    style={styles.imageStyle}></Image>
                </View>

                
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    textStyle: {

        color: "#2f4f4f",
        fontWeight: "normal",
        fontSize: 30,
        marginLeft: 13,
        marginTop: 10,
        marginBottom: 15
    },
    imageStyle: {
        width: 320,
        height: 200,
        
    }
});

export default SavedScreen;

