## Set up MongoDB locally
[Install MongoDB](https://docs.mongodb.com/manual/administration/install-community/)

### Example: Mac installation
These steps are pulled directly from the guide above.

Prepare for install.
```
xcode-select --install
brew update
```
Install
```
brew tap mongodb/brew
brew install mongodb-community@5.0
```
Start the mongodb service.
```
brew services start mongodb-community@5.0
```


## Run the application
...

## Deploy


## Tutorial: Basic database commands
Run `mongo` to connect to the db. Inside the mongo shell run `use test` to switch to the test DB. Then add some test data.

### Insert One
```
db.inventory.insertOne(
  {
    "name" : "Tigerlilly",
    "animal" : "cat",
    "sound" : "meow",
    "tags" : ["mammal"],
    "features" : {
      "color": "orange",
      "eyes": "green"
    },
  }
)
```

### Find all
```
myCursor = db.inventory.find({})
```


### Insert Many
```
db.inventory.insertMany([
  { "name": "Dr. Cat", "animal" : "cat", "sound" : "meow", "tags" : ["mammal"], "features" : { "color": "grey", "eyes": "brown" }},
  { "name": "Vader", "animal" : "cat", "sound" : "meow", "tags" : ["mammal"], "features" : { "color": "black", "eyes": "yellow" }},
  { "name": "Jadis", "animal" : "cat", "sound" : "meow", "tags" : ["mammal"], "features" : { "color": "black & white", "eyes": "yellow" }},
])
```

### Find subset
```
myCursor = db.inventory.find({ name: "Vader" })
```
And for nested values
```
myCursor = db.inventory.find({ "features.color": "black" })
```

There are 20 items per "page" of results. To fetch multiple pages.
```
while (myCursor.hasNext()) {
  print(tojson(myCursor.next()));
}
```

### Query Operations
```
myCursor = db.inventory.find({ "features.color": { "$in": ["black", "orange"] } })
```

There are numerical filters too.
```
myCursor = db.inventory.find({ "numberValue": { "$lt": 5 } })
```

Here is the [full list of query operators](https://docs.mongodb.com/manual/reference/operator/query/)

### Update records
Updates follow this format
```
db.inventory.updateOne(
   { ...query },
   { ...update}
)
```

For example
```
db.inventory.updateOne(
   { name: "Dr. Cat" },
   {
     $set: { "features.color": "grey stripes" }
   }
)
```

You can update multiple records using `updateMany` instead.

### Delete records
Deletes follow this format
```
db.inventory.deleteMany({
  ...query
})
```
For example
```
db.inventory.deleteMany({
  name: "Dr. Cat".
})
```

You can target one record using `deleteOne` as well.
