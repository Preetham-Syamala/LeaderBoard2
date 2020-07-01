/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Animated,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Swiper from 'react-native-swiper';

const App: () => React$Node = () => {

  const height = Dimensions.get('window').height
  const sampleUsers = [{
    name: "Chadd Yuan",
    score: 20,
    key: 0
  },{
    name: "Preetham Syamala",
    score: 18,
    key: 1
  },{
    name: "Bhogesh Maddirala",
    score: 17,
    key: 2
  },{
    name: "Noah Kortamp",
    score: 15,
    key: 3
  },{
    name: "Sam Darkwa",
    score: 14,
    key: 4
  },{
    name: "Jackson Chorches",
    score: 14,
    key: 5
  }]

  //SLIDING PANEL
  const [dragRange, setDragRange] = useState({
    top: height - 80,
    bottom: 160
  })

  const _draggedValue = new Animated.Value(180)

  const ModalRef = useRef(null)

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style = {{flex: 1}}>
        <SlidingUpPanel
        ref={ModalRef}
        draggableRange={dragRange}
        animatedValue={_draggedValue}
        backdropOpacity={0}
        snappingPoints={[360]}
        height={height - 60}
        friction={0.9}
        >
          <View style={{flex: 1, backgroundColor: '#222831', borderRadius: 24, padding:
        14}}>
            <View style={styles.PanelHandle}></View>
            <Swiper
            horizontal={true}
            loop={false}
            showsPagination={true}
            dotColor='#eeeeee'
            activeDotColor='#00adb5'
            >
              <View style={{width: Dimensions.get('window').width - 30}}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20,marginVertical: 16, color: '#eeeeee'}}>Leaderboard</Text>
              </View>
              <View style={{height: 500, paddingBottom: 10}}>
                <FlatList
                data = {sampleUsers}
                keyExtractor = {item => item.key}
                renderItem ={({item}) => {
                  return (
                    <View style = {styles.PanelItemContainer}>
                      
                      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      
                        <Text style={{fontSize: 18, color: '#eeeeee'}}>{item.name}</Text>
                      </View>
                      <View>
                      <Text style={{fontSize: 18, color: '#eeeeee', marginHorizontal: 2}}>{item.score}</Text>
                      </View>
                        
                      
                    </View>

                  )
                }}
                ></FlatList>
              </View>
            </View>
            <View style={{width: Dimensions.get('window').width - 37}}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20,marginVertical: 16, color: '#eeeeee'}}>Social Feed</Text>
              </View>
              <View style={styles.Nmessage}>
                <Text style={{color: '#eeeeee'}}>Chadd guessed A</Text>
              </View>
              <View style={styles.Mmessage}>
                <Text style={{color: '#eeeeee'}}>Preetham guessed B</Text>
              </View>
              <View style={styles.Nmessage}>
                <Text style={{color: '#eeeeee'}}>Chadd guessed Curry</Text>
              </View>
              <View style={styles.Mmessage}>
                <Text style={{color: '#eeeeee'}}>Preetham guess Kawhi</Text>
              </View>
            </View>
            
            </Swiper>
            
            
          </View>
        </SlidingUpPanel>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  PanelHandle: {
    height: 5,
    width: 50,
    backgroundColor: '#666',
    alignSelf: 'center',
    marginTop: 6
  },
  PanelItemContainer: {
    padding: 14,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#393e46',
  },
  Nmessage: {
    borderRadius: 20,
    padding: 8,
    width: 170,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#393e46',
    alignItems: 'center'
  },
  Mmessage: {
    borderRadius: 20,
    padding: 8,
    marginTop: 5,
    width: 170,
    marginBottom: 5,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#00adb5'
  }
});

export default App;
