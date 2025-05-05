const SalesData = {
    dataCollected : Array.from({length:30}, (_,i) => {
        const day = String(i+1).padStart(2,"0");
        return{
            timestamp: `2025-05-${day}`,
            amount:Math.floor(200+Math.random()*300),  // Random amount between 200–500
        };
    }),
    salesTotal:0,
};

SalesData.salesTotal = SalesData.dataCollected.reduce((acc,cur) => acc + cur.amount,0 );

const SubscriptionsData = {
    dataCollected: Array.from({length:30},(_,i) => {
        const day = String(i+1).padStart(2,"0");
        return{
            timestamp:`2025-05-${day}`,
            amount:Math.floor(100 + Math.random() * 200), // Random amount between 100–300
        };
    }),
    subscriptionsTotal:0
};

SubscriptionsData.subscriptionsTotal = SubscriptionsData.dataCollected.reduce((acc,cur) => acc + cur.amount,0);

export {SalesData, SubscriptionsData};
