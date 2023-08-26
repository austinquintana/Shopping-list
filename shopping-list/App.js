// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import the screens
import ShoppingLists from './components/ShoppingLists';
// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBXBF0uhd7ARJYT7xWl3xrnyFa0SuNnGLg",
    authDomain: "shopping-list-demo-33d93.firebaseapp.com",
    projectId: "shopping-list-demo-33d93",
    storageBucket: "shopping-list-demo-33d93.appspot.com",
    messagingSenderId: "109816491714",
    appId: "1:109816491714:web:0ae1b880ab805f0554555b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);


  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listsContainer}
        data={lists}
        renderItem={({ item }) =>
          <View style={styles.listItem}>
            <Text >{item.name}: {item.items.join(", ")}</Text>
          </View>
        }
      />
      <View style={styles.listForm}>
        <TextInput
          style={styles.listName}
          placeholder="List Name"
          value={listName}
          onChangeText={setListName}
        />
        <TextInput
          style={styles.item}
          placeholder="Item #1"
          value={item1}
          onChangeText={setItem1}
        />
        <TextInput
          style={styles.item}
          placeholder="Item #2"
          value={item2}
          onChangeText={setItem2}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => { }}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      {Platform.OS === "ios" ? <KeyboardAvoidingView behavior="padding" /> : null}
    </View>
  )

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    listItem: {
      height: 70,
      justifyContent: "center",
      paddingHorizontal: 30,
      borderBottomWidth: 1,
      borderBottomColor: "#AAA",
      flex: 1,
      flexGrow: 1
    },
    listForm: {
      flexBasis: 275,
      flex: 0,
      margin: 15,
      padding: 15,
      backgroundColor: "#CCC"
    },
    listName: {
      height: 50,
      padding: 15,
      fontWeight: "600",
      marginRight: 50,
      marginBottom: 15,
      borderColor: "#555",
      borderWidth: 2
    },
    item: {
      height: 50,
      padding: 15,
      marginLeft: 50,
      marginBottom: 15,
      borderColor: "#555",
      borderWidth: 2
    },
    addButton: {
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      backgroundColor: "#000",
      color: "#FFF"
    },
    addButtonText: {
      color: "#FFF",
      fontWeight: "600",
      fontSize: 20
    }
  });
}

export default App;
