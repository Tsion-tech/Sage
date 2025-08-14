import { FlatList, Text, View } from "react-native";

export default function LazyLoad() {

    const data = Array.from({ length: 1000 },
        (_, i) => ({ id: i.toString(), name: `Item ${i + 1}` }));
    console.log(data)
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text style={{ margin: 20,width:100,height:50, backgroundColor: "purple" }}>
                        {item.name}
                    </Text>

                )}
            />

        </View>


    )

}