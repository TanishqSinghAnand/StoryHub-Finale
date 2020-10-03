import React, { Component } from 'react'
import { Text, View , StyleSheet , Image , ScrollView  } from 'react-native'
import db from '../config';
import { SearchBar } from 'react-native-elements';

export class ReadStoryScreen extends Component {
    constructor(){
        super();
        this.state = {
            input:"",
            allStories:[],
            dataSource:[]
        }
    }
    updateSearch = (search) => {
        this.setState({ input:search });
      };
    retriveStories = async(search) => {
        var allStories= []
        var stories = db.collection("stories").get().then((querySnapshot)=> {
            querySnapshot.forEach((doc)=> {                
                allStories.push(doc.data())
                console.log('this are the stories',allStories)
            })
            this.setState({allStories})
          })

    }
    SearchFilterFunction(text){
        var newData = this.state.allStories.filter((item)=> {
            const data = item.title.toUpperCase() ;
            const inputVal = text.toUpperCase();
            return data.indexOf(inputVal) > -1;
          });
          this.setState({dataSource: newData,input: text});

    }
    componentDidMount(){
        this.retriveStories()
      }
    render() {
        return (
            <ScrollView>
            <View>
                <View>
                    <Image
                        source={require("../assets/StoryHub.png")}
                        style={{width:200, height: 200}}/>
                    <SearchBar
                        placeholder="Enter the story title here"
                        onChangeText={text => this.SearchFilterFunction(text)}
                        value={this.state.input}
                    />
                </View>
                <View>
                {
                  this.state.input === "" ? 
                    this.state.allStories.map((item)=>(
                      <View style={{padding:10,alignItems:'center'}}>
                        <Text style={{color:'blue'}}>
                       Title : {item.title}
                      </Text>
                      <Text style={{color:'blue'}}>
                       Author : {item.author}
                      </Text>
                      <Text style={{color:'blue'}}>
                          Story : {item.story}
                      </Text>
                      </View>
                    ))
                  :
                  this.state.dataSource.map((item)=>(
                    <View style={{padding:10,alignItems:'center'}}>
                      <Text style={{color:'blue'}}>
                       Title : {item.title}
                      </Text>
                      <Text style={{color:'blue'}}>
                       Author : {item.author}
                      </Text>
                      <Text style={{color:'blue'}}>
                          Story : {item.story}
                      </Text>
                    </View>
                  ))
                }
                </View>
                
              </View>
              </ScrollView>
        )
    }
}

export default ReadStoryScreen