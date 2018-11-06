/*db.getCollection('orders').aggregate(
{$match: {}},
{$group: {
        _id: "$eyeColor",
        total: {$sum: 1}}
    });
*/
/*
db.getCollection('orders').aggregate(
{$match: {}},
{$group: {
        _id: "$gender",
        avarage_Age: {$avg: "$age"}}
    });
*/
//db.getCollection('orders').find()
/*db.getCollection('orders').aggregate(
{$match: {}},
{$group: {
        _id: "$customer",
        total: {$max: "$total"}}
    });
*/
/*db.getCollection('orders').aggregate(
{$match: {}},
{$group: {
        _id: "$customer",
        total: {$sum: "$total"}}},
        {$sort: {total: -1}}
    );
*/    
/*db.getCollection('orders').aggregate(
{$match: {product: "book"}},
{$group: {
        _id: "$eyeColor",
        total: {$sum: "$total"}}},
        {$sort: {total: 1}}
    );
*/
/*
db.getCollection('orders').aggregate(
{$match: {}},
{$group: {
        _id: "$gender",
        avarage_Age: {$avg: "$age"},
                _id: "$customer",
        maximum: {$max: "$total"},
                _id: "$customer",
        total_cust: {$sum: "$total"}}}
    );
 */ 
/*
 db.getCollection('pubsandrestaurants').aggregate([
{$match: {cuisine: "Italian"}},
{$group: {
        _id: "$borough",
        "total_per": {$sum: 1}}}
    ]);
 */
 /*
 db.getCollection('pubsandrestaurants').aggregate([
{$group: {
        _id: "$borough",
        "total_rest": {$sum: 1}}},
{$match: {"total_rest": {$gt: 200}}}
    ]);      
*/
/*
db.getCollection('pubsandrestaurants').aggregate([
{$match: {"cuisine": "American "}},
{$unwind:"$categories"},
{$group: {
        _id: "$categories.category",
        "avg_score": {$avg: "$categories.score"}}}
    ]);  
 */  
/*
db.getCollection('pubsandrestaurants').aggregate([
{$match: {"cuisine": "American "}},
{$unwind:"$categories"},
{$group: {
        _id: "$categories.category",
        "avg_score": {$avg: "$categories.score"}}}
    ]);  
*/        