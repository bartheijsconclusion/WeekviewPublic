import { ReactElement, createElement } from "react";
import {Text, View} from 'react-native';

// import { WeekviewProps } from "../typings/WeekviewProps";

// import WeekView from 'react-native-week-view';

export function Weekview(): ReactElement {


    return (
    <View>
        <Text>My text inside the widget</Text>
        {/* <WeekView
        events={[
            {
            id: 1,
            description: 'Event',
            startDate: new Date(2021, 3, 15, 12, 0),
            endDate: new Date(2021, 3, 15, 12, 30),
            color: 'blue',
            eventKind: 'standard',
            resolveOverlap: 'stack',
            stackKey: ''
            }
        ]}
        selectedDate={new Date(2021, 3, 15)}
        numberOfDays={7}
        /> */}
    </View>
    );
}
