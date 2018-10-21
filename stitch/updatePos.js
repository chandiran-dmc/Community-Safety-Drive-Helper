exports = function(arg){

  
  var collection = context.services.get("mongodb-atlas").db("CarReports").collection("Report");

  collection.updateOne(
    {'user.id': context.user.id}, 
    { $set: {
        loc: {
          type: "Point",
          coordinates: [parseFloat(arg.loc.coordinates[0]), parseFloat(arg.loc.coordinates[1])]
        },
        name: arg.name,
        category: arg.category
    }},
    {upsert: true}
  );
  return context.functions.execute("function0", [arg.loc.coordinates[0], arg.loc.coordinates[1]]);
};
