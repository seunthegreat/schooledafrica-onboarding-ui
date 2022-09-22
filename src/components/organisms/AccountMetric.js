import React from 'react';
import { View} from 'react-native';
import MetricCard from '../molecules/MetricCard';

const AccountMetric = (props) => {
    //--create type--//
    const winRate = props.winRate;
    const journaledTrades = props.journaledTrades;
    const accountability = props.accountability;
    const acutePoints = props.acutePoints;

    return (
        <View>
            <View style = {accountMetricContainer}>
                <MetricCard title = 'Win Rate (%)' value = {winRate}/>
                <MetricCard title = 'Journaled Trades' value = {journaledTrades} right/>
            </View>
            <View style = {{flexDirection:'row', width: '85%', justifyContent:'space-between'}}>
                <MetricCard title = 'Accountability' value = {accountability}/>
                <MetricCard title = 'Acute Points' value = {acutePoints} right/>
            </View>
        </View>
    );
};

export default AccountMetric;

const accountMetricContainer = {
    flexDirection:'row', 
    width: '85%', 
    justifyContent:'space-between'
}
